import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0B0F19] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-sm">
            © 2026 Ayush Bhosale. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ayush-proj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-bhosale-750485359"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:ayushrbhosale2004@gmail.com"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}