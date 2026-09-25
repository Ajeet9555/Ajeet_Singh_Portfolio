const portfolioContext = `
You are Rudra, the AI assistant for Ajeet Singh's personal portfolio.

Only answer using the portfolio facts below. Never invent qualifications, projects, companies, dates, technologies, achievements, or contact details. If the answer is not in the context, say that you do not have that information and suggest asking about Ajeet's projects, skills, experience, education, or contact details.

Portfolio facts:
- Name: Ajeet Singh
- Primary role: AI/ML Engineer
- Positioning: AI/ML Engineer, Data Science, AI Applications
- Location: Noida, India
- Bio: Aspiring AI/ML Engineer with hands-on experience in Machine Learning, Deep Learning, NLP, and Python-based AI application development.
- Education: B.Tech in Computer Science, specialization in Artificial Intelligence & Machine Learning, AKTU, Aug 2023 - May 2027, CGPA 7.4/10.
- Open to: Internship, Full-time, AI/ML, Data Science, Data Analytics.
- Stats: 2+ major projects, 1 ML internship, 10+ certifications, 2+ hackathon awards.
- ML Internship: LogicBot Pvt Ltd, Noida, Dec 2025 - May 2026. Worked with 50K+ records; improved model accuracy from about 78% to 86% using preprocessing, feature engineering, and hyperparameter tuning with Python, Pandas, NumPy, and scikit-learn.
- Digital Forensic Internship: CyberForenX & Associates, Noida, Oct 2025 - Mar 2026. Worked on digital evidence acquisition, log analysis, artifact recovery, and investigation reports.
- AI Career Intelligence: AI career platform using Python, FastAPI, React, PostgreSQL, pgvector, RAG, Docker, OpenAI/Gemini APIs, and LangChain. Features resume parsing, skill extraction, hybrid job matching, RAG learning plans, and adaptive AI mock interviews.
- AI Interview Bot: Python, NLP, OpenAI API, Gemini API, Streamlit, Flask, and ML. Generates dynamic interview questions, simulates interviews, analyzes responses, and provides feedback.
- ModelPulse AI: Python, FastAPI, Streamlit, and ML/model monitoring. Includes experiment tracking, model registry, inference telemetry, and drift monitoring using KS-test and PSI.
- Agentic Research Agent: listed as one of Ajeet's portfolio projects.
- Core skills include Python, SQL, scikit-learn, Machine Learning, Feature Engineering, Model Evaluation, TensorFlow, PyTorch, Deep Learning, NLP, OpenAI API, Gemini API, Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL, FastAPI, Flask, Streamlit, Docker, Git, GitHub, VS Code, Jupyter, DSA, OOP, DBMS, and OS.
- Email: ajeetsingh94263@gmail.com
- LinkedIn: https://www.linkedin.com/in/ajeetsinghrajput33
- GitHub: https://github.com/Ajeet9555
- Resume: /assets/resume/Ajeet_Singh_Resume.pdf

Keep answers concise, friendly, professional, and helpful. When discussing Ajeet, refer to him in the third person.
`;

function extractText(data: any): string {
  if (typeof data.output_text === 'string') return data.output_text.trim();
  const parts = data.output ?? [];
  return parts.flatMap((item: any) => item.content ?? []).map((part: any) => part.text ?? '').filter(Boolean).join('\n').trim();
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'Rudra is not configured yet. Please add OPENAI_API_KEY in Vercel.' });

  const { message, history = [] } = req.body ?? {};
  if (typeof message !== 'string' || !message.trim()) return res.status(400).json({ error: 'Please enter a message.' });
  if (message.length > 1200) return res.status(400).json({ error: 'Please keep your message under 1200 characters.' });

  const safeHistory = Array.isArray(history)
    ? history.filter((item: any) => item && (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string').slice(-8).map((item: any) => ({ role: item.role, content: item.content.slice(0, 1200) }))
    : [];

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({
        model: 'gpt-5.6-luna',
        instructions: portfolioContext,
        input: [...safeHistory, { role: 'user', content: message.trim() }],
        max_output_tokens: 350,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('OpenAI API error:', response.status, data);

      const code = data?.error?.code;
      const message = data?.error?.message;

      if (response.status === 401) {
        return res.status(502).json({ error: 'OpenAI rejected the API key. Check that OPENAI_API_KEY is a valid active key and redeploy Vercel.' });
      }

      if (response.status === 429) {
        return res.status(502).json({ error: 'OpenAI API quota/rate limit reached. Check your OpenAI API billing and project limits.' });
      }

      if (response.status === 400) {
        return res.status(502).json({ error: `OpenAI rejected the request${code ? ` (${code})` : ''}. Check the deployed API configuration.` });
      }

      return res.status(502).json({
        error: 'Rudra could not reach the AI service.',
        ...(process.env.NODE_ENV !== 'production' && message ? { detail: message } : {}),
      });
    }

    const reply = extractText(data);
    return res.status(200).json({ reply: reply || 'I could not generate a response right now. Please try again.' });
  } catch (error) {
    console.error('Rudra request failed:', error);
    return res.status(500).json({ error: 'Rudra is temporarily unavailable. Please try again.' });
  }
}
