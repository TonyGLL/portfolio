export default function Hero() {
  return (
    <section className="pt-8 pb-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight">
            JOSÉ ANTONIO GONZÁLEZ LLAMBIA
          </h1>
          <p className="mt-3 text-lg text-muted-text">
            Fullstack Developer | Node.js, Typescript, Angular, React/Next.js
          </p>
          <p className="mt-4 text-slate-600 max-w-xl">
            Crafting robust, scalable web solutions.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="ml-4 flex gap-3">
            {/* Social icons */}
            <a aria-label="GitHub" className="p-2 rounded-full border" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
            </a>
            <a aria-label="LinkedIn" className="p-2 rounded-full border" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
