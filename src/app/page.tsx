import Hero from '../app/components/Hero'
import About from '../app/components/About'
import Projects from '../app/components/Projects'
import Contact from '../app/components/Contact'

export default function Home() {
  return (
    <main className="py-12">
      <Hero />
      <div className="border-t border-gray-200 my-8" />
      <About />
      <div className="my-8" />
      <Projects />
      <div className="border-t border-gray-200 my-8" />
      <Contact />
    </main>
  )
}
