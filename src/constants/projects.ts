export type Project = {
    id: string;
    title: string;
    description: string;
    url: string;
    tags?: string[];
}

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Clean Architecture API (Node.js & TypeScript)',
        description: 'A RESTful API designed with Clean Architecture principles using Node.js and TypeScript. It features clear separation of concerns, dependency injection, repository patterns, role-based access control, extensible modules, and integrates with PostgreSQL. Ideal as boilerplate for scalable backend systems.',
        tags: ['Node.js', 'TypeScript', 'Clean Architecture', 'Express', 'PostgreSQL', 'Dependency Injection'],
        url: 'https://github.com/TonyGLL/clean-architecture-nodejs'
    },
    {
        id: '2',
        title: 'WebChat - Realtime Chat App (Go + Next.js)',
        description: 'A modern, scalable real-time chat application with a Go backend (Clean Architecture) and a Next.js + TypeScript frontend. Implements WebSocket-powered messaging, JWT auth, multi-room support, Redis caching, and containerized deployment with Docker Compose for easy local and production setup.',
        tags: ['Golang', 'Next.js', 'TypeScript', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker', 'Clean Architecture', 'Gin', 'Tailwind CSS'],
        url: 'https://github.com/TonyGLL/webchat'
    },
    {
        id: '3',
        title: 'Caching Proxy Server (Go)',
        description: 'A high-performance HTTP caching proxy server built in Go with Clean Architecture. It intercepts client requests, caches responses, and serves subsequent identical requests from cache to improve latency and reduce load. Includes cache invalidation strategies, modular design, and support for Docker deployment.',
        tags: ['Golang', 'Clean Architecture', 'Proxy Server', 'Caching', 'Docker'],
        url: 'https://github.com/TonyGLL/caching-proxy-server'
    }
]