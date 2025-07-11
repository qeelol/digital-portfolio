import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// import clear from '../assets/clear.png';
import { FaDownload, FaSuitcase, FaJava } from "react-icons/fa";
import { FaArrowDownLong, FaArrowRightLong, FaHandshakeSimple } from "react-icons/fa6";
import { MdMailOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";
import { IoRocketSharp } from "react-icons/io5";
import { GiFist } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiWhatsapp,
} from "react-icons/si";

import Project from '../components/ProjectList';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  deletePauseTime?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  deletePauseTime = 300,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDeletePaused, setIsDeletePaused] = useState(false);

  useEffect(() => {
    if (isPaused && texts.length !== 1) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeletePaused) {
      const timeout = setTimeout(() => {
        setIsDeletePaused(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, deletePauseTime);
      return () => clearTimeout(timeout);
    }

    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, pause before moving to next text
          setIsDeleting(false);
          setIsDeletePaused(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, isDeletePaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, deletePauseTime]);

  return (
    <span className={className}>
      {displayText}
      {texts.length !== 1 && <span className="animate-pulse">|</span>}
    </span>
  );
};

const Home = () => {
  const [showScroll, setShowScroll] = useState(true);
  const navigate = useNavigate();

  // particle bs
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: "transparent",
    },
    fpsLimit: 40,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#fff" },
      links: {
        color: "#fff",
        distance: 150,
        enable: true,
        opacity: 0.05,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.bounce },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1080 },
        value: 350,
      },
      opacity: {
        value: { min: 0.03, max: 0.05 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 },
        random: { enable: true },
      },
    },
    detectRetina: true,
  }), []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowScroll(currentScrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="bod mt-30 flex flex-col gap-3 py-2 items-center">
      <div className="top z-10 relative h-[90vh] flex flex-col justify-center gap-10">
        <div className="hero flex gap-20 items-center justify-center">
          <div className="p-0.5 bg-gradient-to-r from-white via-[#80F9FF] to-[#4F9BFF] rounded-full">
            <div className="image-container bg-black rounded-full overflow-hidden h-80">
              <img src='/digital-portfolio//clear.png' className="h-80 opacity-90 bg-black"></img>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-left">
            <h1 className="text-7xl font-bold 
          bg-gradient-to-r from-white via-[#80F9FF] to-[#4F9BFF] bg-clip-text text-transparent">
              <TypingEffect texts={["Hello, I'm Nelson!"]} typingSpeed={75} />
            </h1>
            <h2 className="text-5xl font-semibold text-primary-light">
              <TypingEffect texts={["Aspiring Software Developer", "Problem Solver", "Passionate Learner"]}
                typingSpeed={50} deletingSpeed={25} pauseTime={3000} />
            </h2>
            <p className="text-2xl">I build applications that leave a <span className="text-primary-light italic">lasting impression</span> on your users.</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-15 text-xl font-semibold">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="">
            <a
              className="bg-gradient-to-r from-[#109198] to-primary-dark p-4 px-8 rounded-lg 
          flex gap-3 items-center cursor-pointer"
          target='_blank'
          rel='noopener noreferrer'
          href="/digital-portfolio//resume.pdf"
          >
              <FaDownload />Download Resume
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="">
            <a
              className='border border-primary-dark p-4 px-8 rounded-lg flex gap-3 items-center cursor-pointer hover:text-primary-dark 
            transition-all transition-500 ease-out'
              target='_blank'
              rel="noopener noreferrer"
              href="https://wa.me/+6590546826"
            >
              <SiWhatsapp className="text-2xl" />Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`mt-5 transition text-xl text-primary-light font-semibold flex flex-col items-center gap-3 ${showScroll ? "" : "opacity-0"}`}>
          <p>Explore More</p>
          <FaArrowDownLong className="self-center" />
        </motion.div>
      </div>

      <div className="content text-left mt-5 relative z-2 flex flex-col gap-40">
        <div>
          <h2 className="text-5xl pb-3 font-bold bg-gradient-to-r from-white via-primary-light to-primary-dark bg-clip-text text-transparent w-auto text-center">
            My Featured Projects
          </h2>
          <div
            className="flex flex-col mt-5 cursor-pointer items-center"
          >
            <Project
              title="Axify: AI Marketplace"
              date={`April 2025 - August 2025`}
              desc={[
                "I worked together with Benny, Jun Hong, and Sean to create a marketplace for AI services.",
                `What was initially "just another school project", soon became a business opportunity for us.`,
              ]}
              image="/projects/axify.png"
              techStack={[
                "Vite",
                "React",
                "HTML",
                "Tailwind",
                "Framer",
                "JavaScript",
                "Express",
                "Flask",
                "Python",
                "Scikit",
                "Gemini",
                "Postgresql",
                "Amazon"
              ]}
            />

            <Project
              title="Rewwwind: Vinyl and Books"
              date={`April 2025 - August 2025`}
              desc={[
                "I worked together with Benny, Femina, and Ryan to create a marketplace for AI services.",
                `What was initially "just another school project", soon became a business opportunity for us.`,
              ]}
              image="/projects/rewwwind.png"
              techStack={[
                "Flask",
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Pytorch",
                "Huggingface",
                "Openai",
                "SQLite",
                "Cloudinary",
                "Stripe"
              ]}
            />

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 mt-5 bg-gradient-to-r from-[#109198] to-primary-dark p-4 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/projects');
              }}
            >
              <p>View More Projects</p>
            </motion.div>
          </div>
        </div>

        <div
          className="flex flex-col gap-15 mt-5 items-center"
        >
          <h2 className="text-5xl font-bold p-2
            bg-gradient-to-r from-white via-primary-light to-primary-dark bg-clip-text text-transparent">
            A Snippet of Me
          </h2>
          <div className="flex items-center gap-15 w-[80vw]">
            <div className="border border-gray-600">
              <img src="/digital-portfolio//Nelson.png" className='scale-x-[-1] h-[60vh]'></img>
            </div>
            <div>
              <p className="text-3xl font-bold mb-5">Nice to meet you! I'm Nelson Jonathan.</p>
              <div className="text-xl text-wrap flex flex-col gap-2">
                <p>I'm a fresh Diploma in Information Technology graduate from Nanyang Polytechnic with a passion for crafting software.</p>
                <p>I embrace continuous development and growth, all while prioritising what's important to me: Family and Friends.</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-8 py-3 mt-5 bg-gradient-to-r from-[#109198] to-primary-dark p-4 rounded-full max-w-36 font-semibold cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/photos');
                }}
              >
                <p>My Photos</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-15 mt-5 items-center"
        >
          <h2 className="text-5xl font-bold p-2
            bg-gradient-to-r from-white via-primary-light to-primary-dark bg-clip-text text-transparent">
            My Values
          </h2>
          <div className="flex gap-5">
            <div className="flex flex-col gap-7">
              <div className="p-5 border border-primary-light rounded-lg hover:bg-gray-800 transition-all ease-in-out flex-grow-1">
                <h4 className="text-2xl text-primary-light font-semibold mb-3 flex gap-3 items-center">Competitive <GiFist /></h4>
                <div className="max-w-80 flex flex-col gap-3">
                  <span>
                    Rivalry sharpens my focus and fuels my drive.
                  </span>
                  {/* <span>
                      I treasure the lessons learned and growth achieved from competing with my peers.
                    </span> */}
                </div>
              </div>

              <div className="p-5 border border-primary-light rounded-lg hover:bg-gray-800 transition-all ease-in-out flex-grow-1">
                <h4 className="text-2xl text-primary-light font-semibold mb-3 flex gap-3 items-center">Proactive <HiLightBulb /></h4>
                <p className="max-w-80 flex flex-col gap-3">
                  <span>
                    Taking action without always needing to be asked.
                  </span>
                  {/* <span>
                      I believe in taking action without always needing to be asked.
                    </span> */}
                </p>
              </div>
            </div>

            <div className="relative group p-5 border border-primary-light rounded-lg hover:bg-gray-800 transition-all ease-in-out h-100">
              <div className="group-hover:opacity-15 group-hover:blur-xs">
                <h4 className="text-2xl text-primary-light font-semibold mb-3 flex gap-3 items-center">Going Above and Beyond <IoRocketSharp /></h4>
                <div className="max-w-80 flex flex-col gap-7">
                  <span>
                    Besides applying the basics I've learned from my studies, I enjoy going above the norm and what is
                    expected.
                  </span>
                  {/* <span>
                      I am always eager to learn, and determined to bring my skills to the next level with every project.
                    </span>
                    <span>
                      While I have mostly been trained to build software, I have great interest in Artificial Intelligence
                      and look for ways to integrate it into my projects.
                    </span> */}
                  <div>
                    <p className="mb-6">Technologies I'm proficient with:</p>
                    <div className="grid grid-cols-4 gap-10 self-center text-3xl">
                      <div className="flex flex-col gap-1 items-center">
                        <SiPython />
                        <span className="text-xs">Python</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <SiReact />
                        <span className="text-xs">React</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <SiHtml5 />
                        <span className="text-xs">HTML</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <SiCss3 />
                        <span className="text-xs">CSS</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <SiTailwindcss />
                        <span className="text-xs">Tailwind</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <SiJavascript />
                        <span className="text-xs">JavaScript</span>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <FaJava />
                        <span className="text-xs">Java</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-5 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 z-5 
                flex flex-col justify-center items-center text-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/projects");
                }}
              >
                <MdOutlineRemoveRedEye className="text-5xl" />
                <h4 className="text-2xl font-semibold mb-3">Projects</h4>
                <p>See how I have demonstrated my technical capabilities.</p>
                <div className="flex gap-3 items-center mt-5 text-lg font-bold">
                  <p>View More</p>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="relative group p-5 border border-primary-light rounded-lg hover:bg-gray-800 transition-all ease-in-out  flex-grow-1">
                <div className="group-hover:opacity-15 group-hover:blur-xs">
                  <h4 className="text-2xl text-primary-light font-semibold mb-3 flex gap-3 items-center">Teamwork & Friendship <FaHandshakeSimple /></h4>
                  <div className="max-w-80 flex flex-col gap-3">
                    <span>Achieving results is just one part of the job.</span>
                    {/* <span>Personally, I value making genuine connections with the people I work with.</span> */}
                  </div>
                </div>

                <div
                  className="p-5 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 z-5 
                flex flex-col justify-center items-center text-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/photos')
                  }}
                >
                  <BiHappyBeaming className="text-5xl" />
                  <h4 className="text-2xl font-semibold mb-3">See More of Me</h4>
                  <div className="flex gap-3 items-center mt-5 text-lg font-bold">
                    <p>View Photos</p>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>


              <div className="relative group p-5 border border-primary-light rounded-lg hover:bg-gray-800 transition-all ease-in-out  flex-grow-1">
                <div className="group-hover:opacity-15 group-hover:blur-xs">
                  <h4 className="text-2xl text-primary-light font-semibold mb-3 flex gap-3 items-center">Ready to Work <FaSuitcase /></h4>
                  <div className="max-w-80 flex flex-col gap-3">
                    <span>Looking to joining the workforce.</span>
                    {/* <span>If I seem like a good fit for your company, I would love to get in touch.</span> */}
                  </div>
                </div>

                <a
                  className="p-5 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 z-5 
                flex flex-col justify-center items-center text-center cursor-pointer"
                  href="#contact"
                >
                  <MdMailOutline className="text-5xl" />
                  <h4 className="text-2xl font-semibold mb-3">Let's Connect!</h4>
                  <div className="flex gap-3 items-center mt-5 text-lg font-bold">
                    <p>Contact Me</p>
                    <FaArrowRightLong />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="tsparticles"
        options={options}
        className="opacity-60"
      />
    </motion.div>
  )
}

export default Home;