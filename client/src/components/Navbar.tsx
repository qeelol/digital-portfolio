import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const activePath = window.location.pathname;
  const [activeLink, setActiveLink] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    let state;
    // console.log(activePath);
    if (activePath === "/digital-portfolio/") state = 0;
    else if (activePath.includes("/projects")) state = 1;
    else if (activePath.includes("/journey")) state = 2;
    else state = 3;
    setActiveLink(state);
  }, [activePath]);

  const handleNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, navTo: string, navIdx: number) => {
    e.stopPropagation();
    if (activeLink === navIdx && activePath === navTo) return;
    navigate(navTo);
    setActiveLink(navIdx);
  }

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

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Journey', path: '/journey' },
    { label: 'Photos', path: '/photos' }
  ];

  return (
    <div className={`absolute w-full bg-black ${showScroll ? "" : "shadow-gray-600 shadow-md"} top-0 left-0 px-10 py-6 flex items-center justify-between text-2xl z-100 fixed h-[10vh]`}>
      <div
        className="font-semibold font-mono text-primary-dark cursor-pointer"
        onClick={(e) => {
          handleNav(e, "/", 0);
        }}
      >
        &lt;Nelson /&gt;
      </div>
      
      <div className="links flex items-center text-lg gap-20 font-semibold text-gray-400 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={(e) => {
              handleNav(e, item.path, index);
            }}
            className={`p-4 px-8 rounded-xl cursor-pointer relative ${
              activeLink === index ? "border border-primary-dark font-semibold text-white" : ""
            } hover:text-white hover:font-semibold transition-all transition-300 ease-out flex gap-3 items-center`}
          >
            {/* Animated circle */}
            {activeLink === index && (
              <motion.div
                layoutId="activeCircle"
                className="w-4 h-4 rounded-full bg-primary-dark"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              />
            )}
            {item.label}
          </div>
        ))}
      </div>
      
      <a 
      className="font-semibold hover:text-white transition-all ease-in-out cursor-pointer"
      href="#contact"
      >
        Get in Touch
      </a>
    </div>
  )
}

export default Navbar