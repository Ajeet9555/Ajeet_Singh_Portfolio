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
    duration: "Dec 2025 – May 2026",
    location: "Noida, India",
    type: "Internship",
    category: "AI/ML",
    responsibilities: [
      "Developed and optimized machine learning models using Python, Pandas, NumPy, and Scikit-learn on **50K+** real-world records.",
      "Improved model accuracy from approximately **78% to 86%** through data preprocessing, feature engineering, and hyperparameter tuning.",
      "Evaluated multiple machine learning algorithms and selected suitable models for business-oriented use cases."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Preprocessing", "Feature Engineering", "Hyperparameter Tuning"],
    metrics: [
      { label: "Accuracy Gain", value: "78% → 86%" },
      { label: "Dataset Scale", value: "50K+ Records" },
      { label: "Model Selection", value: "Business Use Cases" }
    ]
  },
  {
    id: "cyberforenx-internship",
    number: "02",
    company: "CyberForenX & Associates",
    role: "Digital Forensic Intern",
    duration: "Oct 2025 – March 2026",
    location: "Noida, India",
    type: "Internship",
    category: "Cybersecurity",
    responsibilities: [
      "Conducted digital evidence acquisition and forensic analysis using industry-standard investigation methodologies.",
      "Assisted in analyzing system logs and recovering digital artifacts for cyber incident assessment.",
      "Documented forensic findings and contributed to investigation reports for real-world cybersecurity and digital investigation cases."
    ],
    skills: ["Digital Forensics", "System Log Analysis", "Artifact Recovery", "Evidence Acquisition", "Cyber Incident Assessment", "Investigation Reports"],
    metrics: [
      { label: "Domain Focus", value: "Digital Evidence & Forensics" },
      { label: "Core Execution", value: "Log Analysis & Artifact Recovery" },
      { label: "Key Output", value: "Investigation Reports" }
    ]
  }
];


