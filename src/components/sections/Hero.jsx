import { memo } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiChatAlt2 } from 'react-icons/hi'
import { profile, navLinks } from '../../data/portfolio'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-glow bg-grid pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_70%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 text-center md:order-1 md:text-left"
        >

          <p className="mb-2 text-lg text-slate-600">Hello! I am</p>

          <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              {profile.firstName}
            </span>
            <span className="block text-slate-900">{profile.lastName}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-4 text-xl font-medium text-slate-700 sm:text-2xl"
          >
            {profile.tagline}
            <span className="animate-pulse text-blue-400">...</span>
          </motion.p>

          <p className="mt-3 text-sm text-slate-500 sm:text-base">{profile.subtitle}</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1.5 font-mono text-sm text-blue-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            {profile.title}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <HiDownload size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-500/40 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
            >
              <HiChatAlt2 size={18} />
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/40 via-sky-500/20 to-cyan-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-full border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <img
                src={profile.photo}
                alt={profile.fullName}
                width={360}
                height={360}
                className="h-64 w-64 object-cover sm:h-80 sm:w-80 lg:h-[360px] lg:w-[360px]"
              />
            </div>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-8 rounded-lg border border-blue-500/30 bg-white/90 px-3 py-1.5 font-mono text-xs text-blue-600 shadow-md backdrop-blur"
            >
              &lt;Dev/&gt;
            </motion.span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -left-4 bottom-16 rounded-lg border border-sky-500/30 bg-white/90 px-3 py-1.5 font-mono text-xs text-sky-600 shadow-md backdrop-blur"
            >
              ESI
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Hero)
