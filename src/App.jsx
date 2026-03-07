import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Results } from "@/components/results"
import { Curriculum } from "@/components/curriculum"
import { PlatformShowcase } from "@/components/platform-showcase"
import { TeacherProfile } from "@/components/teacher-profile"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Results />
      <Curriculum />
      <PlatformShowcase />
      <TeacherProfile />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App
