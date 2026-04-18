import NotebookPage from "../notebook/NotebookPage";
import ProjectCard from "../notebook/ProjectCard";

const projects = [
  
  {
    title: "MindTrack",
    description: "A mood journal app to track emotions daily. Built it to learn full-stack web dev and ended up actually using it.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js","React.js","Supabase"],
    github: "https://github.com/Pragati-03/mindtrack-insights.git",
    demo: "https://mindtrack-insights.vercel.app/",
    rotation: 1.5,
  },
  {
    title: "Restaurant Reservation System",
    description: "Table booking app with real-time availability. React taught me state management the hard way.",
    tech: ["HTML","React", "Tailwind", "Supabase"],
    github: "https://github.com/Pragati-03/restaurant-reservation.git",
    demo: "https://restaurant-reservation-jet-kappa.vercel.app/",
    rotation: -0.5,
  },
  {
    title: "Student Expenditure Dashboard",
    description: "Track where all that money goes. Spoiler: mostly food. Charts and filters included.",
    tech: ["React", "Chart.js", "Node.js"],
    github: "https://github.com/Pragati-03/student-bucks-buddy.git",
    demo: "https://student-bucks-buddy.vercel.app/",
    rotation: 1,
  },
  {
    title: "Note Generator",
    description: "ML-powered app that generates study notes from topics. Because writing notes manually is so last semester.",
    tech: ["Python", "React", "Flask", "NLP"],
    github: "#",
    demo: "#",
    rotation: -1.2,
  },
  {
    title: "WanderCoin",
    description: "Travel itinerary planner that helps you plan trips without blowing your budget. Wanderlust meets spreadsheets.",
    tech: ["React", "Node.js", "Google Maps API","Supabase"],
    github: "https://github.com/Pragati-03/wanderwise.git",
    demo: "https://wanderwise-git-main-pragati-agrawals-projects.vercel.app",
    rotation: 0.8,
  },
  {
    title: "Profit Killer Dashboard",
    description: "Asked why profits were dying. Data said discounts. Built two dashboards to prove it — one in Power BI, one in pure HTML/JS because not everyone has Power BI installed.",
    tech: ["Power BI", "HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/Pragati-03/profit-killer-dashboard",
    demo: "https://profitkillerdashboard.netlify.app/",
    rotation: 0.5,
  },
  {
    title: "Intelligent Waste Classifier",
    description: "I am trying to make a CNN that sorts trash. It is working because transfer learning is magic.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "#",
    demo: "#",
    rotation: -1,
  },
];

const ProjectsPage = () => (
  <NotebookPage title="Projects">
    <p className="font-body text-ink-pen text-lg mb-8">
      Things I've built, broken, and rebuilt ✨
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </NotebookPage>
);

export default ProjectsPage;
