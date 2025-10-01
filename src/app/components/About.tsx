export default function About() {
  const skills = ['Node.js', 'Typescript', 'React / Next.js', 'Databases', 'Cloud / AWS', 'Docker']

  return (
    <section>
      <div className="flex gap-6 items-start">
        <div className="w-20 hidden sm:block">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/avatar.jpg" alt="Juan" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-700">
            Lorem ipsum in the cue toit olimpem for enungrgs in tatuitts etale js youen keaute robust, scalable web solutions.
          </p>

          <h3 className="mt-6 font-semibold text-lg">About Me</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="pill border-gray-200 bg-white shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-sm text-slate-700">{s}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
