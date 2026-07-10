import { memo } from 'react'
import { motion } from 'framer-motion'
import { about } from '../../data/portfolio'

function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            {about.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <h3 className="font-mono text-sm text-sky-600">&lt;Introduction/&gt;</h3>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {about.intro}
            </p>
            <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
              {about.motivation}
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {about.facts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-slate-800 sm:text-base">{fact.value}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
