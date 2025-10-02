import Image from 'next/image'
import githubIcon from '../../../public/github-mark.svg';
import linkedinIcon from '../../../public/linkedin-mark.png';

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
            <a aria-label="GitHub" className='flex justify-center items-center' target='_blank' href="https://github.com/TonyGLL">
              <Image src={githubIcon} width={24} height={24} alt='Github' unoptimized />
            </a>
            <a aria-label="LinkedIn" className='flex justify-center items-center' target='_blank' href="https://www.linkedin.com/in/jose-antonio-gonzalez-llambia-85aa9b183/">
              <Image src={linkedinIcon} width={30} height={30} alt='Linkedin' unoptimized />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
