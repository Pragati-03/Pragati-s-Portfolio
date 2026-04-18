import { cn } from "@/lib/utils";

interface NotebookPageProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const NotebookPage = ({ children, className, title }: NotebookPageProps) => (
  <div className={cn("paper-texture graph-paper page-inner-shadow min-h-full p-8 md:p-12 relative", className)}>
    {/* Red margin line */}
    <div className="absolute top-0 bottom-0 left-16 md:left-20 w-[2px] bg-red-300/40" />
    {/* Hole punches */}
    <div className="absolute left-3 top-1/4 w-4 h-4 rounded-full bg-background/30 border border-muted" />
    <div className="absolute left-3 top-1/2 w-4 h-4 rounded-full bg-background/30 border border-muted" />
    <div className="absolute left-3 top-3/4 w-4 h-4 rounded-full bg-background/30 border border-muted" />

    <div className="ml-10 md:ml-14">
      {title && (
        <h2 className="text-3xl md:text-4xl font-hand text-ink-pen marker-underline inline-block mb-8">
          {title}
        </h2>
      )}
      {children}
    </div>
  </div>
);

export default NotebookPage;
