type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
}

const projects: Project[] = [
  { id: '1', title: 'E-commerce API with Node.js and Clean Architecture', description: 'A secure and robust e-commerce backend, built with Node.js and TypeScript, following the principles of Clean Architecture. It includes a dual authentication system, role-based access control, and full e-commerce functionality with Stripe integration.', tags: ['Node.js', 'Typescript', 'Docker', 'Stripe', 'PostgreSQL', 'Clean Architecture'] },
  { id: '2', title: 'Data Atructures and Algorithms in TypeScript', description: 'A secure and robust e-commerce backend, built with Node.js and TypeScript, following the principles of Clean Architecture. It includes a dual authentication system, role-based access control, and full e-commerce functionality with Stripe integration.', tags: ['Typescript', 'Big O', 'Data structures', 'Algorithms'] },
  { id: '3', title: 'Image Processing Service', description: 'This is a Go-based image processing service that provides a RESTful API for managing users and (eventually) processing images. It uses JWT for authentication and PostgreSQL as its database. The service is containerized using Docker and supports live reloading for development.', tags: ['Golang', 'Docker', 'PostgreSQL'] }
]

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
              <a className="w-full flex justify-center" href="https://github.com/TonyGLL/clean-architecture-nodejs" target="_blank" rel="noopener noreferrer"><button className="px-4 py-2 rounded-full bg-primary text-white cursor-pointer w-[80%]">View on Github</button></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
