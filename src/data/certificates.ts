export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI / ML & Programming' | 'Cybersecurity' | 'Job Simulations' | 'Hackathons & Achievements' | 'Other Certifications';
  image: string;
  duration?: string;
  credentialId?: string;
}

export const certificateCategories = [
  "All",
  "AI / ML & Programming",
  "Cybersecurity",
  "Job Simulations",
  "Hackathons & Achievements",
  "Other Certifications"
] as const;

export const certificatesData: Certificate[] = [
  {
    id: "oracle-ai-foundations",
    number: "01",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "September 11, 2025",
    category: "AI / ML & Programming",
    image: "/assets/certificates/oracle_ai_foundations.png",
  },
  {
    id: "krish-naik-aiml-bootcamp",
    number: "02",
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Krish Naik / KRISHAI Technologies Private Limited",
    date: "March 24, 2026",
    duration: "99 total hours",
    category: "AI / ML & Programming",
    image: "/assets/certificates/krish_naik_aiml_bootcamp.png",
  },
  {
    id: "ibm-prompt-engineering",
    number: "03",
    title: "Prompt Engineering: Shaping Better AI Responses",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "AI / ML & Programming",
    image: "/assets/certificates/ibm_prompt_engineering.png",
  },
  {
    id: "python-essentials-1",
    number: "04",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "June 1, 2025",
    category: "AI / ML & Programming",
    image: "/assets/certificates/python_essentials_1.png",
  },
  {
    id: "hp-life-ai",
    number: "05",
    title: "AI for Beginners",
    issuer: "HP LIFE / HP Foundation",
    date: "December 24, 2024",
    category: "AI / ML & Programming",
    image: "/assets/certificates/hp_life_ai.png",
  },
  {
    id: "ibm-ai-coursera",
    number: "06",
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM / Coursera",
    date: "December 5, 2024",
    category: "AI / ML & Programming",
    image: "/assets/certificates/ibm_ai_coursera.png",
  },
  {
    id: "html-certification-test",
    number: "07",
    title: "Complete Coding HTML Certification Test",
    issuer: "Complete Coding",
    date: "February 4, 2025",
    category: "AI / ML & Programming",
    image: "/assets/certificates/python_essentials_alt.png",
  },
  {
    id: "palo-alto-cybersecurity",
    number: "08",
    title: "Cybersecurity Foundation",
    issuer: "Palo Alto Networks Cybersecurity Academy",
    date: "October 1, 2025",
    category: "Cybersecurity",
    image: "/assets/certificates/palo_alto_cybersecurity.png",
  },
  {
    id: "udemy-network-security",
    number: "09",
    title: "Network Security: Mastering Cybersecurity, Ethical Hacking",
    issuer: "Udemy",
    date: "October 8, 2025",
    duration: "11.5 hours",
    category: "Cybersecurity",
    image: "/assets/certificates/udemy_network_security.jpg",
  },
  {
    id: "udemy-network-hacking",
    number: "10",
    title: "Complete Network Hacking Course 2025 - Beginner to Advanced",
    issuer: "Udemy",
    date: "November 26, 2025",
    duration: "5 hours",
    category: "Cybersecurity",
    image: "/assets/certificates/udemy_network_hacking.jpg",
  },
  {
    id: "udemy-ethical-hacking",
    number: "11",
    title: "Complete Ethical Hacking Course 2025: Go From Zero to Hero",
    issuer: "Udemy",
    date: "October 12, 2025",
    duration: "5.5 hours",
    category: "Cybersecurity",
    image: "/assets/certificates/udemy_ethical_hacking.jpg",
  },
  {
    id: "jpmorgan-swe-simulation",
    number: "12",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    date: "June 3, 2025",
    category: "Job Simulations",
    image: "/assets/certificates/jpmorgan_swe.png",
  },
  {
    id: "jpmorgan-ib-simulation",
    number: "13",
    title: "Investment Banking Job Simulation",
    issuer: "JPMorgan / Forage",
    date: "December 23, 2024",
    category: "Job Simulations",
    image: "/assets/certificates/jpmorgan_ib.png",
  },
  {
    id: "deloitte-cyber-simulation",
    number: "14",
    title: "Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    date: "June 3, 2025",
    category: "Job Simulations",
    image: "/assets/certificates/deloitte_cyber.png",
  },
  {
    id: "rkgit-guvi-hackathon-cert",
    number: "15",
    title: "RKGIT GUVI Day Hackathon — 2nd Prize",
    issuer: "HCL GUVI / RKGIT",
    date: "April 26, 2025",
    category: "Hackathons & Achievements",
    image: "/assets/achievements/hackathon_winner_rkgit.jpg",
  },
  {
    id: "aktu-ai-confluence-cert",
    number: "16",
    title: "AKTU AI Tech Confluence 2025 — Hackathon Participation",
    issuer: "AKTU / Powered by HCL GUVI",
    date: "April 2025",
    category: "Hackathons & Achievements",
    image: "/assets/achievements/aktu_ai_tech_confluence.jpg",
  },
  {
    id: "singing-competition-cert",
    number: "17",
    title: "RKGIT — Inter College Singing Competition",
    issuer: "RKGIT Cultural Committee",
    date: "May 3, 2025",
    category: "Hackathons & Achievements",
    image: "/assets/achievements/singing_competition.jpg",
  },
  {
    id: "nptel-soft-skills",
    number: "18",
    title: "Developing Soft Skills and Personality",
    issuer: "NPTEL / IIT Kanpur",
    date: "Aug-Oct 2024",
    category: "Other Certifications",
    image: "/assets/certificates/nptel_soft_skills.png",
  }
];

