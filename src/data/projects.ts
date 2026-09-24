export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  focusAreas: string[];
  architectureDiagram: {
    flow: string[];
    components: { name: string; description: string }[];
  };
  howItWorks: { step: string; title: string; description: string }[];
  techStackDetailed: { category: string; items: string[] }[];
  keyFeatures: string[];
  screenshots: {
    banner: string;
    architectureImage?: string;
    placeholders: { title: string; description: string }[];
  };
  challenges: { challenge: string; solution: string }[];
  githubUrl: string;
  demoUrl?: string; // Only if real URL exists
}

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
  demoUrl?: string;
  technologies: string[];
  caseStudy: ProjectCaseStudy;
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
    category: "AI Career Platform",
    filterCategories: ["AI/ML", "Generative AI", "NLP", "Backend"],
    featured: true,
    image: "/assets/projects/ai_career_intelligence.png",
    githubUrl: "https://github.com/Ajeet9555/AI_Career_Intelligence",
    description: "An AI-powered career intelligence platform that analyzes resumes, extracts skills, performs hybrid job matching, generates personalized RAG-based learning plans, and supports adaptive AI mock interviews.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "RAG", "Docker"],
    caseStudy: {
      overview: "AI Career Intelligence is an end-to-end career guidance platform engineered to bridge candidate skill gaps and provide actionable career roadmaps using vector search and AI orchestration.",
      problem: "Job seekers struggle to identify concrete skill gaps, map their resumes to dynamic industry requirements, and receive structured, real-time interview practice.",
      solution: "Developed an intelligent platform leveraging pgvector vector embeddings, RAG retrieval pipelines, and LLM orchestration to parse resumes, perform hybrid job matching, generate custom learning plans, and simulate dynamic mock interviews.",
      focusAreas: [
        "Resume Analysis — Automated PDF parsing & structured skill extraction",
        "Skill Extraction — Multi-attribute skill taxonomy extraction",
        "Hybrid Job Matching — Combining dense vector similarity search with sparse keyword matching",
        "RAG-based Personalized Learning Plans — Contextual roadmap generation without prerequisites hallucination",
        "Adaptive AI Mock Interviews — Role-specific dynamic technical interview practice"
      ],
      architectureDiagram: {
        flow: [
          "Candidate PDF Resume & Target Role",
          "FastAPI Ingestion & Text Extraction",
          "Dense Vector Embedding (pgvector) + Sparse Keyword Scoring",
          "RAG Retrieval Engine & LLM Orchestrator",
          "Structured Learning Plan & Adaptive Interview Feedback"
        ],
        components: [
          { name: "Frontend Client", description: "React SPA providing interactive resume upload, job matching dashboard, and mock interview interface." },
          { name: "API Gateway", description: "FastAPI asynchronous web server handling routing, background parsing jobs, and LLM streaming responses." },
          { name: "Vector Store", description: "PostgreSQL with pgvector extension storing high-dimensional embeddings for candidates and job profiles." },
          { name: "RAG Engine", description: "Retrieval pipeline pulling contextually relevant learning modules and prerequisites based on skill gaps." }
        ]
      },
      howItWorks: [
        { step: "01", title: "Ingestion & Parsing", description: "Candidate uploads resume PDF; FastAPI parses text and extracts experience, education, and skill taxonomies." },
        { step: "02", title: "Vector Embedding & Storage", description: "Candidate skill profiles and target job description embeddings are stored and indexed using PostgreSQL with pgvector." },
        { step: "03", title: "Hybrid Matching", description: "Computes cosine similarity between resume embeddings and target role profiles, weighted alongside sparse keyword coverage." },
        { step: "04", title: "RAG Learning Roadmap", description: "Retrieves targeted learning modules for identified skill gaps to compile a personalized step-by-step roadmap." },
        { step: "05", title: "Mock Interview Simulation", description: "Generates role-tailored questions dynamically, evaluates candidate answers across clarity and technical depth, and generates structured feedback." }
      ],
      techStackDetailed: [
        { category: "Backend", items: ["Python 3.11+", "FastAPI", "Uvicorn"] },
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
        { category: "Database & Vector", items: ["PostgreSQL", "pgvector"] },
        { category: "AI / ML", items: ["RAG", "LangChain", "OpenAI / Gemini API"] },
        { category: "DevOps", items: ["Docker", "Docker Compose"] }
      ],
      keyFeatures: [
        "Automated PDF resume parsing & structured skill extraction",
        "Dense vector & sparse keyword hybrid job description matching",
        "RAG-powered personalized learning plan generation",
        "Adaptive AI mock interviewer with instant scoring and feedback"
      ],
      screenshots: {
        banner: "/assets/projects/ai_career_intelligence.png",
        placeholders: [
          { title: "Candidate Dashboard UI", description: "Placeholder: Resume score, skill radar breakdown, and top job match recommendations." },
          { title: "RAG Learning Roadmap View", description: "Placeholder: Step-by-step module breakdown generated from retrieved skill gaps." }
        ]
      },
      challenges: [
        { challenge: "Extracting structured technical skills accurately from unformatted PDF resumes with varying layouts.", solution: "Implemented custom regex and LLM JSON-schema validation parsers to guarantee deterministic skill extraction output." },
        { challenge: "Balancing vector similarity search latency with precision in multi-attribute job matching.", solution: "Leveraged PostgreSQL pgvector HNSW indexing to maintain sub-second retrieval times across large job profile datasets." }
      ],
      githubUrl: "https://github.com/Ajeet9555/AI_Career_Intelligence"
    }
  },
  {
    id: "ai-interview-bot",
    number: "02",
    name: "AI Interview Bot",
    category: "AI Interview Simulator",
    filterCategories: ["AI/ML", "Generative AI", "NLP"],
    featured: true,
    image: "/assets/projects/ai_interview_bot.png",
    githubUrl: "https://github.com/Ajeet9555/AI-INTERVIEW-BOT",
    description: "An AI-powered interview platform for dynamic interview question generation, interview simulation, response analysis and automated feedback.",
    technologies: ["Python", "NLP", "OpenAI API", "Gemini API", "Streamlit", "Flask", "Machine Learning"],
    caseStudy: {
      overview: "AI Interview Bot is an interactive interview preparation tool that conducts adaptive technical and behavioral interviews with real-time response scoring and feedback.",
      problem: "Candidates struggle to get objective, instant feedback on technical interview responses and lack realistic simulation environments before actual company interviews.",
      solution: "Engineered an AI agent that dynamically adapts interview questions based on candidate role, difficulty preference, and previous answers, evaluating written or verbal responses across clarity, technical correctness, and depth.",
      focusAreas: [
        "Dynamic Interview Question Generation — Tailored role-specific questioning",
        "Interview Simulation — Realistic technical and behavioral rounds",
        "Response Analysis — Multi-metric evaluation of candidate answers",
        "Automated Feedback — Actionable breakdown with improvement recommendations",
        "AI/NLP-based Interview Experience — Multi-provider backend (OpenAI & Gemini API)"
      ],
      architectureDiagram: {
        flow: [
          "User Role & Seniority Selection",
          "Prompt Engine & Question Generator (OpenAI / Gemini)",
          "Candidate Response Ingestion",
          "NLP Evaluator & Response Scoring Matrix",
          "Structured Post-Interview Feedback Summary"
        ],
        components: [
          { name: "Web Interface", description: "Streamlit / Flask frontend for configuring interview rounds and submitting responses." },
          { name: "Prompt Engine", description: "Dynamic prompt generator creating context-aware technical questions based on role requirements." },
          { name: "NLP Evaluator", description: "Natural Language Processing scoring pipeline analyzing response relevance, technical accuracy, and structure." },
          { name: "Report Synthesizer", description: "Output engine compiling multi-metric feedback reports with ideal answer suggestions." }
        ]
      },
      howItWorks: [
        { step: "01", title: "Interview Configuration", description: "User selects target job role, domain focus, and difficulty level." },
        { step: "02", title: "Dynamic Question Generation", description: "Prompt engine generates role-aligned technical and situational questions." },
        { step: "03", title: "Response Ingestion", description: "Candidate inputs written responses or voice transcripts during the timed round." },
        { step: "04", title: "Multi-Metric NLP Analysis", description: "Evaluates candidate answer across technical correctness, clarity, confidence, and framework structure." },
        { step: "05", title: "Feedback Generation", description: "Produces a detailed post-interview summary highlighting strengths and specific improvement tips." }
      ],
      techStackDetailed: [
        { category: "Core Language", items: ["Python 3.10+"] },
        { category: "Web Interface", items: ["Streamlit", "Flask"] },
        { category: "AI Services", items: ["OpenAI API", "Gemini API"] },
        { category: "NLP & ML", items: ["Scikit-learn", "NLTK", "TextBlob"] }
      ],
      keyFeatures: [
        "Dynamic question generation based on target job role and skill level",
        "Real-time NLP response analysis for technical accuracy and clarity",
        "Comprehensive post-interview evaluation report with actionable improvement tips",
        "Support for multiple AI provider backends (OpenAI & Gemini)"
      ],
      screenshots: {
        banner: "/assets/projects/ai_interview_bot.png",
        placeholders: [
          { title: "Live Simulation Interface UI", description: "Placeholder: Timed question view, response box, and recording status." },
          { title: "Automated Evaluation Report UI", description: "Placeholder: Score breakdown charts and detailed feedback text." }
        ]
      },
      challenges: [
        { challenge: "Ensuring deterministic evaluation criteria across diverse user response lengths and communication styles.", solution: "Enforced strict JSON scoring rubrics and multi-dimensional evaluation prompts." },
        { challenge: "Preventing repetitive question patterns during extended interview practice sessions.", solution: "Implemented dynamic context window tracking to maintain session state and topic variation." }
      ],
      githubUrl: "https://github.com/Ajeet9555/AI-INTERVIEW-BOT"
    }
  },
  {
    id: "modelpulse-ai",
    number: "03",
    name: "ModelPulse AI",
    category: "MLOps & Model Monitoring",
    filterCategories: ["AI/ML", "Data Science", "Backend"],
    featured: true,
    image: "/assets/projects/modelpulse_ai.png",
    githubUrl: "https://github.com/Ajeet9555/ModelPulse-AI",
    description: "A machine learning lifecycle and model monitoring platform supporting experiment tracking, model registry, inference, model comparison, and data/model drift monitoring.",
    technologies: ["Python", "FastAPI", "Streamlit", "Machine Learning", "Model Monitoring"],
    caseStudy: {
      overview: "ModelPulse AI is an end-to-end MLOps platform for tracking ML experiments, managing model registries, monitoring production inference, and detecting data/concept drift.",
      problem: "Deployed machine learning models degrade over time as real-world data distributions shift, leading to unmonitored performance drops in production environments.",
      solution: "Built a centralized MLOps dashboard that records model metrics during training, manages model versions, and continuously calculates statistical drift metrics (KS-test, PSI) on incoming inference data.",
      focusAreas: [
        "Experiment Tracking — Metrics, hyperparameters, and run comparisons",
        "Model Registry — Centralized staging and production version control",
        "Model Inference — Low-latency telemetry service for prediction logging",
        "Model Comparison — Side-by-side performance evaluation across metrics",
        "Data & Model Drift Monitoring — Continuous statistical hypothesis testing (KS-test, PSI)"
      ],
      architectureDiagram: {
        flow: [
          "ML Training Runs / Production Inference",
          "FastAPI Telemetry Logger",
          "Model Registry & Metric Store",
          "Statistical Drift Engine (KS-Test & PSI)",
          "Streamlit Monitoring Dashboard & Alerts"
        ],
        components: [
          { name: "Telemetry Service", description: "FastAPI backend capturing prediction payloads, feature vectors, and latency metrics." },
          { name: "Metric Store", description: "Central repository storing experiment parameters, evaluation metrics, and baseline feature distributions." },
          { name: "Statistical Drift Engine", description: "Computation module running Kolmogorov-Smirnov (KS) tests and Population Stability Index (PSI) calculations." },
          { name: "MLOps Dashboard", description: "Streamlit UI rendering metric trends, ROC curves, model registry state, and drift alerts." }
        ]
      },
      howItWorks: [
        { step: "01", title: "Experiment Logging", description: "Training scripts log parameters, confusion matrices, and ROC curves to the metric store." },
        { step: "02", title: "Model Registration", description: "Promising candidate models are registered, versioned, and tagged for staging or production." },
        { step: "03", title: "Inference Telemetry", description: "Production endpoint captures inference feature vectors and prediction outputs asynchronously." },
        { step: "04", title: "Drift Calculation", description: "Statistical engine compares inference feature distributions against baseline training data using KS-test and PSI." },
        { step: "05", title: "Visualization & Alerting", description: "Streamlit dashboard displays real-time model health, drift warnings, and comparison charts." }
      ],
      techStackDetailed: [
        { category: "Core Backend", items: ["Python 3.10+", "FastAPI"] },
        { category: "Dashboard", items: ["Streamlit"] },
        { category: "ML & Analytics", items: ["Scikit-learn", "Pandas", "NumPy", "SciPy"] },
        { category: "MLOps", items: ["MLflow", "Custom Drift Engine"] }
      ],
      keyFeatures: [
        "Continuous data & model drift detection using statistical hypothesis testing",
        "Experiment tracking with hyperparameter & metric visualization",
        "Centralized model registry for staging and production version control",
        "Model performance comparison tools for pre-deployment validation"
      ],
      screenshots: {
        banner: "/assets/projects/modelpulse_ai.png",
        placeholders: [
          { title: "Experiment Comparison UI", description: "Placeholder: Metric comparison table and hyperparameter tuning plots." },
          { title: "Data Drift Analytics UI", description: "Placeholder: Feature distribution histograms and PSI drift alert indicators." }
        ]
      },
      challenges: [
        { challenge: "Computing statistical drift metrics efficiently over streaming inference data without blocking inference calls.", solution: "Implemented asynchronous background telemetry workers in FastAPI to compute statistical metrics out-of-band." },
        { challenge: "Standardizing metric logging across different machine learning frameworks (Scikit-learn, XGBoost, PyTorch).", solution: "Designed a unified JSON schema for logging hyperparameters, confusion matrices, and metrics." }
      ],
      githubUrl: "https://github.com/Ajeet9555/ModelPulse-AI"
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
    description: "A fault-tolerant autonomous research agent capable of multi-step planning, tool execution, validation, fact-checking and failure recovery.",
    technologies: ["Python", "LangGraph", "FastAPI", "Pydantic", "Agents", "pytest"],
    caseStudy: {
      overview: "Agentic Research Agent is a multi-step autonomous AI agent built on LangGraph designed to perform deep research, query external tools, validate findings, and self-recover from errors.",
      problem: "Standard single-prompt AI searches lack deep verification, fail when external tools return unexpected errors, and suffer from shallow synthesis.",
      solution: "Created a state-graph driven agent architecture using LangGraph that breaks complex research prompts into sub-tasks, invokes search and scraping tools, validates evidence consistency, and retries failed steps dynamically.",
      focusAreas: [
        "Autonomous Research — Open-ended multi-source intelligence gathering",
        "Multi-step Planning — Task decomposition into structured sub-queries",
        "Tool Execution — Asynchronous web search, document scraping, and content extraction",
        "Validation & Fact Checking — Cross-checking evidence sources before report synthesis",
        "Failure Recovery — Graph state loop recovery when tool API calls fail"
      ],
      architectureDiagram: {
        flow: [
          "User Research Query",
          "Plan Node (Sub-task Decomposition)",
          "Research / Tool Node (Web Search & Scrapers)",
          "Validation & Fact-Check Node",
          "State Recovery / Loop Control",
          "Synthesized Final Report"
        ],
        components: [
          { name: "State Graph Router", description: "LangGraph state machine managing node transitions and state updates." },
          { name: "Planner Node", description: "LLM node decomposing complex research queries into actionable sub-tasks." },
          { name: "Tool Suite", description: "Asynchronous search, web scraping, and document parser modules." },
          { name: "Validation Node", description: "Fact-checking layer evaluating fetched source reliability and Pydantic schema constraints." }
        ]
      },
      howItWorks: [
        { step: "01", title: "Plan Generation", description: "Planner node analyzes user prompt and creates a structured sub-task DAG." },
        { step: "02", title: "Tool Invocation", description: "Agent executes web search and content scraper tools concurrently for each sub-task." },
        { step: "03", title: "Schema Validation", description: "Validation node checks fetched data against schema rules enforced via Pydantic." },
        { step: "04", title: "Fault Recovery", description: "If a tool fails or data is incomplete, state router directs execution back to alternative tools or refined sub-queries." },
        { step: "05", title: "Report Synthesis", description: "Final node compiles validated findings into a structured, citation-backed research report." }
      ],
      techStackDetailed: [
        { category: "Agentic Framework", items: ["LangGraph", "LangChain"] },
        { category: "Core Language & API", items: ["Python 3.12", "FastAPI"] },
        { category: "Validation & Testing", items: ["Pydantic v2", "pytest"] }
      ],
      keyFeatures: [
        "Autonomous multi-step research plan generation and decomposition",
        "Robust tool execution loop (Web Search, Content Scraper, Summarizer)",
        "Self-reflection and fact validation nodes before final report synthesis",
        "Automatic failure recovery & exception fallback handling"
      ],
      screenshots: {
        banner: "/assets/projects/agentic_research_agent.png",
        architectureImage: "/assets/projects/agentic_architecture.png",
        placeholders: [
          { title: "Agent Execution Graph & State Logs UI", description: "Placeholder: Step-by-step DAG node execution logs and tool call outputs." }
        ]
      },
      challenges: [
        { challenge: "Preventing infinite state loops during automated tool error recovery cycles.", solution: "Implemented max-retry state counters and fallback node routers in LangGraph." },
        { challenge: "Enforcing strict type safety and input validation across autonomous tool calls.", solution: "Utilized Pydantic v2 schemas for all tool input/output specifications and comprehensive pytest test coverage." }
      ],
      githubUrl: "https://github.com/Ajeet9555/Agentic-Research-Agent"
    }
  }
];
