import { memo } from 'react'

function ProjectImage({ project, className = '' }) {
  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className={`h-full w-full object-contain ${className}`}
    />
  )
}

function PhoneFrame({ project }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
      <div className="flex h-full max-h-full flex-col rounded-[1.75rem] border-[3px] border-slate-500/80 bg-slate-800 p-1.5 shadow-2xl shadow-black/40 sm:rounded-[2.25rem] sm:border-4 sm:p-2 aspect-[9/19] max-w-[min(100%,220px)]">
        <div className="mx-auto mb-1 h-1.5 w-14 shrink-0 rounded-full bg-slate-900 sm:mb-1.5 sm:h-2 sm:w-16" />
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.25rem] bg-navy-950 sm:rounded-[1.75rem]">
          <ProjectImage project={project} />
        </div>
        <div className="mx-auto mt-1 h-1 w-16 shrink-0 rounded-full bg-slate-600 sm:mt-1.5 sm:w-20" />
      </div>
    </div>
  )
}

function MonitorFrame({ project }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 sm:p-6">
      <div className="flex w-full max-w-3xl flex-col">
        <div className="overflow-hidden rounded-lg border-2 border-slate-500/80 bg-slate-800 shadow-2xl shadow-black/40 sm:rounded-xl sm:border-[3px]">
          <div className="flex items-center gap-1.5 border-b border-slate-700/80 bg-slate-800 px-3 py-2 sm:px-4 sm:py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/90" />
          </div>
          <div className="relative aspect-video w-full overflow-hidden bg-navy-950">
            <ProjectImage project={project} />
          </div>
        </div>
        <div className="mx-auto mt-0 flex flex-col items-center">
          <div className="h-4 w-20 rounded-b-sm bg-gradient-to-b from-slate-600 to-slate-700 sm:h-5 sm:w-28" />
          <div className="h-1.5 w-32 rounded-full bg-slate-700 sm:w-40" />
        </div>
      </div>
    </div>
  )
}

function PlainFrame({ project }) {
  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
      <ProjectImage project={project} />
    </div>
  )
}

function ProjectDeviceFrame({ project }) {
  if (project.categories.includes('mobile')) {
    return <PhoneFrame project={project} />
  }

  if (project.categories.includes('web')) {
    return <MonitorFrame project={project} />
  }

  return <PlainFrame project={project} />
}

export default memo(ProjectDeviceFrame)
