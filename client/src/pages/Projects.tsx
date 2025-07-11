import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const projectsData = [
  {
    title: "Digital Portfolio",
    desc: `A place to store and share all my projects and treasured memories.`,
    image: '/projects/portfolio.png',
    filterLabels: ["Static Website"],
    techLabels: [
      { "iconKey": "Vite", "name": "Vite" },
      { "iconKey": "React", "name": "React" },
      { "iconKey": "HTML", "name": "HTML" },
      { "iconKey": "Tailwind", "name": "Tailwind" },
      { "iconKey": "Framer", "name": "Framer" },
      { "iconKey": "JavaScript", "name": "JavaScript" }
    ],
    date: ["July 2025"],
    color: "blue",
    nav: 'portfolio'
  },
  {
    title: "Axify: AI Marketplace",
    desc: `Why Google for AI solutions, when you can "axe" the time taken to find your desired solution?`,
    image: '/projects/axify.png',
    filterLabels: ["Full Stack", "Artificial Intelligence"],
    techLabels: [
      { "iconKey": "Vite", "name": "Vite" },
      { "iconKey": "React", "name": "React" },
      { "iconKey": "HTML", "name": "HTML" },
      { "iconKey": "Tailwind", "name": "Tailwind" },
      { "iconKey": "Framer", "name": "Framer" },
      { "iconKey": "JavaScript", "name": "JavaScript" },
      { "iconKey": "Flask", "name": "Flask" },
      { "iconKey": "Python", "name": "Python" },
      { "iconKey": "Scikit", "name": "Scikit" },
      { "iconKey": "Gemini", "name": "Gemini" },
      { "iconKey": "Postgresql", "name": "Postgresql" },
      { "iconKey": "Amazon", "name": "Amazon" }
    ],
    date: ["April 2025", "August 2025"],
    color: "purple",
    nav: 'axify'
  },
  {
    title: "Rewwwind: Vinyl and Books",
    desc: `Want to stock up on your collection of vinyl and books while remaining eco-friendly? Look no further than Rewwwind!`,
    image: '/projects/rewwwind.png',
    filterLabels: ["Full Stack", "Artificial Intelligence"],
    techLabels: [
      { "iconKey": "Flask", "name": "Flask" },
      { "iconKey": "HTML", "name": "HTML" },
      { "iconKey": "CSS", "name": "CSS" },
      { "iconKey": "JavaScript", "name": "JavaScript" },
      { "iconKey": "Python", "name": "Python" },
      { "iconKey": "Pytorch", "name": "Pytorch" },
      { "iconKey": "Huggingface", "name": "Huggingface" },
      { "iconKey": "Openai", "name": "OpenAI" },
      { "iconKey": "SQLite", "name": "SQLite" },
      { "iconKey": "Cloudinary", "name": "Cloudinary" },
      { "iconKey": "Stripe", "name": "Stripe" }
    ],
    date: ["October 2024", "February 2025"],
    color: "green",
    nav: 'rewwwind'
  },
  {
    title: "Velvet Oasis Hotel",
    desc: `Design of a fictional hotel for my UX design project.`,
    image: '/projects/velvetoasis.png',
    filterLabels: ["UX/UI Design"],
    techLabels: [
      { "iconKey": "Figma", "name": "Figma" }
    ],
    date: ["December 2024", "January 2025"],
    color: "purple",
    nav: 'velvet-oasis-hotel'
  },
  {
    title: "Eclipse of the Violet Knight",
    desc: `A short Metroidvania game for my first ever web development project.`,
    image: '/projects/violetknight.png',
    filterLabels: ["Game", "Static Website"],
    techLabels: [
      { "iconKey": "HTML", "name": "HTML" },
      { "iconKey": "CSS", "name": "CSS" },
      { "iconKey": "JavaScript", "name": "JavaScript" }
    ],
    date: ["May 2024", "July 2024"],
    color: "purple",
    nav: 'eclipse-of-the-violet-knight'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "Full Stack",
    "Static Website",
    "UX/UI Design",
    "Artificial Intelligence",
    "Game"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="bod py-30 flex flex-col gap-3 py-2 px-10 items-center"
    >
      <div className="text-center mb-10 max-w-[50em]">
        <h1 className="text-5xl text-white font-bold">A list of my&nbsp;
          <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">Recent Projects</span>
        </h1>
        <p className="text-lg text-wrap mt-5 mb-10">
          Dive into projects where I've transformed academic knowledge into real-world applications and designs, consistently pushing beyond conventional expectations.
        </p>
        <div className="flex flex-wrap justify-between">
          {filters.map(f => (
            <div
              className={`py-2 px-5 rounded-full cursor-pointer
                ${filter === f ? "bg-gradient-to-r from-[#109198] to-primary-dark font-semibold" : "bg-gray-800"}`}
              onClick={(e) => {
                e.stopPropagation();
                setFilter(f)
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        {projectsData
          .filter(p => p.filterLabels.includes(filter) || filter === "All")
          .map((p, index) => (
            <ProjectCard
              key={index}
              title={p.title}
              desc={p.desc}
              image={p.image}
              filterLabels={p.filterLabels}
              techLabels={p.techLabels}
              date={p.date}
              color={p.color}
              index={index}
              nav={p.nav}
            />
          ))}
      </div>
    </motion.div>
  )
}

export default Projects;