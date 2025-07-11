import React from "react";
import { useNavigate } from "react-router-dom";

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
  SiWhatsapp,
  SiFigma,
  SiVite
} from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";

const techStackMapping: Record<string, React.JSX.Element> = {
  "Flask": <SiFlask title="Flask" className="w-4 h-4" />,
  "SQLite": <SiSqlite title="SQLite" className="w-4 h-4" />,
  "Pytorch": <SiPytorch title="Pytorch" className="w-4 h-4" />,
  "Huggingface": <SiHuggingface title="Hugging Face" className="w-4 h-4" />,
  "Openai": <SiOpenai title="OpenAI" className="w-4 h-4" />,
  "Stripe": <SiStripe title="Stripe" className="w-4 h-4" />,
  "Cloudinary": <SiCloudinary title="Cloudinary" className="w-4 h-4" />,
  "Python": <SiPython title="Python" className="w-4 h-4" />,
  "HTML": <SiHtml5 title="HTML" className="w-4 h-4" />,
  "CSS": <SiCss3 title="CSS" className="w-4 h-4" />,
  "Tailwind": <SiTailwindcss title="Tailwind" className="w-4 h-4" />,
  "JavaScript": <SiJavascript title="JavaScript" className="w-4 h-4" />,
  "Scikit": <SiScikitlearn title="Scikit-learn" className="w-4 h-4" />,
  "Framer": <SiFramer title="Framer" className="w-4 h-4" />,
  "Postgresql": <SiPostgresql title="PostgreSQL" className="w-4 h-4" />,
  "React": <SiReact title="React" className="w-4 h-4" />,
  "Amazon": <SiAmazon title="Amazon S3" className="w-4 h-4" />,
  "Gemini": <SiGooglegemini title="Gemini AI" className="w-4 h-4" />,
  "Vite": <SiVite title="Vite" className="w-4 h-4" />,
  "Figma": <SiFigma title="Figma" className="w-4 h-4" />,
};

interface IconLabelProps {
  iconKey: string;
  name: string;
  color: string;
}

const colorClasses: Record<string, Record<any, string>> = {
  'purple': {
    title: 'text-purple-600',
    text: 'text-purple-400',
    border: 'border-purple-900/50',
    background: 'bg-purple-900/20',
    backgroundHov: 'hover:bg-purple-900/10'
  },
  'green': {
    title: 'text-green-600',
    text: 'text-green-400',
    border: 'border-green-900/50',
    background: 'bg-green-900/20',
    backgroundHov: 'hover:bg-green-900/10'
  },
  'blue': {
    title: 'text-blue-600',
    text: 'text-blue-400',
    border: 'border-blue-900/50',
    background: 'bg-blue-900/20',
    backgroundHov: 'hover:bg-blue-900/10'
  }
}

const TechLabel: React.FC<IconLabelProps> = ({ iconKey, name, color }) => {
  return (
    <div className={`flex gap-2 items-center py-2 px-3 rounded-full 
    ${colorClasses[color].background} ${colorClasses[color].text}`}>
      {techStackMapping[iconKey]}
      <span className="text-sm font-semibold">{name}</span>
    </div>
  )
}

interface ProjectCardProps {
  title: string;
  color: string;
  desc: string;
  image: string;
  filterLabels: Array<string>;
  date: Array<string>;
  techLabels: Array<Record<string, string>>;
  index: number;
  nav: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, image, filterLabels, techLabels, date, color, index, nav }) => {
  const colorClass = colorClasses[color];
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        opacity: { duration: 0.3, delay: 0.3 * index, ease: "linear" },
        y: { duration: 0.3, delay: 0.3 * index, ease: "easeOut" },
        scale: { duration: 0.1 }
      }}
      className={`col-span-1 flex flex-col gap-5 p-10 border-2 ${colorClass.border} rounded-xl
     ${colorClass.backgroundHov} transition-all ease-in-out group cursor-pointer`}
     onClick={(e) => {
      e.stopPropagation();
      navigate(nav);
     }}
     >
      <div className="border border-gray-900 rounded-xl overflow-hidden relative">
        <img src={image} className="max-h-45 w-full object-cover" />
        <div className="flex gap-3 absolute bottom-6 left-[50%] -translate-x-1/2">
          {filterLabels.map(f => (
            <div key={f} className={`py-1 px-3 bg-gray-800 rounded-full border-2 ${colorClass.border} 
          ${colorClass.text} font-semibold whitespace-nowrap`}>
              {f}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className={`text-3xl ${colorClass.title} font-bold mb-1`}>{title}</h2>
        <p className={`text-lg font-semibold ${colorClass.text} mb-3`}>
          {date[0]}&nbsp;
          {date.length !== 1 && <span>&minus;</span>}
          {date.length !== 1 && date[1]}
        </p>
        <p className="truncate line-clamp-3 text-wrap text-lg">
          {desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center">
        {techLabels.slice(0, 6).map(t => (
          <TechLabel key={t.iconKey} iconKey={t.iconKey} name={t.name} color={color} />
        ))}
        <span className="text-gray-400">{techLabels.length - 6 > 0 ? `+ ${techLabels.length - 6} more` : ""}</span>
      </div>
      <div className={`flex gap-2 items-center justify-end ${colorClass.title} font-semibold
       opacity-0 group-hover:opacity-100 transition-all ease-in-out absolute bottom-5 right-5`}>
        <span>View Project</span>
        <FaArrowRightLong />
      </div>

    </motion.div>
  )
};

export default ProjectCard;