import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './ui/BrandIcons'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <span className="text-[#06B6D4] text-sm font-medium">Hello, I'm</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Ayush</span>
            <span className="text-[#06B6D4]"> Bhosale</span>
          </h1>
          <p className="text-xl text-[#94A3B8] mb-6">
            Data Analyst & MERN Stack Developer
          </p>
          <p className="text-[#94A3B8] mb-8 max-w-lg leading-relaxed">
            BTech CSBS student at Kolhapur Institute of Technology. Passionate about building scalable 
            web applications and uncovering insights from data. Strong foundation in DSA. Currently seeking opportunities in 
            full-stack development and data analytics.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ayush-proj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B26] rounded-lg hover:bg-[#06B6D4] hover:text-[#0B0F19] transition-all duration-300"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-bhosale-750485359"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B26] rounded-lg hover:bg-[#06B6D4] hover:text-[#0B0F19] transition-all duration-300"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:ayushrbhosale2004@gmail.com"
              className="p-3 bg-[#161B26] rounded-lg hover:bg-[#06B6D4] hover:text-[#0B0F19] transition-all duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://leetcode.com/u/ayushbhosale_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B26] rounded-lg hover:bg-[#06B6D4] hover:text-[#0B0F19] transition-all duration-300"
            >
              <LeetcodeIcon size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Ayush Bhosale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            >
              <ArrowDown className="text-[#06B6D4]" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}