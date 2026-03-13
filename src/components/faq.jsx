import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "Dạy toán Rạch Giá — phương pháp giảng dạy có gì đặc biệt?",
    answer:
      "Tại lớp dạy toán Thầy Long ở Rạch Giá, chúng tôi áp dụng phương pháp \"Hiểu sâu bản chất\" — không học vẹt, không nhồi nhét công thức. Học sinh được hướng dẫn tư duy logic từ gốc, hiểu rõ tại sao phải giải theo cách đó, từ đó tự tin vận dụng linh hoạt vào mọi dạng bài. Mỗi bài học được thiết kế theo lộ trình từ dễ đến khó, phù hợp với năng lực từng em.",
  },
  {
    question: "Học phí dạy thêm toán ở Rạch Giá là bao nhiêu?",
    answer:
      "Học phí dạy thêm toán tại Rạch Giá được thiết kế cạnh tranh và phù hợp với nhiều gia đình ở Kiên Giang. Mức phí thay đổi theo khối lớp và hình thức học (nhóm nhỏ hoặc 1-1). Đặc biệt, buổi học thử đầu tiên hoàn toàn miễn phí để phụ huynh và học sinh trải nghiệm trước khi quyết định. Vui lòng liên hệ trực tiếp để nhận bảng giá chi tiết.",
  },
  {
    question: "Lớp ôn thi THPT Quốc gia ở Rạch Giá có gì nổi bật?",
    answer:
      "Lớp ôn thi THPT Quốc gia môn Toán tại Rạch Giá của Thầy Long tập trung vào luyện đề theo cấu trúc đề thi mới nhất, phương pháp giải nhanh trắc nghiệm, và bổ trợ kiến thức nền tảng cho học sinh yếu. Với 40+ năm kinh nghiệm, Thầy Long nắm rõ xu hướng đề thi và hướng dẫn học sinh đạt điểm cao nhất có thể.",
  },
  {
    question: "Luyện thi vào 10 tại Rạch Giá như thế nào?",
    answer:
      "Chương trình luyện thi vào 10 tại Rạch Giá được thiết kế riêng cho học sinh lớp 8, 9 tại Kiên Giang, bao gồm: ôn tập toàn bộ kiến thức THCS, luyện đề theo cấu trúc đề thi tuyển sinh vào THPT Kiên Giang, bồi dưỡng học sinh giỏi thi vào trường chuyên Huỳnh Mẫn Đạt. Cam kết tiến bộ rõ rệt chỉ sau 1 tháng.",
  },
  {
    question: "Có thể học thử trước khi đăng ký không?",
    answer:
      "Có! Chúng tôi cung cấp 1 buổi học thử hoàn toàn miễn phí tại lớp dạy toán ở Rạch Giá. Trong buổi học thử, học sinh sẽ được trải nghiệm phương pháp giảng dạy, làm quen với môi trường học tập và được đánh giá năng lực ban đầu. Phụ huynh có thể đăng ký học thử ngay qua form liên hệ trên website.",
  },
  {
    question: "Lớp dạy toán ở Rạch Giá có bao nhiêu học viên?",
    answer:
      "Lớp dạy thêm toán tại Rạch Giá được tổ chức theo nhóm nhỏ từ 5-10 học viên để đảm bảo giáo viên có thể quan tâm đến từng em. Với sĩ số ít, mỗi học sinh đều được giải đáp thắc mắc, được chữa bài chi tiết và nhận lộ trình học cá nhân hóa phù hợp với năng lực và mục tiêu riêng.",
  },
  {
    question: "Nền tảng EduSmart hỗ trợ học toán online tại Rạch Giá như thế nào?",
    answer:
      "EduSmart là nền tảng học tập trực tuyến hỗ trợ song song với lớp dạy toán tại Rạch Giá. Học sinh có thể làm bài kiểm tra online, ôn tập bằng flashcard thông minh, theo dõi tiến độ học tập chi tiết và tham gia hệ thống gamification (tích điểm, huy hiệu, bảng xếp hạng) để tăng động lực học. Tất cả đều truy cập miễn phí khi đăng ký lớp học.",
  },
  {
    question: "Tìm gia sư toán ở Rạch Giá Kiên Giang ở đâu?",
    answer:
      "Nếu bạn đang tìm gia sư toán ở Rạch Giá, Kiên Giang, lớp dạy toán Thầy Long là lựa chọn hàng đầu. Với 40+ năm kinh nghiệm, hơn 1000 học sinh đã tin tưởng, lớp nhóm nhỏ 5-10 em để đảm bảo chất lượng. Địa chỉ: Hẻm 1, Đường Nguyễn Tuân, Rạch Giá. Liên hệ 0918 877 407 để đăng ký học thử miễn phí.",
  },
]

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
          : "border-border/50 bg-card hover:border-primary/20 hover:shadow-md"
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
  const [openIndex, setOpenIndex] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Inject FAQPage structured data for SEO rich results
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(faqSchema)
    script.id = "faq-schema"
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById("faq-schema")
      if (el) el.remove()
    }
  }, [])

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Câu hỏi thường gặp
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Giải đáp <span className="gradient-text">thắc mắc</span>
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Những câu hỏi phụ huynh và học sinh thường hỏi nhất
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
