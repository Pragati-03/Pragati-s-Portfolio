import NotebookPage from "../notebook/NotebookPage";
import DoodleSvg from "../notebook/DoodleSvg";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const links = [
  { icon: Mail, label: "pragatiagarwal2004@email.com", href: "mailto:pragatiagarwal2004@email.com" },
  { icon: Linkedin, label: "Linkedin", href: "https://linkedin.com/in/pragati-agrawal-77624a24a" },
  { icon: Github, label: "Github", href: "https://github.com/Pragati-03" },
  // { icon: Twitter, label: "@pragati_dev", href: "#" },
];

const ContactPage = () => (
  <NotebookPage title="Let's Connect ✨">
    <div className="max-w-md space-y-8">
      <p className="font-body text-ink-pen text-lg">
        Want to collaborate, chat about ML, or just say hi? I'd love to hear from you!
      </p>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-md hover:bg-highlighter/20 transition-colors group"
          >
            <link.icon size={22} className="text-ink-code group-hover:scale-110 transition-transform" />
            <span className="font-body text-ink-pen text-lg ink-link">{link.label}</span>
          </a>
        ))}
      </div>

      <div className="mt-12 font-body text-ink-pen/60 text-sm relative">
        <p>— End of notebook. Thanks for reading! —</p>
        <DoodleSvg
          d="M5 40 Q15 10 25 30 Q35 50 45 20"
          className="absolute -right-8 -top-4 text-ink-code/40"
          size={40}
        />
      </div>
    </div>
  </NotebookPage>
);

export default ContactPage;
