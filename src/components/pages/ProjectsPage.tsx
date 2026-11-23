
import NotebookPage from "../notebook/NotebookPage";
import ProjectCard from "../notebook/ProjectCard";

const projects = [
  {
    title: "MindTrack Insights",
    description: "An AI-powered wellness app to track moods, understand emotional patterns, and explore personal insights through interactive dashboards. Built it to explore full-stack development and AI integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Gemini API"],
    github: "https://github.com/Pragati-03/mindtrack-insights.git",
    demo: "https://mindtrack-insights.vercel.app/",
    rotation: 0,
  },
  {
    title: "Data Cleaning Assistant",
    description: "An AI-powered data cleaning tool that detects missing values, type mismatches, duplicates, and outliers. Built it to make data quality assessment easier through automated checks, ML-based anomaly detection, and interactive visualizations.",
    tech: ["Python", "Pandas", "Scikit-learn", "Isolation Forest", "SHAP", "Plotly", "Streamlit", "Gemini API"],
    github: "https://github.com/Pragati-03/data-cleaning-assistant.git",
    demo: "https://data-cleaning-assistant-0.streamlit.app/",
    rotation: 0,
  },
  
{
  title: "Distributed Job Queue",
  description: "A backend project I'm currently building to understand how background tasks are managed and processed. Exploring job queues, worker processes, retries, and reliable task execution.",
  tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
  github: "",
  demo: "",
  rotation: 0,
  status: "In development",
},

  {
    title: "Profit Killer Dashboard",
    description: "A retail analytics project built to investigate declining profits and identify the impact of discounts on business performance. Created interactive dashboards in Power BI and JavaScript to explore sales and profitability trends.",
    tech: ["Power BI", "DAX", "HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/Pragati-03/profit-killer-dashboard",
    demo: "https://profitkillerdashboard.netlify.app/",
    rotation: 0,
  },
  {
    title: "Restaurant Reservation System",
    description: "A restaurant booking application with table reservation and availability management. Built to explore frontend development, application state management, and database integration.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Pragati-03/restaurant-reservation.git",
    demo: "https://restaurant-reservation-jet-kappa.vercel.app/",
    rotation: 0,
  },
  {
    title: "Student Expenditure Dashboard",
    description: "A personal expense tracking dashboard designed to organize spending patterns through interactive charts and filters.",
    tech: ["React", "Chart.js", "Node.js"],
    github: "https://github.com/Pragati-03/student-bucks-buddy.git",
    demo: "https://student-bucks-buddy.vercel.app/",
    rotation: 0,
  },
  {
    title: "WanderCoin",
    description: "A travel planning application that helps users organize itineraries and manage trip budgets in one place. Built to explore API integration and full-stack application development.",
    tech: ["React", "Node.js", "Google Maps API", "Supabase"],
    github: "https://github.com/Pragati-03/wanderwise.git",
    demo: "https://wanderwise-git-main-pragati-agrawals-projects.vercel.app",
    rotation: 0,
  },
];

const ProjectsPage = () => (
  <NotebookPage title="Projects">
    <p className="font-body text-ink-pen text-lg mb-8">
      A collection of applications and tools I've built while exploring Python, backend <br>
      </br>
      development, data, and AI.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </NotebookPage>
);

export default ProjectsPage;
