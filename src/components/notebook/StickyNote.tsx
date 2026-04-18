import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green" | "orange";
  className?: string;
  rotation?: number;
}

const colorMap = {
  yellow: "bg-amber-100",
  pink: "bg-pink-100",
  blue: "bg-sky-100",
  green: "bg-emerald-100",
  orange: "bg-orange-100",
};

const StickyNote = ({ children, color = "yellow", className, rotation = -1 }: StickyNoteProps) => (
  <motion.div
    className={cn(
      "p-4 shadow-md font-body relative",
      colorMap[color],
      className
    )}
    style={{ transform: `rotate(${rotation}deg)` }}
    whileHover={{ y: -4, rotate: rotation + 1, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

export default StickyNote;
