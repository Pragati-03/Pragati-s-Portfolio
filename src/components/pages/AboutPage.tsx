import NotebookPage from "../notebook/NotebookPage";
import TapedPhoto from "../notebook/TapedPhoto";
import DoodleSvg from "../notebook/DoodleSvg";

const AboutPage = () => (
  <NotebookPage title="About Me">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1 space-y-4 font-body text-ink-pen text-lg">
        <p>
          Hey there! 👋 I'm <span className="highlight">Pragati Agrawal</span>, a final-year CS student who's
          obsessed with the intersection of <span className="highlight">machine learning</span> and
          <span className="highlight">web development</span>.
        </p>
        <p>
          I build neural networks and clean interfaces. Usually at the same time.
        </p>
        <p className="text-sm font-mono text-ink-code/70 mt-4">
          // Note to self: The gradient descent on the waste classifier model was a nightmare.
          // But it worked. Eventually.
        </p>
        <div className="mt-6 space-y-2">
          <p>📍 Based in India</p>
          <p>🎓 B.Tech Computer Science- Vellore Institute Of Technology, Bhopal</p>
          <p>💡 Always learning, always building</p>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <TapedPhoto
          src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=250&h=300&fit=crop"
          alt="Pragati at work"
          rotation={-3}
          className="w-48"
        />
        <DoodleSvg
          d="M4 40 C10 30, 20 25, 30 20 C35 18, 40 15, 44 10"
          className="absolute -left-10 top-10 text-ink-code"
          size={48}
        />
      </div>
    </div>
  </NotebookPage>
);

export default AboutPage;
