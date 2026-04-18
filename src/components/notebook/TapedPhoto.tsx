import { cn } from "@/lib/utils";
import TapeStrip from "./TapeStrip";

interface TapedPhotoProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}

const TapedPhoto = ({ src, alt, className, rotation = -2 }: TapedPhotoProps) => (
  <div
    className={cn("relative inline-block", className)}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <TapeStrip className="absolute -top-2 left-1/2 -translate-x-1/2 z-10" rotation={3} />
    <div className="bg-paper p-2 shadow-md">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
    <TapeStrip className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10" rotation={-2} />
  </div>
);

export default TapedPhoto;
