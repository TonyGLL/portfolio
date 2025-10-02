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
      <footer className="py-8 text-sm text-muted-text">
        <a href="mailto:tonydevelopmentqa@gmail.com" className="text-primary">tonydevelopmentqa@gmail.com</a>
      </footer>
    </main>
  )
}
