import { motion } from "framer-motion";
import DoodleSvg from "./DoodleSvg";

interface NotebookCoverProps {
  onOpen: () => void;
}

const NotebookCover = ({ onOpen }: NotebookCoverProps) => (
  <motion.div
    className="cover-texture rounded-xl notebook-shadow cursor-pointer relative overflow-hidden select-none"
    style={{ width: "min(90vw, 700px)", height: "min(85vh, 900px)" }}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    onClick={onOpen}
    initial={{ rotateY: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
  >
    {/* Spine */}
    <div className="absolute left-0 top-0 bottom-0 w-8 bg-spine rounded-l-xl" />

    {/* Label sticker */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="bg-paper/90 px-8 py-6 rounded-sm shadow-md" style={{ transform: "rotate(-1deg)" }}>
        <h1 className="font-hand text-3xl md:text-4xl text-ink-pen mb-2">
          Pragati's Tech Notebook
        </h1>
        <div className="w-3/4 mx-auto h-[2px] bg-ink-pen/20 mb-3" />
        <p className="font-body text-ink-pen/70 text-lg">
          CS Student · ML · Web Dev
        </p>
      </div>
    </div>

    {/* Doodles */}
    <DoodleSvg
      d="M10 10 Q20 5 30 15 Q35 20 25 30 Q15 35 10 25 Z"
      className="absolute top-12 right-12 text-cover-foreground/20"
      size={50}
    />
    <DoodleSvg
      d="M5 24 L15 24 M10 19 L10 29 M30 24 C30 15 45 15 45 24 C45 33 30 33 30 24"
      className="absolute bottom-16 left-16 text-cover-foreground/20"
      size={50}
    />

    {/* Open prompt */}
    <motion.p
      className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-cover-foreground/50 text-sm"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Click to open →
    </motion.p>
  </motion.div>
);

export default NotebookCover;
