import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  rotation?: number;
  className?: string;
}

const ProjectCard = ({ title, description, tech, github, demo, rotation = 0, className }: ProjectCardProps) => (
  <motion.div
    className={cn(
      "paper-texture graph-paper p-5 shadow-md border border-muted relative",
      className
    )}
    style={{ transform: `rotate(${rotation}deg)` }}
    whileHover={{ y: -4, rotate: rotation + 0.5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2)" }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <h3 className="font-hand text-xl text-ink-pen mb-2">{title}</h3>
    <p className="font-body text-ink-pen/80 text-sm mb-3">{description}</p>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {tech.map((t) => (
        <span key={t} className="font-mono text-xs bg-highlighter/50 px-2 py-0.5 rounded-sm text-ink-pen">
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="ink-link text-sm flex items-center gap-1">
          <Github size={14} /> Code
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="ink-link text-sm flex items-center gap-1">
          <ExternalLink size={14} /> Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
