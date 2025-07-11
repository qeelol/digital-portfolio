import { motion } from 'framer-motion';
import { FaRegStar } from "react-icons/fa";

const timelineData = [
  {
    date: 'April 2024',
    title: 'Started Polytechnic',
    description: 'Began my journey in software development at NYP.',
    image: '/nyp.png'
  },
  {
    date: 'October 2024 − February 2025',
    title: 'First Major Project',
    description: 'Worked on my first major software project, "Rewwwind", and was nominated for an outstanding project presentation in my cohort, where I managed to score a distinction grade.',
    image: '/re.png'
  },
  {
    date: 'April 2025',
    title: 'First Year Results',
    description: 'Managed to score 4.0 GPA and was selected as the Best Performing Year 1 Diploma in Information Technology Student',
    image: '/nyp.png'
  },
  {
    date: 'April 2025 − August 2025',
    title: 'Second Major Project',// (Current)
    description: 'Worked on my second major software project, "Axify", based on a problem statement assigned by the Singapore Chinese Chamber of Commerce and Industry.',
    image: '/axify.png'
  },
  {
    date: 'August 2025 − December 2025',
    title: 'Exchange Programme to South Korea',
    description: 'Selected by Nanyang Polytechnic to study AI and Big Data at Woosong University in South Korea.',
    image: '/woosong.png'
  },
  {
    date: 'April 2027',
    title: 'Graduation',// (Future)
    description: 'Graduated from Nanyang Polytechnic.',
    image: '/nyp.png'
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Journey = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black relative">
      <div className="absolute w-1 bg-gradient-to-b from-primary-light to-primary-dark left-1/2 transform -translate-x-1/2 z-0" style={{ top: '10%', bottom: '10%' }} />
      <div className="flex flex-col gap-0 w-full z-10">
        {timelineData.map((item, idx) => (
          <motion.div
            key={item.date}
            className="flex items-center justify-center min-h-[90vh] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariant}
          >
            <div className="relative w-full flex justify-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="p-4 w-30 h-30 flex justify-center rounded-full border-3 border-primary-dark bg-black">
                  <img src={`/digital-portfolio/${item.image}`} className="w-full h-full object-contain" alt="NYP Logo" />
                </div>
              </div>

              <div className={`w-full max-w-md ${idx % 2 === 0 ? 'absolute left-[5%]' : 'absolute right-[5%]'}`}>
                <h3 className="text-3xl font-bold text-primary-light mb-2">{item.title}</h3>
                <p className="text-xl font-bold text-primary-light mb-4">{item.date}</p>
                <p className="text-lg text-white opacity-80">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center max-w-[30vw] text-center">
        <FaRegStar className="text-5xl text-primary-dark" />
        <p className="text-xl text-wrap">Every step of this journey has contributed to my growth, and I look forward to what the future has in store.</p>
      </div>
    </div>
  );
};

export default Journey;