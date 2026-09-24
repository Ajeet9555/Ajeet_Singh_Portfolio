export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  filterCategories: ('AI/ML' | 'Generative AI' | 'NLP' | 'Data Science' | 'Backend' | 'Agentic AI')[];
  description: string;
  featured: boolean;
  image: string;
  githubUrl: string;
  demoUrl?: string; // Only if real URL exists
  technologies: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    techStack: string[];
    keyFeatures: string[];
    implementation: string;
    results: string[];
    challenges: string[];
    futureImprovements: string[];
  };
}

export const projectFilterCategories = [
  "All",
  "AI/ML",
  "Generative AI",
  "NLP",
  "Data Science",
  "Backend",
  "Agentic AI"
] as const;

export const projectsData: Project[] = [
  {
    id: "ai-career-intelligence",
    number: "01",
    name: "AI Career Intelligence",
    category: "AI & RAG Career Platform",
    filterCategories: ["AI/ML", "Generative AI", "NLP", "Backend"],
    featured: true,
    image: "/assets/projects/ai_career_intelligence.png",
    githubUrl: "https://github.com/Ajeet9555/AI_Career_Intelligence",
    description: "AI-powered career intelligence platform with resume analysis, skill extraction, hybrid job matching, RAG-based learning plans and adaptive AI mock interviews.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "RAG"],
    caseStudy: {
      overview: "AI Career Intelligence is an end-to-end career guidance platform engineered to bridge candidate skill gaps and provide actionable career roadmaps using vector search and AI orchestration.",
      problem: "Job seekers often face ambiguity when matching their resumes against complex job descriptions, identifying critical skill gaps, and preparing for technical interviews.",
      solution: "Developed an intelligent platform leveraging pgvector vector embeddings, RAG retrieval pipelines, and LLM orchestration to parse resumes, perform hybrid job matching, generate custom learning plans, and simulate dynamic mock interviews.",
      architecture: "React Frontend SPA <-> FastAPI REST Server <-> PostgreSQL (pgvector) <-> OpenAI/Gemini LLM Orchestrator + Embedding Engine",
      techStack: ["Python 3.11+", "FastAPI", "React", "TypeScript", "PostgreSQL", "pgvector", "LangChain/RAG", "Docker"],
      keyFeatures: [
        "Automated PDF resume parsing & structured skill extraction",
        "Dense vector & sparse keyword hybrid job description matching",
        "RAG-powered personalized learning plan generation",
        "Adaptive AI mock interviewer with instant scoring and feedback"
      ],
      implementation: "Built using FastAPI for asynchronous API endpoints, PostgreSQL with pgvector for high-performance vector similarity search over candidate skills and job descriptions, and React for a clean user experience.",
      results: [
        "Evaluates skill alignment across thousands of tech roles in sub-second latency",
        "RAG pipeline delivers contextually relevant study plans without hallucinating prerequisites",
        "Full containerization with Docker for seamless production deployment"
      ],
      challenges: [
        "Extracting structured technical skills accurately from unformatted PDF resumes",
        "Balancing vector similarity search latency with precision in multi-attribute job matching"
      ],
      futureImprovements: [
        "Integration of real-time voice interview simulation using WebRTC",
        "Automated GitHub repository & portfolio code analyzer"
      ]
    }
  },
  {
    id: "ai-interview-bot",
    number: "02",
    name: "AI Interview Bot",
    category: "Generative AI Simulator",
    filterCategories: ["AI/ML", "Generative AI", "NLP"],
    featured: true,
    image: "/assets/projects/ai_interview_bot.png",
    githubUrl: "https://github.com/Ajeet9555/AI-INTERVIEW-BOT",
    description: "AI-powered interview platform for dynamic interview questions, interview simulation, response analysis and automated feedback.",
    technologies: ["Python", "NLP", "OpenAI / Gemini API", "Streamlit", "Machine Learning"],
    caseStudy: {
      overview: "AI Interview Bot is an interactive interview preparation tool that conducts adaptive technical and behavioral interviews with real-time response scoring and feedback.",
      problem: "Candidates struggle to get objective, instant feedback on technical interview responses and lack realistic simulation environments before actual company interviews.",
      solution: "Engineered an AI agent that dynamically adapts interview questions based on candidate role, difficulty preference, and previous answers, evaluating written or verbal responses across clarity, technical correctness, and depth.",
      architecture: "Streamlit Web Interface <-> Prompt Engine & Response Evaluator <-> LLM API Services",
      techStack: ["Python", "Streamlit", "OpenAI API", "Gemini API", "Scikit-learn", "NLP Libraries"],
      keyFeatures: [
        "Dynamic question generation based on target job role and skill level",
        "Real-time NLP response analysis for technical accuracy and clarity",
        "Comprehensive post-interview evaluation report with actionable improvement tips",
        "Support for multiple AI provider backends (OpenAI & Gemini)"
      ],
      implementation: "Designed using Python and Streamlit for rapid interaction, utilizing structured JSON output schemas from LLMs to parse question templates and candidate evaluations.",
      results: [
        "Provides candidate score breakdowns across domain knowledge, problem-solving, and communication",
        "Instant performance feedback loop eliminates wait times for practice evaluations"
      ],
      challenges: [
        "Ensuring deterministic evaluation criteria across diverse user response lengths",
        "Preventing repetitive question patterns during long interview sessions"
      ],
      futureImprovements: [
        "Speech-to-text integration for voice-driven interview simulation",
        "Custom resume PDF uploader for targeted candidate question generation"
      ]
    }
  },
  {
    id: "modelpulse-ai",
    number: "03",
    name: "ModelPulse AI",
    category: "MLOps & Model Drift Monitoring",
    filterCategories: ["AI/ML", "Data Science", "Backend"],
    featured: true,
    image: "/assets/projects/modelpulse_ai.png",
    githubUrl: "https://github.com/Ajeet9555/ModelPulse-AI",
    description: "Intelligent ML lifecycle and model monitoring platform for experiment tracking, model registry, inference, model comparison and data/model drift monitoring.",
    technologies: ["Python", "FastAPI", "Streamlit", "Machine Learning", "Model Monitoring"],
    caseStudy: {
      overview: "ModelPulse AI is an end-to-end MLOps platform for tracking ML experiments, managing model registries, monitoring production inference, and detecting data/concept drift.",
      problem: "Deployed machine learning models degrade over time as real-world data distributions shift, leading to unmonitored performance drops in production environments.",
      solution: "Built a centralized MLOps dashboard that records model metrics during training, manages model versions, and continuously calculates statistical drift metrics (KS-test, PSI) on incoming inference data.",
      architecture: "FastAPI Telemetry Service + Streamlit Dashboard <-> Experiment Tracker <-> Statistical Drift Computation Engine",
      techStack: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "MLflow"],
      keyFeatures: [
        "Continuous data & model drift detection using statistical hypothesis testing",
        "Experiment tracking with hyperparameter & metric visualization",
        "Centralized model registry for staging and production version control",
        "Model performance comparison tools for pre-deployment validation"
      ],
      implementation: "Implemented in Python with custom statistical calculation modules for Population Stability Index (PSI) and Kolmogorov-Smirnov test to detect data drift.",
      results: [
        "Enables automated drift alerting before model performance degrades",
        "Provides visual dashboard for comparing metrics across multiple model runs"
      ],
      challenges: [
        "Computing drift metrics efficiently over large streaming inference datasets",
        "Standardizing model artifact logging across different ML frameworks"
      ],
      futureImprovements: [
        "Automated model retraining triggers upon drift threshold breach",
        "Prometheus & Grafana metric integration"
      ]
    }
  },
  {
    id: "agentic-research-agent",
    number: "04",
    name: "Agentic Research Agent",
    category: "Autonomous Multi-Step AI Agent",
    filterCategories: ["AI/ML", "Generative AI", "Agentic AI", "Backend"],
    featured: true,
    image: "/assets/projects/agentic_research_agent.png",
    githubUrl: "https://github.com/Ajeet9555/Agentic-Research-Agent",
    description: "Fault-tolerant autonomous research agent with planning, tool execution, validation and failure recovery.",
    technologies: ["Python", "LangGraph", "FastAPI", "Agents", "Pydantic", "pytest"],
    caseStudy: {
      overview: "Agentic Research Agent is a multi-step autonomous AI agent built on LangGraph designed to perform deep research, query tools, validate findings, and self-recover from errors.",
      problem: "Standard single-prompt AI searches lack deep verification, fail when external tools return unexpected errors, and suffer from shallow synthesis.",
      solution: "Created a state-graph driven agent architecture that breaks complex research prompts into sub-tasks, invokes search and scraping tools, validates evidence consistency, and retries failed steps dynamically.",
      architecture: "LangGraph State Graph <-> Pydantic Tool Validation Layer <-> FastAPI REST Interface",
      techStack: ["Python 3.12", "LangGraph", "LangChain", "FastAPI", "Pydantic v2", "pytest"],
      keyFeatures: [
        "Autonomous multi-step research plan generation and decomposition",
        "Robust tool execution loop (Web Search, Content Scraper, Summarizer)",
        "Self-reflection and fact validation nodes before final report synthesis",
        "Automatic failure recovery & exception fallback handling"
      ],
      implementation: "Built using LangGraph state graph mechanics, enforcing strict type-checking and tool input validation with Pydantic schemas.",
      results: [
        "Produces structured, citation-backed research reports for open-ended queries",
        "Fault-tolerant node recovery ensures agent execution completes even if individual API calls fail"
      ],
      challenges: [
        "Preventing infinite state loops during tool error recovery cycles",
        "Optimizing LLM token consumption across multi-step research iterations"
      ],
      futureImprovements: [
        "Multi-agent collaboration (Researcher + Critic + Editor framework)",
        "Export reports directly to PDF and Markdown formats"
      ]
    }
  }
];
