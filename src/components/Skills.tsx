import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillTree = [
  {
    category: 'frontend',
    color: '#06B6D4',
    skills: [
      { name: 'react', level: 'intermediate' },
      { name: 'typescript', level: 'basic' },
      { name: 'tailwindcss', level: 'intermediate' },
    ],
  },
  {
    category: 'backend',
    color: '#3B82F6',
    skills: [
      { name: 'nodejs', level: 'intermediate' },
      { name: 'express', level: 'intermediate' },
      { name: 'mongodb', level: 'basic' },
    ],
  },
  {
    category: 'data',
    color: '#A78BFA',
    skills: [
      { name: 'python', level: 'intermediate' },
      { name: 'sql', level: 'intermediate' },
      { name: 'pandas', level: 'basic' },
      { name: 'powerbi', level: 'intermediate' },
      { name: 'langchain', level: 'basic' },
      { name: 'langgraph', level: 'basic' },
    ],
  },
  {
    category: 'tools',
    color: '#34D399',
    skills: [
      { name: 'git', level: 'intermediate' },
      { name: 'vscode', level: 'intermediate' },
      { name: 'vercel', level: 'basic' },
      { name: 'figma', level: 'basic' },
    ],
  },
]

const levelColor: Record<string, string> = {
  advanced: '#34D399',
  intermediate: '#06B6D4',
  basic: '#94A3B8',
}

// Build the full lines to display
function buildLines(): { text: string; delay: number }[] {
  const lines: { text: string; delay: number }[] = []
  let delay = 0
  const step = 60

  lines.push({ text: '$ skills --list --format=tree', delay })
  delay += step * 2
  lines.push({ text: '', delay })
  delay += step

  lines.push({ text: 'ayush@portfolio:~/skills', delay })
  delay += step

  skillTree.forEach((group, gi) => {
    const isLastGroup = gi === skillTree.length - 1
    const groupPrefix = isLastGroup ? '└──' : '├──'
    lines.push({ text: `${groupPrefix} ${group.category}`, delay })
    delay += step

    group.skills.forEach((skill, si) => {
      const isLastSkill = si === group.skills.length - 1
      const skillPrefix = isLastGroup
        ? `    ${isLastSkill ? '└──' : '├──'}`
        : `│   ${isLastSkill ? '└──' : '├──'}`
      lines.push({ text: `${skillPrefix} ${skill.name}@${skill.level}`, delay })
      delay += step
    })
  })

  delay += step
  lines.push({ text: '', delay })
  lines.push({ text: `✓ ${skillTree.reduce((a, g) => a + g.skills.length, 0)} skills loaded`, delay })
  delay += step
  lines.push({ text: '$ _', delay })

  return lines
}

const allLines = buildLines()

function TerminalLine({ text, categoryColor }: { text: string; categoryColor?: string }) {
  // Colorize parts of the line
  if (text.startsWith('$')) {
    return (
      <div className="font-mono text-sm leading-6">
        <span className="text-[#06B6D4]">{text === '$ _' ? '$ ' : text}</span>
        {text === '$ _' && <span className="animate-pulse text-[#06B6D4]">▋</span>}
      </div>
    )
  }

  if (text.startsWith('ayush@')) {
    const [user, path] = text.split(':')
    return (
      <div className="font-mono text-sm leading-6">
        <span className="text-[#34D399]">{user}</span>
        <span className="text-white">:</span>
        <span className="text-[#3B82F6]">{path}</span>
      </div>
    )
  }

  if (text.startsWith('✓')) {
    return (
      <div className="font-mono text-sm leading-6 text-[#34D399]">{text}</div>
    )
  }

  if (text === '') {
    return <div className="h-3" />
  }

  // Tree lines with skill@level
  if (text.includes('@')) {
    const atIdx = text.lastIndexOf('@')
    const prefix = text.slice(0, text.lastIndexOf(' ') + 1)
    const skillName = text.slice(text.lastIndexOf(' ') + 1, atIdx)
    const level = text.slice(atIdx + 1)
    return (
      <div className="font-mono text-sm leading-6">
        <span className="text-[#475569]">{prefix}</span>
        <span className="text-white">{skillName}</span>
        <span className="text-[#475569]">@</span>
        <span style={{ color: levelColor[level] ?? '#94A3B8' }}>{level}</span>
      </div>
    )
  }

  // Category lines
  const parts = text.split(' ')
  const treeChars = parts[0]
  const categoryName = parts.slice(1).join(' ')
  return (
    <div className="font-mono text-sm leading-6">
      <span className="text-[#475569]">{treeChars} </span>
      <span style={{ color: categoryColor ?? '#fff' }} className="font-semibold">{categoryName}</span>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    allLines.forEach((line, i) => {
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    })
  }, [isInView])

  // Map category name to color for tree lines
  const categoryColorMap: Record<string, string> = {}
  skillTree.forEach(g => { categoryColorMap[g.category] = g.color })

  return (
    <section id="skills" className="py-20 bg-[#0B0F19]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-[#06B6D4]">Skills</span>
          <span className="text-white"> & </span>
          <span className="text-[#3B82F6]">Expertise</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1E293B]">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-[#475569] text-xs font-mono">~/ayush/skills</span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0D1117] p-6 min-h-[420px]">
            {allLines.slice(0, visibleCount).map((line, i) => {
              // Determine category color for category lines
              let catColor: string | undefined
              const trimmed = line.text.replace(/^[├└│\s─]+/, '').trim()
              if (categoryColorMap[trimmed]) catColor = categoryColorMap[trimmed]

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <TerminalLine text={line.text} categoryColor={catColor} />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 mt-6"
        >
          {Object.entries(levelColor).map(([level, color]) => (
            <div key={level} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs text-[#475569] font-mono">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
