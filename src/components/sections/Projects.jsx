import { memo, useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { projects, projectFilters } from '../../data/portfolio'
import ProjectCard from './ProjectCard'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(0)

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.categories.includes(activeFilter))
  }, [activeFilter])

  useEffect(() => {
    setActiveIndex(0)
  }, [activeFilter])

  const count = filtered.length

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (count ? (i - 1 + count) % count : 0))
  }, [count])

  const goNext = useCallback(() => {
    setActiveIndex((i) => (count ? (i + 1) % count : 0))
  }, [count])

  useEffect(() => {
    if (count < 2) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, goPrev, goNext])

  const prevProject = count > 1 ? filtered[(activeIndex - 1 + count) % count] : null
  const current = count ? filtered[activeIndex] : null
  const nextProject = count > 1 ? filtered[(activeIndex + 1) % count] : null

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm font-medium text-slate-600">Get to know about</p>
          <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">My Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 flex justify-center"
          role="tablist"
          aria-label="Project categories"
        >
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1.5">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-600 hover:bg-white hover:text-blue-600'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {!current ? (
          <p className="text-center text-slate-500">No projects in this category yet.</p>
        ) : (
          <div className="relative">
            <div className="flex items-stretch gap-3 md:gap-4">
              {prevProject ? (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous project"
                  className="hidden w-[12%] shrink-0 self-stretch overflow-hidden opacity-60 transition hover:opacity-90 lg:block"
                >
                  <ProjectCard project={prevProject} />
                </button>
              ) : (
                <div className="hidden w-[12%] shrink-0 lg:block" />
              )}

              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeFilter}-${current.id}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={current} featured />
                  </motion.div>
                </AnimatePresence>
              </div>

              {nextProject ? (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next project"
                  className="hidden w-[12%] shrink-0 self-stretch overflow-hidden opacity-60 transition hover:opacity-90 lg:block"
                >
                  <ProjectCard project={nextProject} />
                </button>
              ) : (
                <div className="hidden w-[12%] shrink-0 lg:block" />
              )}
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next project"
                  className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 transition hover:text-blue-600 lg:block xl:-right-2"
                >
                  <HiChevronRight size={32} />
                </button>

                <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous project"
                    className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-blue-400 hover:bg-blue-50"
                  >
                    <HiChevronLeft size={24} />
                  </button>
                  <div className="flex gap-2">
                    {filtered.map((p, i) => (
                      <button
                        key={p.id}
                        type="button"
                        aria-label={`Go to ${p.title}`}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 w-2 rounded-full transition ${
                          i === activeIndex ? 'bg-blue-500' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next project"
                    className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-blue-400 hover:bg-blue-50"
                  >
                    <HiChevronRight size={24} />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default memo(Projects)
