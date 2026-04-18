import { motion } from "framer-motion";

interface DoodleSvgProps {
  d: string;
  className?: string;
  size?: number;
  strokeColor?: string;
}

const DoodleSvg = ({ d, className, size = 48, strokeColor = "currentColor" }: DoodleSvgProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <motion.path
      d={d}
      stroke={strokeColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </svg>
);

export default DoodleSvg;
