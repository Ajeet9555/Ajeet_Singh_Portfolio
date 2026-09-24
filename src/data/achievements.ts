export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  date: string;
  badge: string;
  description: string;
  image: string;
  secondaryImage?: string;
  featured: boolean;
}

export const achievementsData: Achievement[] = [
  {
    id: "rkgit-guvi-hackathon",
    title: "2nd Prize — RKGIT GUVI Day Hackathon",
    organizer: "Organized by HCL GUVI",
    date: "26 April 2025",
    badge: "2nd Place Winner",
    description: "Secured 2nd position in the prestigious RKGIT GUVI Day Hackathon organized by HCL GUVI. Recognized for building innovative AI solution & awarded official trophies and goodies.",
    image: "/assets/achievements/hackathon_winner_rkgit.jpg",
    secondaryImage: "/assets/achievements/guvi_hackathon_goodies.jpg",
    featured: true
  },
  {
    id: "aktu-ai-tech-confluence",
    title: "AKTU AI Tech Confluence 2025",
    organizer: "Powered by HCL GUVI",
    date: "April 2025",
    badge: "Hackathon Finalist",
    description: "Participated in the state-level AKTU AI Tech Confluence 2025 Hackathon, showcasing AI and machine learning projects.",
    image: "/assets/achievements/aktu_ai_tech_confluence.jpg",
    featured: false
  },
  {
    id: "inter-college-singing",
    title: "Inter College Singing Competition",
    organizer: "RKGIT",
    date: "03 May 2025",
    badge: "Appreciation Award",
    description: "Awarded Certificate of Appreciation for outstanding performance in the Inter College Cultural & Singing Competition at RKGIT.",
    image: "/assets/achievements/singing_competition.jpg",
    featured: false
  }
];
