import { memo } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'

function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600">
            {skills.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            {skills.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                <span className="mr-2 font-mono text-blue-600">#</span>
                {cat.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {skills.spoken.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-slate-700"
            >
              {lang.name}{' '}
              <span className="text-sky-600">· {lang.level}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Skills)
