import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { GithubIcon } from './ui/BrandIcons'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
  highlight?: boolean
  comingSoon?: boolean
}

const mernProjects: Project[] = [
  {
    title: 'MentorConnect',
    description: 'Full-stack mentorship platform with real-time chat, video sessions, and Razorpay payment integration. Features admin dashboard and role-based auth.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Razorpay'],
    github: 'https://github.com/Ayush-proj/pbl',
    live: '#',
    highlight: true,
  },
  {
    title: 'AI Career Elevator',
    description: 'Platform with ATS score analyzer and AI-powered mock interview system. Includes JWT authentication and user dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'LangChain'],
    github: 'https://github.com/Ayushproj/Ims.git',
    live: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Full CRUD blog application with Cloudinary image upload and admin panel for content management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Ayush-proj/Blog-App.git',
    live: '#',
  },
]

const dataProjects: Project[] = [
  {
    title: 'Vendor Performance Analysis',
    description: 'Analyzed 15,000+ retail sales records to evaluate vendor fulfillment timelines. Built Power BI dashboard for regional sales trends.',
    tech: ['SQL', 'Python', 'Pandas', 'Power BI'],
    github: '#',
    comingSoon: true,
  },
  {
    title: 'Supply Chain Analytics',
    description: 'Processed 40,000+ logistics records to identify delivery bottlenecks. Built ML model with 74% accuracy for delivery risk prediction.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Seaborn'],
    github: '#',
    comingSoon: true,
  },
  {
    title: 'E-Commerce Customer Analytics',
    description: 'Analyzed 3,900+ customer profiles for demographic segmentation. Created visualizations to support marketing strategy.',
    tech: ['SQL', 'Python', 'Pandas', 'Matplotlib'],
    github: '#',
    comingSoon: true,
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'mern' | 'data'>('mern')

  const projects = activeTab === 'mern' ? mernProjects : dataProjects

  return (
    <section id="projects" className="py-20 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          <span className="text-white">My </span>
          <span className="text-[#06B6D4]">Projects</span>
        </motion.h2>

        <div className="flex justify-center mb-12">
          <div className="flex bg-[#161B26] rounded-lg p-1 border border-[#1E293B]">
            <button
              onClick={() => setActiveTab('mern')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'mern'
                  ? 'bg-[#06B6D4] text-[#0B0F19]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              MERN Stack
            </button>
            <button
              onClick={() => setActiveTab('data')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'data'
                  ? 'bg-[#3B82F6] text-white'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Data Analytics
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#161B26] p-6 rounded-2xl border transition-all hover:border-[#06B6D4] group ${
                project.highlight ? 'border-[#3B82F6]' : 'border-[#1E293B]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#06B6D4] transition-colors">
                  {project.title}
                </h3>
                {project.comingSoon ? (
                  <span className="text-xs px-2 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded">
                    Coming Soon
                  </span>
                ) : (
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
              <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-[#0B0F19] text-[#06B6D4] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Ayush-proj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-white transition-colors"
          >
            View All Projects <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}