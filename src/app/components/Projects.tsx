type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
}

const projects: Project[] = [
  { id: '1', title: 'Project Alpha', description: 'Platform for task management.', tags: ['N', 'N', 'T', 'S', 'SQL'] },
  { id: '2', title: 'Project Beta', description: 'Platform for task management.', tags: ['N', 'I', 'T', 'S', 'SQL'] },
  { id: '3', title: 'Project Gamma', description: 'Platform for task management.', tags: ['N', 'N', 'T', 'S', 'SQL'] }
]

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-subtle rounded-lg-2 border border-gray-100 p-6 shadow-card">
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="text-sm text-muted-text mt-2">{p.description}</p>

            <div className="mt-4 flex gap-2 text-xs text-muted-text">
              {p.tags?.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-white rounded text-xs border">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-full border">View Project</button>
              <button className="px-4 py-2 rounded-full bg-primary text-white">View on Github</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
