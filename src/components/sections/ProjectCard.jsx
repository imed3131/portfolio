import { memo } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ProjectDeviceFrame from './ProjectDeviceFrame'

function ProjectCard({ project, featured = false }) {
  if (featured) {
    return (
      <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
        <h3 className="border-b border-slate-200 px-5 py-4 text-center font-mono text-sm font-semibold uppercase tracking-wider text-slate-900 sm:text-base md:text-lg">
          {project.title}
        </h3>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 sm:aspect-[2/1]">
          <ProjectDeviceFrame project={project} />
        </div>

        <div className="flex flex-col px-5 py-5 sm:px-8 sm:py-6">
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white sm:text-sm">
              {project.tags.join(' ')}
            </span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
              >
                View project <FaExternalLinkAlt size={12} />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="flex h-full min-h-[280px] w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-5 opacity-70">
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-blue-600">{project.year}</p>
        <h3 className="mb-3 font-mono text-sm font-semibold uppercase text-slate-900">{project.title}</h3>
        <p className="line-clamp-4 text-xs leading-relaxed text-slate-500">{project.description}</p>
      </div>
      <span className="mt-4 inline-block w-fit rounded-full bg-blue-600/90 px-3 py-1.5 text-[10px] font-medium text-white">
        {project.tags.slice(0, 3).join(' ')}
      </span>
    </article>
  )
}

export default memo(ProjectCard)
