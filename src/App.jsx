import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Results } from "@/components/results"
import { Curriculum } from "@/components/curriculum"
import { PlatformShowcase } from "@/components/platform-showcase"
import { DocumentShowcase } from "@/components/document-showcase"
import { TeacherProfile } from "@/components/teacher-profile"
import { Testimonials } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/content/blog-posts"

function App() {
  return (
    <main className="min-h-screen">
      <Header currentPath="/" />
      <Hero featuredPost={blogPosts[0]} />
      <ValueProposition />
      <Results />
      <Curriculum />
      <PlatformShowcase />
      <DocumentShowcase />
      <TeacherProfile />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <ContactForm />
      <Location />
      <Footer />
    </main>
  )
}

export default App
