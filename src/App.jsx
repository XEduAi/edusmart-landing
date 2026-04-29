import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntentPathways } from "@/components/intent-pathways"
import { ValueProposition } from "@/components/value-proposition"
import { Results } from "@/components/results"
import { Curriculum } from "@/components/curriculum"
import { PlatformShowcase } from "@/components/platform-showcase"
import { DocumentShowcase } from "@/components/document-showcase"
import { TeacherProfile } from "@/components/teacher-profile"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/content/blog-posts"

function App() {
  return (
    <main className="min-h-screen bg-base">
      <Header currentPath="/" />
      <Hero featuredPost={blogPosts[0]} />
      <IntentPathways />
      <ValueProposition />
      <Results />
      <Curriculum />
      <PlatformShowcase />
      <DocumentShowcase />
      <TeacherProfile />
      <BlogPreview />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App
