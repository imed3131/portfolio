import { memo } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center md:px-8">
        <p className="text-lg font-semibold text-slate-900">{profile.fullName}</p>
        <p className="max-w-md text-sm text-slate-500">
          Passionate developer creating innovative and high-performance web solutions
        </p>
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-slate-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-slate-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          © {year} {profile.fullName.toUpperCase()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
