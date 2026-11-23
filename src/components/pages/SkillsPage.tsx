import NotebookPage from "../notebook/NotebookPage";
import StickyNote from "../notebook/StickyNote";

  
const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "TypeScript", "JavaScript"],
    color: "yellow" as const,
    rotation: -1,
  },
  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "Redis", "Node.js"],
    color: "blue" as const,
    rotation: 1.5,
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Recharts", "Chart.js"],
    color: "green" as const,
    rotation: -0.5,
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Supabase"],
    color: "orange" as const,
    rotation: 2,
  },
  {
    title: "Data & AI",
    skills: [
      "Pandas",
      "Scikit-learn",
      "SHAP",
      "Plotly",
      "Streamlit",
      "LLM API Integration",
    ],
    color: "yellow" as const,
    rotation: -1,
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Vercel"],
    color: "blue" as const,
    rotation: 1.5,
  },
];


const SkillsPage = () => (
  <NotebookPage title="Skills">
    <p className="font-body text-ink-pen text-lg mb-8">
      Here's what's in my toolkit — organized like proper study notes 📝
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <StickyNote key={group.title} color={group.color} rotation={group.rotation}>
          <h3 className="font-hand text-xl text-ink-pen mb-3 marker-underline inline-block">
            {group.title}
          </h3>
          <ul className="space-y-1.5 font-body text-ink-pen">
            {group.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-ink-code">→</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </StickyNote>
      ))}
    </div>
  </NotebookPage>
);

export default SkillsPage;
