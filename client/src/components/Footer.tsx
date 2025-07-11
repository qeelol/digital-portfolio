import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative z-10 p-10 flex flex-col gap-20 mt-30">
      <div className="flex-grow-1 grid grid-cols-10">
        <div className="h-full flex flex-col gap-10 col-span-4">
          <div className="2xl:text-5xl lg:text-4xl font-bold flex flex-col gap-4">
            <h1>
              <span className="text-primary-light">Together,</span> let's build <br />
              something <span className="text-primary-dark">amazing.</span>
            </h1>
            <p className="text-2xl 2xl:text-xl lg:text-lg font-normal">I would love to connect and get to know you!</p>
          </div>

          <div className="flex flex-col gap-5" id="contact">
            <a
              className="flex items-center gap-4 cursor-pointer group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+6590546826"
            >
              <SiWhatsapp className="text-3xl" />
              <div className="flex flex-col gap-0.5 font-semibold relative pr-15">
                <span className="text-[#25D366]">WhatsApp</span>
                <span className="text-lg">+65 9054 6826</span>
                <FaExternalLinkAlt className="absolute right-0 top-[50%] opacity-0 group-hover:opacity-100 transition-all ease-in-out" />
              </div>
            </a>

            <a
              className="flex items-center gap-4 cursor-pointer group"
              href="mailto:nelsonjonat@gmail.com"
            >
              <MdOutlineEmail className="text-3xl" />
              <div className="flex flex-col gap-0.5 font-semibold relative pr-15">
                <span className="text-primary-dark">Email</span>
                <span className="text-lg">nelsonjonat@gmail.com</span>
                <FaExternalLinkAlt className="absolute right-0 top-[50%] opacity-0 group-hover:opacity-100 transition-all ease-in-out" />
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGlobeAsia className="text-3xl" />
            <div className="flex flex-col gap-1">
              <span>Location</span>
              <span className="text-lg font-semibold">Singapore</span>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col justify-end col-start-7 col-span-5 gap-20">
          <div>
            <h4 className="text-xl font-semibold mb-3">Other Platforms I'm on</h4>
            <div className="grid grid-cols-2 gap-5 text-lg">
              <a 
              className="flex gap-3 items-center border p-4 rounded-xl border-gray-600 
              group hover:bg-blue-600 transition-all transition-500 ease-in-out cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nelson-jonathan-2a9530373/"
              >
                <SiLinkedin />
                <span className="group-hover:font-semibold">LinkedIn</span>
              </a>
              <a className="flex gap-3 items-center border p-4 rounded-xl border-gray-600 
              group hover:bg-gray-600 transition-all transition-500 ease-in-out cursort-pointer"
              target="_blank"
              href="https://github.com/qeelol"
              >
                <SiGithub />
                <span className="group-hover:font-semibold">GitHub</span>
              </a>
              <a 
              className="flex gap-3 items-center border p-4 rounded-xl border-gray-600 
              group hover:bg-pink-600 transition-all transition-500 ease-in-out"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/nya.a.aa/"
              >
                <SiInstagram />
                <span className="group-hover:font-semibold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 border-t-1 pt-5">
        <span>&copy;2025 Nelson Jonathan &#8212; All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer;