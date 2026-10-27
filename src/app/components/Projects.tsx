import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map(p => (
          <article key={p.id} className="bg-subtle rounded-lg border border-gray-100 p-4 shadow-card flex flex-col justify-between">
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="text-sm text-muted-text mt-2">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-text">
              {p.tags?.map(t => (
                <span key={t} className="px-2 py-1 bg-white rounded text-xs border">{t}</span>
              ))}
            </div>

            <div className="mt-6 w-full">
              <a className="block w-[80%] mx-auto text-center px-4 py-2 rounded-full bg-primary text-white" href={p.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
