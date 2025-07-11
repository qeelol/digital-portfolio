import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogItem {
  img: string;
  title: string;
  date: string;
  desc: string;
}

interface BlogSection {
  key: string;
  title: string;
  items: BlogItem[];
}

const blogSections: BlogSection[] = [
  {
    key: "axify",
    title: "Our First Child, Axify",
    items: [
      {
        img: "/blog/technopreneurship.jpeg",
        title: "Technopreneurship Day",
        date: "May 2025",
        desc: "Me and my good friend, Sean, attended the Technoprenuership Day organised by the Technopreneurship Student Interest Group in Nanyang Polytechnic. There, we pitched Axify to (from left to right), Mr. Briere, Dr. Uma, and Mr. Arun, who have decades of experience in the technology industry as well as looking to build their own start-ups.",
      },
      {
        img: "/blog/block71.jpeg",
        title: "Pitching at Block 71",
        date: "June 2025",
        desc: "Me and Sean went to Block 71, where we pitched Axify to fellow start-ups and also SMEs.",
      },
    ],
  },
  {
    key: "achievements",
    title: "Achievements",
    items: [
      {
        img: "/blog/outstanding.jpg",
        title: "Outstanding Project",
        date: "February 2025",
        desc: "I was nominated for an outstanding project presentation for Rewwwind, and had the wonderful opportunity to demonstrate my features and capabilities to Dr. Faris (on the left, in a checkered shirt), Mr. Chit Boon (on the centre, with a green landyard), Ms. Jasmine (on the right, in a red dress), as well as my fellow coursemates who were nominated. It was exciting to see what everyone else had done, and further fueled my passion in software development.",
      },
      {
        img: "/blog/best_y1.jpg",
        title: "Best Performing Year 1 Student",
        date: "2024",
        desc: "Selected as Best Performing Year 1 Diploma in Information Technology student, and awarded with a mini grant sponsored by AiSP.",
      },
    ],
  },
  {
    key: "fun",
    title: "Poly Life is Fun!",
    items: [
      {
        img: "/blog/first.jpg",
        title: "FIrst Few Friends",
        date: "April 2024",
        desc: "A photo of me and my first few friends, Hrish and Khant.",
      },
      {
        img: "/blog/webdev.png",
        title: "First Web Development Project",
        date: "August 2024",
        desc: "A photo of my first ever Web Development project, which was a Metroidvania game.",
      },
      {
        img: "/blog/mrgiam.jpg",
        title: "Fundamentals of I&E",
        date: "August 2024",
        desc: "A photo me and my team took with our Fundamentals of Innovation and Enterprise lecturer, Mr. Giam.",
      },
      {
        img: "/blog/mstay.jpeg",
        title: "Network Technology",
        date: "February 2025",
        desc: "A funny photo we took with my Network Technology lecturer, Ms. Tay.",
      },
      {
        img: "/blog/mrwee.jpg",
        title: "Business Statistics",
        date: "February 2025",
        desc: "A photo me and my team took with our Business Statistics lecturer, Mr. Wee.",
      },
      {
        img: "/blog/mskatherine.jpg",
        title: "Principles of UX Design",
        date: "February 2025",
        desc: "A photo I took with my Principles of UX Design lecturer, Ms. Katherine.",
      },
      
      {
        img: "/blog/mrkoh.jpg",
        title: "Web Application Development",
        date: "February 2025",
        desc: "A photo me and my team took with out Web Application Development Project lecturer, Mr. Koh.",
      },
      {
        img: "/blog/fmo.jpeg",
        title: "Freshmen Orientation Dry-Run",
        date: "March 2025",
        desc: "A photo of a one-day dry-run event for Freshmen Orientation where me and my friends participated as Student Mentors",
      },
      {
        img: "/blog/outing.jpg",
        title: "Semestral Break Outing",
        date: "February 2025",
        desc: "A photo of me and my friends in an arcade during the semestral break.",
      },
      {
        img: "/blog/mrlawrence.jpeg",
        title: "Comms & Personal Branding",
        date: "May 2025",
        desc: "A photo me and my team took with our Communications and Personal Branding lecturer, Mr. Lawrence.",
      },
    ],
  },
];

const Blog = () => {
  const [popup, setPopup] = useState<BlogItem | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="bod mt-30 flex flex-col gap-30 py-2 items-center px-10"
    >
      {blogSections.map((section) => (
        <div key={section.key} className="w-full self-start">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary-light to-primary-dark bg-clip-text text-transparent p-1">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900"
                onClick={() => setPopup(item)}
              >
                <img
                  src={`.${item.img}`}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg font-semibold max-w-full">
                    {item.title.length > 18 ? item.title.slice(0, 15) + '...' : item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-10 max-w-[60vw] relative flex flex-col items-center max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-dark scrollbar-track-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`.${popup.img}`}
                alt={popup.title}
                className="w-full h-[24rem] object-cover rounded mb-6"
              />
              <h3 className="text-3xl font-bold mb-3 text-primary-light">
                {popup.title}
              </h3>
              <p className="text-lg text-gray-400 mb-3">{popup.date}</p>
              <p className="text-xl text-white mb-6 text-center">{popup.desc}</p>
              <motion.div
                className="mt-2 px-8 py-3 bg-primary-dark text-white rounded cursor-pointer text-lg font-semibold"
                whileHover={{ scale: 1.1 }}
                onClick={() => setPopup(null)}
              >
                Close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blog;