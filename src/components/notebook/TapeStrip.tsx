import { cn } from "@/lib/utils";

interface TapeStripProps {
  className?: string;
  rotation?: number;
}

const TapeStrip = ({ className, rotation = -5 }: TapeStripProps) => (
  <div
    className={cn("tape-strip w-16 h-5 rounded-sm", className)}
    style={{ transform: `rotate(${rotation}deg)` }}
  />
);

export default TapeStrip;
