import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "@/content/faqs"

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`group rounded-[1.6rem] transition-all duration-300 ${
        isOpen
          ? "dossier-panel ring-1 ring-primary/25 bg-primary/5 shadow-lg shadow-primary/5"
          : "dossier-panel hover:border-primary/20 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-relaxed sm:text-lg">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white rotate-180"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tape-label mb-4">Câu hỏi thường gặp</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Giải đáp <span className="gradient-text">thắc mắc</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Những câu hỏi phụ huynh và học sinh thường hỏi nhất
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqData.map((item, index) => (
            <div key={index}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
