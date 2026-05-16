import NotebookPage from "../notebook/NotebookPage";
import StickyNote from "../notebook/StickyNote";
import { Award, Medal, Trophy, Star, Code, BookOpen } from "lucide-react";

const achievements = [
  {
  icon: Trophy,
  title: "TCS CodeVita Season 13 — Global Rank 5337",
  desc: "Competed in one of the world’s largest coding contests and secured a rank in the top few thousand globally.",
  color: "yellow" as const,
  rotation: -2,
},
  {
    icon: Trophy,
    title: "Medecro Hackathon — Finalist",
    desc: "Made it to the final round (Aug 2024). Didn't win the trophy but survived every elimination — that counts.",
    color: "yellow" as const,
    rotation: -2,
  },
  {
    icon: Trophy,
    title: "Godrej Summersault Challenge — Finalist",
    desc: "Reached the last round (Dec 2025). Competing against top talent and holding your ground hits different.",
    color: "pink" as const,
    rotation: 1.5,
  },
  {
    icon: Award,
    title: "IBM Cybersecurity Analyst Certificate",
    desc: "Because understanding how things break is the first step to building them right.",
    color: "blue" as const,
    rotation: -1,
  },
  {
    icon: Star,
    title: "NPTEL Elite — Cloud Computing (IIT Kharagpur)",
    desc: "Elite certificate in Cloud Computing. IIT-level course, completed with flying colors.",
    color: "green" as const,
    rotation: 2,
  },
  {
    icon: Medal,
    title: "MERN Full Stack — Ethnus Certified",
    desc: "Full stack with MongoDB, Express, React, Node. The whole enchilada, officially certified.",
    color: "orange" as const,
    rotation: -1.5,
  },
  {
    icon: Award,
    title: "Silver Certificate — Marketing Analytics",
    desc: "Bridging the gap between data and strategy. Analytics isn't just numbers, it's storytelling.",
    color: "pink" as const,
    rotation: 0.5,
  },
  {
    icon: Code,
    title: "Open Source Contributor",
    desc: "Fixed bugs and contributed to open source projects. Small PRs, big learning curves.",
    color: "yellow" as const,
    rotation: 1,
  },
  
];

const AchievementsPage = () => (
  <NotebookPage title="Achievements">
    <p className="font-body text-ink-pen text-lg mb-8">
      Milestones worth pinning to the wall 📌
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item) => (
        <StickyNote key={item.title} color={item.color} rotation={item.rotation}>
          <div className="flex items-start gap-3">
            <item.icon size={24} className="text-ink-code flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-hand text-lg text-ink-pen">{item.title}</h3>
              <p className="font-body text-ink-pen/80 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        </StickyNote>
      ))}
    </div>
  </NotebookPage>
);

export default AchievementsPage;
