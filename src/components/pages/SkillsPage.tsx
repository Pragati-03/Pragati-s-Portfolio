import NotebookPage from "../notebook/NotebookPage";
import StickyNote from "../notebook/StickyNote";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    color: "yellow" as const,
    rotation: -1,
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Tailwind CSS","Express.js","HTML/CSS"],
    color: "blue" as const,
    rotation: 1.5,
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    color: "green" as const,
    rotation: -0.5,
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Jupyter", "Linux", "Power BI", "MySQL"],
    color: "orange" as const,
    rotation: 2,
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
