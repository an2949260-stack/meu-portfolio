import { Header } from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import { Projects } from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import LiquidGradientBackground from "./components/LiquidGradientBackground"

type Section = {
  id: string
  label: string
  component: React.ReactNode
}

function App() {
  const sections: Section[] = [
    { id: "home", label: "Home", component: <Hero /> },
    { id: "about", label: "Sobre", component: <AboutMe /> },
    { id: "projects", label: "Projetos", component: <Projects /> },
    { id: "experience", label: "Experiência", component: <Experience /> },
    { id: "skills", label: "Skills", component: <Skills /> },
    { id: "contact", label: "Contato", component: <Contact /> },
  ]

  return (
    <div className="relative text-white">
      <LiquidGradientBackground>
        <div className="md:max-w-[1440px] mx-auto px-section py-section-md md:px-section-md gap-y-section flex flex-col">
          <Header sections={sections} />
          {sections.map(section => (
            <section key={section.id} id={section.id} className="py-20">
              {section.component}
            </section>
          ))}
        </div>
      </LiquidGradientBackground>
    </div>
  )
}

export default App
