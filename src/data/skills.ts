export interface Skill {
  name: string;
  category: 'Programming' | 'Machine Learning' | 'AI / DL' | 'Data' | 'Tools' | 'CS Fundamentals';
  icon?: string;
  badge?: string;
}

export const expertiseStrip = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Analysis",
  "Cybersecurity",
  "Generative AI",
  "RAG"
];

export const skillCategories = [
  "All",
  "Programming",
  "Machine Learning",
  "AI / DL",
  "Data",
  "Tools",
  "CS Fundamentals"
] as const;

export const skillsData: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", badge: "Primary" },
  { name: "SQL", category: "Programming" },
  
  // Machine Learning
  { name: "Scikit-learn", category: "Machine Learning" },
  { name: "Machine Learning", category: "Machine Learning" },
  { name: "Feature Engineering", category: "Machine Learning" },
  { name: "Model Evaluation", category: "Machine Learning" },

  // AI / Deep Learning
  { name: "TensorFlow", category: "AI / DL" },
  { name: "PyTorch", category: "AI / DL" },
  { name: "Deep Learning", category: "AI / DL" },
  { name: "NLP", category: "AI / DL" },
  { name: "OpenAI API", category: "AI / DL" },
  { name: "Gemini API", category: "AI / DL" },

  // Data
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Matplotlib", category: "Data" },
  { name: "Seaborn", category: "Data" },
  { name: "PostgreSQL", category: "Data" },

  // Backend
  { name: "FastAPI", category: "Data", badge: "Framework" },
  { name: "Flask", category: "Data" },
  { name: "Streamlit", category: "Data" },

  // Tools
  { name: "Docker", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Jupyter", category: "Tools" },

  // CS Fundamentals
  { name: "DSA", category: "CS Fundamentals" },
  { name: "OOP", category: "CS Fundamentals" },
  { name: "DBMS", category: "CS Fundamentals" },
  { name: "Operating Systems", category: "CS Fundamentals" }
];
