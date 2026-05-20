import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_wspw68h'
const TEMPLATE_ID = 'template_2tdwhqj'
const PUBLIC_KEY = 'mvutFADs4-iV4t2wT'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91-9168219089', href: 'tel:+919168219089' },
  { icon: Mail, label: 'Email', value: 'ayushrbhosale2004@gmail.com', href: 'mailto:ayushrbhosale2004@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Kolhapur, Maharashtra, India', href: '#' },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-white">Get In </span>
          <span className="text-[#06B6D4]">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-[#94A3B8] mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-[#161B26] rounded-xl border border-[#1E293B] hover:border-[#06B6D4] transition-all group"
                >
                  <div className="p-3 bg-[#0B0F19] rounded-lg group-hover:bg-[#06B6D4] transition-all">
                    <info.icon className="text-[#06B6D4] group-hover:text-[#0B0F19]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#161B26] p-8 rounded-2xl border border-[#1E293B]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white focus:border-[#06B6D4] focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white focus:border-[#06B6D4] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white focus:border-[#06B6D4] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[#34D399] text-sm"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm"
                >
                  ✕ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
