import { memo, useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/portfolio'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="font-mono text-sm font-medium text-blue-600 transition hover:text-sky-500"
          onClick={close}
        >
          &lt;{profile.firstName}/&gt;
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  link.id === 'contact'
                    ? 'ml-2 bg-blue-600 text-white hover:bg-blue-500'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.id === 'contact' ? link.label : `<${link.label}/>`}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={close}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                    link.id === 'contact'
                      ? 'bg-blue-600 text-center text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  {link.id === 'contact' ? link.label : `<${link.label}/>`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default memo(Navbar)
