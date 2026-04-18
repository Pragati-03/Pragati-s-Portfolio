import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotebookCover from "@/components/notebook/NotebookCover";
import NotebookTabs from "@/components/notebook/NotebookTabs";
import AboutPage from "@/components/pages/AboutPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import AchievementsPage from "@/components/pages/AchievementsPage";
import ContactPage from "@/components/pages/ContactPage";

const tabs = [
  { label: "About", color: "bg-amber-200" },
  { label: "Skills", color: "bg-sky-200" },
  { label: "Projects", color: "bg-emerald-200" },
  { label: "Achievements", color: "bg-pink-200" },
  { label: "Contact", color: "bg-orange-200" },
];

const pages = [AboutPage, SkillsPage, ProjectsPage, AchievementsPage, ContactPage];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const ActivePage = pages[activeTab];

  return (
    <div className="desk-texture min-h-screen flex items-center justify-center p-4 md:p-8">
      <title>Pragati's Tech Notebook — CS Student Portfolio</title>
      <meta name="description" content="A digital notebook portfolio by Pragati — CS student passionate about ML and Web Development." />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, rotateY: -90, originX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NotebookCover onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="notebook"
            className="relative"
            style={{ width: "min(95vw, 800px)", minHeight: "min(85vh, 900px)" }}
            initial={{ opacity: 0, rotateY: 90, originX: 0 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Notebook body */}
            <div className="notebook-shadow rounded-xl overflow-hidden relative">
              {/* Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-spine z-10 rounded-l-xl" />

              {/* Page content */}
              <div className="ml-6 rounded-r-xl overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeTab}
                    custom={direction}
                    initial={{ opacity: 0, x: direction >= 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction >= 0 ? -50 : 50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ActivePage />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Tabs */}
            <NotebookTabs tabs={tabs} activeIndex={activeTab} onTabClick={handleTabClick} />

            {/* Back to cover */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-cover text-cover-foreground text-xs font-mono flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
              title="Close notebook"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
