export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
  category: 'AI/ML' | 'Cybersecurity';
}

export const experienceData: ExperienceItem[] = [
  {
    id: "logicbot-internship",
    number: "01",
    company: "LogicBot Pvt Ltd",
    role: "ML Intern",
    duration: "Dec 2025 - May 2026",
    location: "Noida, India",
    type: "Internship",
    category: "AI/ML",
    responsibilities: [
      "Developed and optimized Machine Learning models using Python, Pandas, NumPy, and Scikit-learn on 50K+ real-world records.",
      "Improved model accuracy from approximately 78% to 86% through data preprocessing, feature engineering, and hyperparameter tuning.",
      "Evaluated multiple ML algorithms using appropriate performance metrics and selected the best-performing model for business-oriented use cases."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Feature Engineering", "Hyperparameter Tuning", "Model Evaluation"],
    metrics: [
      { label: "Accuracy Gain", value: "78% → 86%" },
      { label: "Dataset Size", value: "50K+ Records" },
      { label: "Model Selection", value: "Multi-Algo Benchmarking" }
    ]
  },
  {
    id: "cyberforenx-internship",
    number: "02",
    company: "CyberForenX & Associates",
    role: "Digital Forensic Intern",
    duration: "Oct 2025 - March 2026",
    location: "Noida, India",
    type: "Internship",
    category: "Cybersecurity",
    responsibilities: [
      "Conducted digital evidence acquisition and forensic analysis using industry-standard investigation methodologies to assist in cyber incident assessment and reporting.",
      "Assisted in analyzing system logs, recovered digital artifacts, and documented forensic findings to support real-world cybersecurity and digital investigation cases."
    ],
    skills: ["Digital Forensics", "System Log Analysis", "Artifact Recovery", "Evidence Acquisition", "Incident Assessment", "Cybersecurity Reporting"],
    metrics: [
      { label: "Domain Focus", value: "Digital Evidence & Forensics" },
      { label: "Core Execution", value: "Log Analysis & Artifact Recovery" }
    ]
  }
];
