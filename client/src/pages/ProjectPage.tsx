import { motion } from "framer-motion";

const axifyImages = [
  "/blog/technopreneurship.jpeg",
  "/blog/block71.jpeg"
];

const AxifyProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen w-full flex flex-col items-center px-6 py-12 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950"
    >
      <div className="max-w-4xl w-full bg-purple-950 bg-opacity-80 rounded-2xl shadow-2xl p-10 flex flex-col gap-8 border-2 border-purple-700">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
          Axify: AI Marketplace
        </h1>
        <p className="text-xl text-purple-100 text-center mb-4">
          Why Google for AI solutions, when you can "axe" the time taken to find your desired solution? Axify is a marketplace for AI services, built by a passionate team of students to bridge the gap between AI creators and users.
        </p>
        <div className="flex gap-8 items-center justify-center">
          {axifyImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Axify event ${i+1}`}
              className="rounded-xl shadow-lg w-full max-w-xs border-2 border-purple-700"
            />
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-purple-200 mb-2">Project Timeline</h2>
          <ul className="list-disc pl-6 text-purple-100 text-lg">
            <li><span className="font-bold text-purple-300">April 2025:</span> Project kickoff and team formation</li>
            <li><span className="font-bold text-purple-300">May 2025:</span> First prototype and Technopreneurship Day pitch</li>
            <li><span className="font-bold text-purple-300">June 2025:</span> Block 71 pitch and user feedback</li>
            <li><span className="font-bold text-purple-300">August 2025:</span> Final release and marketplace launch</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-purple-200 mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Vite</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">React</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">HTML</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Tailwind</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Framer</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">JavaScript</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Flask</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Python</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Scikit</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Gemini</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Postgresql</span>
            <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">Amazon</span>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-purple-200 mb-2">Team & Reflection</h2>
          <p className="text-purple-100 text-lg">
            Axify was built together with Benny, Jun Hong, and Sean. What started as a school project soon became a business opportunity for us. We learned to collaborate, pitch to real investors, and build a product that solves real problems. The journey was challenging but rewarding, and it has inspired us to keep innovating.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AxifyProjectPage;
