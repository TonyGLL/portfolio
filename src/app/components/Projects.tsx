import { Project, PROJECTS } from "@/constants/projects";

const projects: Project[] = PROJECTS;

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-subtle rounded-[8px] border border-gray-100 p-4 shadow-card flex flex-col justify-between">
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="text-sm text-muted-text mt-2">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-text">
              {p.tags?.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-white rounded text-xs border">{t}</span>
              ))}
            </div>

            <div className="mt-6 w-full">
              <a className="w-full flex justify-center" href={p.url} target="_blank" rel="noopener noreferrer"><button className="px-4 py-2 rounded-full bg-primary text-white cursor-pointer w-[80%]">View on Github</button></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
