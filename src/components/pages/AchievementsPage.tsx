
import NotebookPage from "../notebook/NotebookPage";
import StickyNote from "../notebook/StickyNote";
import { Trophy, Medal, Star, Code, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "ET AI Hackathon 2026 — Phase 2",
    desc: "Qualified for Phase 2 of the ET AI Hackathon, progressing through the competition's evaluation rounds.",
    color: "pink" as const,
    rotation: -2,
  },
  {
    icon: Trophy,
    title: "TCS CodeVita Season 13 — Global Rank 5,337",
    desc: "Secured a global rank of 5,337 in one of the world's largest competitive programming contests.",
    color: "yellow" as const,
    rotation: 1.5,
  },
  {
    icon: Trophy,
    title: "Godrej Summersault Challenge — Finalist",
    desc: "Reached the final round of the Godrej Summersault Challenge (December 2025).",
    color: "pink" as const,
    rotation: -1,
  },
  {
    icon: Medal,
    title: "Medecro Hackathon — Finalist",
    desc: "Advanced to the final round of the Medecro Hackathon (August 2024).",
    color: "yellow" as const,
    rotation: 2,
  },
  {
    icon: Code,
    title: "Hacktoberfest 2024 — Open Source Contributor",
    desc: "Successfully contributed 4 accepted pull requests to open-source projects.",
    color: "blue" as const,
    rotation: -1.5,
  },
  {
    icon: Star,
    title: "NPTEL Elite — Cloud Computing",
    desc: "Earned an Elite certificate in Cloud Computing from IIT Kharagpur.",
    color: "green" as const,
    rotation: 1,
  },
  {
    icon: Award,
    title: "NPTEL Silver — Marketing Analytics",
    desc: "Earned a Silver certificate in Marketing Analytics through NPTEL.",
    color: "orange" as const,
    rotation: -1,
  },
];

const AchievementsPage = () => (
  <NotebookPage title="Achievements">
    <p className="font-body text-ink-pen text-lg mb-8">
      Milestones, competitions & little wins worth pinning up 📌
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item) => (
        <StickyNote
          key={item.title}
          color={item.color}
          rotation={item.rotation}
        >
          <div className="flex items-start gap-3">
            <item.icon
              size={24}
              className="text-ink-code flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="font-hand text-lg text-ink-pen">
                {item.title}
              </h3>
              <p className="font-body text-ink-pen/80 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        </StickyNote>
      ))}
    </div>
  </NotebookPage>
);

export default AchievementsPage;
