import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  color: string;
}

interface NotebookTabsProps {
  tabs: Tab[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const NotebookTabs = ({ tabs, activeIndex, onTabClick }: NotebookTabsProps) => (
  <div className="absolute right-0 top-16 z-20 flex flex-col gap-1">
    {tabs.map((tab, i) => (
      <motion.button
        key={tab.label}
        onClick={() => onTabClick(i)}
        className={cn(
          "px-3 py-2 text-sm font-hand rounded-r-md shadow-md border-l-0 cursor-pointer text-ink-pen transition-colors",
          tab.color,
          activeIndex === i && "font-bold translate-x-1"
        )}
        whileHover={{ x: 8 }}
        animate={{ x: activeIndex === i ? 4 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {tab.label}
      </motion.button>
    ))}
  </div>
);

export default NotebookTabs;
