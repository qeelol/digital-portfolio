import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import {
  SiFlask,
  SiSqlite,
  SiPytorch,
  SiHuggingface,
  SiStripe,
  SiOpenai,
  SiCloudinary,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiScikitlearn,
  SiFramer,
  SiPostgresql,
  SiReact,
  SiAmazon,
  SiGooglegemini,
  SiExpress,
  SiVite
} from "react-icons/si";

interface ProjectProps {
  title: string;
  date: string;
  desc: Array<string>;
  image: string;
  techStack: Array<string>;
}

const techStackMapping: Record<string, React.JSX.Element> = {
  "Flask": <SiFlask title="Flask" className="w-10 h-10" />,
  "SQLite": <SiSqlite title="SQLite" className="w-10 h-10" />,
  "Pytorch": <SiPytorch title="Pytorch" className="w-10 h-10" />,
  "Huggingface": <SiHuggingface title="Hugging Face" className="w-10 h-10" />,
  "Openai": <SiOpenai title="OpenAI" className="w-10 h-10" />,
  "Stripe": <SiStripe title="Stripe" className="w-10 h-10" />,
  "Cloudinary": <SiCloudinary title="Cloudinary" className="w-10 h-10" />,
  "Python": <SiPython title="Python" className="w-10 h-10" />,
  "HTML": <SiHtml5 title="HTML" className="w-10 h-10" />,
  "CSS": <SiCss3 title="CSS" className="w-10 h-10" />,
  "Tailwind": <SiTailwindcss title="Tailwind" className="w-10 h-10" />,
  "JavaScript": <SiJavascript title="JavaScript" className="w-10 h-10" />,
  "Scikit": <SiScikitlearn title="Scikit-learn" className="w-10 h-10" />,
  "Framer": <SiFramer title="Framer" className="w-10 h-10" />,
  "Postgresql": <SiPostgresql title="PostgreSQL" className="w-10 h-10" />,
  "React": <SiReact title="React" className="w-10 h-10" />,
  "Amazon": <SiAmazon title="Amazon S3" className="w-10 h-10" />,
  "Gemini": <SiGooglegemini title="Gemini AI" className="w-10 h-10" />,
  "Vite": <SiVite title="Vite" className="w-10 h-10" />,
  "Express": <SiExpress title="Express" className="w-10 h-10" />,
}

const Project: React.FC<ProjectProps> = ({ title, date, desc, image, techStack }) => {
  const navigate = useNavigate()

  return (
    <div
      className="p-5 py-15 hover:bg-gray-800 border border-transparent rounded-xl 
              group relative hover:border-primary-light transition transition-all ease-in-out"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/projects/${title.slice(0, title.indexOf(":")).toLowerCase()}`)
      }}
    >
      <div className="flex gap-10 items-center w-full">
        <div className="flex-shrink-0">
          <img src={`/digital-portfolio/${image}`} className="w-130 border border-gray-600 rounded-xl"></img>
        </div>
        <div className="flex-1 flex flex-col gap-10 min-w-0 overflow-hidden">
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl font-bold text-primary-light">
              {title}
            </h3>
            <p className="text-xl text-primary-light">({date})</p>
          </div>

          <div className="text-lg">
            {desc[0]}<br />
            {desc[1]}
          </div>
          <div className="skills">
            <h5 className="text-2xl text-primary-light font-semibold mb-3">Technologies</h5>
            <div className="flex flex-wrap items-center justify-between">
              {techStack.map((tech, index) => (
                <div key={index} title={tech} className="flex-shrink-0 flex flex-col gap-1 items-center">
                  {techStackMapping[tech]}
                  <span className="text-xs">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden group-hover:block absolute bottom-5 right-5 text-primary-light font-bold">
        <span>View Project</span>
        <FaArrowRightLong className="inline-block ml-3" />
      </div>
    </div>
  )
}

export default Project;