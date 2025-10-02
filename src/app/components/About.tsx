import Image from 'next/image';
import profileImg from '../../../public/profile.png';

export default function About() {
  const skills = ['Node.js', 'React / Next.js', 'Golang', 'Cloud / AWS', 'Docker', 'SQL / NoSQL', 'Clean Architecture']

  return (
    <section>
      <div className="flex gap-6 items-start">
        <div className="w-20 hidden sm:block">
          <div className="w-21 h-21 rounded-full object-cover overflow-hidden">
            <Image
              src={profileImg}
              alt="Juan"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-700">
            I am currently focused on mastering full-stack development, utilizing Angular for front-end development and Node.js for back-end. I efficiently manage and interact with various databases, including MySQL, PostgreSQL, and MongoDB. Additionally, i leverage Firebase for backend services and Docker for containerization, ensuring scalable and efficient deployment of applications.
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
