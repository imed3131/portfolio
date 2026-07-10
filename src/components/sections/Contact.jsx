import { memo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { profile } from '../../data/portfolio'

const API_URL = import.meta.env.VITE_API_URL || '/api/contact'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    const form = formRef.current
    if (!form) return

    const name = form.user_name.value.trim()
    const email = form.user_email.value.trim()
    const message = form.message.value.trim()

    setStatus('loading')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again or email me directly.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">Contact Me</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-600">
              Have a project in mind or an opportunity to discuss? Send a message — I&apos;ll get
              back to you as soon as I can.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600">
                    <FaEnvelope />
                  </span>
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-slate-600 transition hover:text-blue-600"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600">
                    <FaPhoneAlt />
                  </span>
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600">
                  <FaMapMarkerAlt />
                </span>
                {profile.location}
              </li>
            </ul>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl bg-white border border-slate-200 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl bg-white border border-slate-200 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            noValidate
          >
            <div>
              <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm text-emerald-600" role="status">
                Message sent successfully. Thank you!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-500" role="alert">
                {errorMsg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
