type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

const projects: Project[] = [
  { id: '1', title: 'E-commerce API with Node.js and Clean Architecture', description: 'A secure and robust e-commerce backend, built with Node.js and TypeScript, following the principles of Clean Architecture. It includes a dual authentication system, role-based access control, and full e-commerce functionality with Stripe integration.', tags: ['Node.js', 'Typescript', 'Docker', 'Stripe', 'PostgreSQL', 'Clean Architecture'], url: 'https://github.com/TonyGLL/clean-architecture-nodejs' },
  { id: '2', title: 'Data Structures and Algorithms (DSA)', description: 'This project is a 12-week study plan for learning Data Structures and Algorithms using TypeScript. It covers fundamental concepts like Big-O notation, various data structures (Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs), sorting algorithms, and advanced topics like Dynamic Programming and Greedy Algorithms.', tags: ['Typescript', 'Big O', 'Data structures', 'Algorithms'], url: 'https://github.com/TonyGLL/dsa-algorithms' },
  { id: '3', title: 'Caching Proxy Server with Go', description: 'This project is a caching proxy server built in Go. It acts as an intermediary between clients and an origin server, caching responses to improve performance and reduce the load on the origin server.', tags: ['Golang', 'Docker', 'Redis'], url: 'https://github.com/TonyGLL/caching-proxy-server' }
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
              <a className="w-full flex justify-center" href={p.url} target="_blank" rel="noopener noreferrer"><button className="px-4 py-2 rounded-full bg-primary text-white cursor-pointer w-[80%]">View on Github</button></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
