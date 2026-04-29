/* eslint-disable react-refresh/only-export-components */
import App from "@/App"
import { blogPosts, getBlogPostBySlug } from "@/content/blog-posts"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Curriculum } from "@/components/curriculum"
import { Results } from "@/components/results"
import { PlatformShowcase } from "@/components/platform-showcase"
import { DocumentShowcase } from "@/components/document-showcase"
import { TeacherProfile } from "@/components/teacher-profile"
import { Testimonials } from "@/components/testimonials"
import { ValueProposition } from "@/components/value-proposition"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Location } from "@/components/location"
import { PageHero } from "@/components/page-hero"
import { CtaBanner } from "@/components/cta-banner"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/site/site-config"
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  ChevronRight,
  Clock3,
  GraduationCap,
  MapPin,
  MonitorSmartphone,
  NotebookPen,
} from "lucide-react"

const DATE_MODIFIED = "2026-03-15"

const staticPages = [
  { id: "home", route: "/", lastmod: "2026-03-22" },
  { id: "programs", route: "/chuong-trinh-hoc/", lastmod: "2026-03-15" },
  { id: "platform", route: "/nen-tang-lms/", lastmod: "2026-03-15" },
  { id: "about", route: "/ve-thay-long/", lastmod: "2026-03-22" },
  { id: "blog-index", route: "/blog/", lastmod: "2026-03-20" },
  { id: "privacy", route: "/chinh-sach-bao-mat/", lastmod: "2026-03-22" },
  ...blogPosts.map((post) => ({
    id: "blog-post",
    route: `/blog/${post.slug}/`,
    props: { slug: post.slug },
    lastmod: post.updatedAt,
  })),
]

const programSignals = [
  {
    icon: BookOpenText,
    title: "Xếp lớp theo năng lực đầu vào",
    description: "Học sinh mất gốc, học khá và nhóm mục tiêu thi được đi theo lộ trình khác nhau ngay từ đầu.",
  },
  {
    icon: NotebookPen,
    title: "Chữa bài theo lỗi sai điển hình",
    description: "Mỗi buổi học tập trung vào nhóm lỗi khiến học sinh mất điểm nhiều nhất thay vì học lan man.",
  },
  {
    icon: CalendarDays,
    title: "Theo dõi theo từng giai đoạn thi",
    description: "Lịch học và bài tập thay đổi theo giai đoạn: xây nền, luyện đề, tối ưu tốc độ làm bài.",
  },
]

const platformSignals = [
  {
    icon: MonitorSmartphone,
    title: "Một nơi cho bài tập, tài liệu và tiến độ",
    description: "EduSmart LMS gom bài luyện tập, kết quả, tài liệu và phản hồi để phụ huynh dễ theo dõi hơn.",
  },
  {
    icon: Clock3,
    title: "Giữ nhịp học đều sau giờ lên lớp",
    description: "Học sinh có thể ôn lại, làm quiz và xem lỗi sai ngay cả khi không ở lớp học trực tiếp.",
  },
  {
    icon: BookOpenText,
    title: "Tăng khả năng tự học có hướng dẫn",
    description: "Tài nguyên số giúp học sinh quay lại kiến thức cũ, không bị quên bài sau vài ngày.",
  },
]

const aboutSignals = [
  {
    icon: GraduationCap,
    title: "40+ năm kinh nghiệm",
    description: "Kinh nghiệm thực chiến giúp việc phân nhóm học sinh và điều chỉnh phương pháp sát thực tế hơn.",
  },
  {
    icon: MapPin,
    title: "Am hiểu nhu cầu học sinh Rạch Giá",
    description: "Nội dung học được xây quanh bối cảnh thật của học sinh tại Kiên Giang và mục tiêu thi phổ biến.",
  },
  {
    icon: BookOpenText,
    title: "Triết lý dạy học hiểu bản chất",
    description: "Tập trung vào tư duy, cách đặt câu hỏi và khả năng tự giải thích lời giải thay vì học thuộc.",
  },
]

function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.baseUrl}/`).toString()
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    image: absoluteUrl("/room1.jpeg"),
    logo: absoluteUrl("/logo.png"),
    telephone: ["+84919414006", "+84918877407"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84919414006",
      contactType: "customer support",
      availableLanguage: "Vietnamese",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "13:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: `${siteConfig.address.locality}, ${siteConfig.address.region}`,
    },
    knowsAbout: ["Toán lớp 6-12", "Luyện thi vào 10", "Ôn thi THPT môn Toán", "Theo dõi tiến độ học tập bằng LMS"],
    sameAs: [siteConfig.zaloHref, siteConfig.facebookHref],
  }
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.baseUrl}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

function studyProgramsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chương trình dạy Toán tại Rạch Giá",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Dạy Toán lớp 6-9 tại Rạch Giá",
          description: "Chương trình xây nền, lấp lỗ hổng kiến thức và rèn tư duy giải bài theo từng nhóm năng lực.",
          provider: { "@id": `${siteConfig.baseUrl}/#organization` },
          url: absoluteUrl("/chuong-trinh-hoc/"),
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: siteConfig.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.streetAddress,
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
              },
            },
            inLanguage: "vi-VN",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Luyện thi vào 10 môn Toán tại Rạch Giá",
          description: "Lộ trình luyện đề, tăng tốc giai đoạn cuối và củng cố dạng bài thường xuất hiện trong kỳ thi.",
          provider: { "@id": `${siteConfig.baseUrl}/#organization` },
          url: absoluteUrl("/blog/de-thi-vao-10-toan-kien-giang/"),
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: siteConfig.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.streetAddress,
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
              },
            },
            inLanguage: "vi-VN",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Ôn thi THPT môn Toán kết hợp EduSmart LMS",
          description: "Ôn tập có lộ trình, theo dõi bài tập và kết quả bằng nền tảng LMS sau giờ học trực tiếp.",
          provider: { "@id": `${siteConfig.baseUrl}/#organization` },
          url: absoluteUrl("/nen-tang-lms/"),
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "blended",
            location: {
              "@type": "Place",
              name: siteConfig.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.streetAddress,
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
              },
            },
            inLanguage: "vi-VN",
          },
        },
      },
    ],
  }
}

function lmsApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EduSmart LMS",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/nen-tang-lms/"),
    description:
      "Nền tảng LMS hỗ trợ học sinh làm quiz, xem tài liệu, theo dõi tiến độ học tập và nhận phản hồi sau giờ học Toán trực tiếp.",
    screenshot: [absoluteUrl("/screenshots/ss-dashboard.webp"), absoluteUrl("/screenshots/ss-quiz.webp")],
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    inLanguage: "vi-VN",
  }
}

function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.baseUrl}/#teacher`,
    name: "Nguyễn Hữu Long",
    honorificPrefix: "Thầy",
    jobTitle: "Giáo viên môn Toán",
    description:
      "Giáo viên dạy Toán với hơn 40 năm kinh nghiệm tại Rạch Giá, Kiên Giang. Tập trung vào phương pháp hiểu bản chất và lộ trình học tập rõ ràng.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Đại học Sư phạm Vinh",
    },
    worksFor: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    image: absoluteUrl("/potrait.jpeg"),
  }
}


function blogPostSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@id": `${siteConfig.baseUrl}/#teacher` },
    publisher: { "@id": `${siteConfig.baseUrl}/#organization` },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
    image: absoluteUrl("/room1.jpeg"),
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "vi-VN",
  }
}

function createMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  structuredData = [],
  ogImage = absoluteUrl(siteConfig.defaultOgImage),
  ogImageAlt = siteConfig.defaultOgImageAlt,
  article = null,
}) {
  return {
    title,
    description,
    canonical: absoluteUrl(path),
    keywords: keywords.join(", "),
    ogType: type,
    ogImage,
    ogImageAlt,
    structuredData,
    article,
  }
}

function SurfaceCards({ items }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="dossier-panel card-hover p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BlogGrid({ currentSlug, excludeFeatured = false }) {
  const posts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((_, idx) => (excludeFeatured ? idx > 0 : true))

  return (
    <section className="bg-base" style={{ padding: "0 0 96px" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div
          className="grid gap-x-10 gap-y-14 md:grid-cols-2"
          style={{ borderTop: "1px solid var(--color-rule)", paddingTop: 48 }}
        >
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col">
              <a
                href={`/blog/${post.slug}/`}
                className="group block no-underline"
                style={{ color: "inherit" }}
              >
                <div
                  className="relative mb-5 w-full overflow-hidden rounded"
                  style={{
                    aspectRatio: "16 / 9",
                    background: "var(--color-accent-tint)",
                  }}
                >
                  <div
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10.5px] font-semibold tracking-wider"
                    style={{
                      background: "var(--color-on-accent)",
                      color: "var(--color-accent-deep)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {post.category}
                  </div>
                </div>
                <div
                  className="font-mono mb-3 flex items-center gap-2.5 text-[11px] uppercase"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.14em" }}
                >
                  <span>{post.audience}</span>
                  <span style={{ color: "var(--color-rule)" }}>·</span>
                  <time dateTime={post.publishedAt}>{post.readingTime}</time>
                </div>
                <h2
                  className="font-head transition-colors group-hover:opacity-70"
                  style={{
                    fontSize: 26,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    letterSpacing: "-0.018em",
                    margin: "0 0 12px",
                    color: "var(--color-ink)",
                    textWrap: "balance",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  className="m-0 mb-5 max-w-[520px]"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--color-body)",
                  }}
                >
                  {post.description}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold"
                  style={{ color: "var(--color-ink)" }}
                >
                  Đọc bài viết
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedPost() {
  const post = blogPosts[0]
  if (!post) return null
  return (
    <section className="bg-tint" style={{ padding: "64px 0 96px" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div
          className="font-mono mb-8 text-[11px] font-semibold uppercase"
          style={{ color: "var(--color-accent-mid)", letterSpacing: "0.18em" }}
        >
          Bài viết nổi bật
        </div>
        <a
          href={`/blog/${post.slug}/`}
          className="group grid gap-10 no-underline lg:grid-cols-[1.05fr_1fr] lg:items-center"
          style={{ color: "inherit" }}
        >
          <div
            className="relative w-full overflow-hidden rounded"
            style={{
              aspectRatio: "5 / 4",
              background: "var(--color-accent-deep)",
            }}
          >
            <div
              className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider"
              style={{
                background: "var(--color-on-accent)",
                color: "var(--color-accent-deep)",
                letterSpacing: "0.14em",
              }}
            >
              {post.category}
            </div>
          </div>
          <div>
            <div
              className="font-mono mb-4 flex items-center gap-3 text-[11px] uppercase"
              style={{ color: "var(--color-muted)", letterSpacing: "0.14em" }}
            >
              <span>{post.audience}</span>
              <span style={{ color: "var(--color-rule)" }}>·</span>
              <time dateTime={post.publishedAt}>{post.readingTime}</time>
              <span style={{ color: "var(--color-rule)" }}>·</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </div>
            <h2
              className="font-head transition-opacity group-hover:opacity-80"
              style={{
                fontSize: "clamp(30px, 3.4vw, 44px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.022em",
                margin: "0 0 16px",
                color: "var(--color-ink)",
                textWrap: "balance",
              }}
            >
              {post.title}
            </h2>
            <p
              className="m-0 max-w-[560px]"
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--color-body)",
              }}
            >
              {post.description}
            </p>
            <div
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold"
              style={{ color: "var(--color-accent-deep)" }}
            >
              Đọc bài viết
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[11px] uppercase"
      style={{ color: "var(--color-muted)", letterSpacing: "0.14em" }}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" style={{ color: "var(--color-rule)" }}>
                /
              </span>
            )}
            {item.path ? (
              <a
                href={item.path}
                className="no-underline transition-opacity hover:opacity-70"
                style={{ color: "var(--color-muted)" }}
              >
                {item.name}
              </a>
            ) : (
              <span style={{ color: "var(--color-ink)" }}>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Header currentPath="/chuong-trinh-hoc/" />
      <PageHero
        eyebrow="Chương trình học"
        title="Lộ trình dạy Toán từ lớp 6 đến 12, tách rõ theo năng lực và mục tiêu thi."
        description="Trang này gom toàn bộ cấu trúc chương trình học dành cho học sinh tại Rạch Giá: xây nền, tăng tốc, luyện thi vào 10 và THPT với lớp nhỏ và nhịp học đều."
        primaryAction={{ href: "#contact", label: "Nhận tư vấn xếp lớp" }}
        secondaryAction={{ href: "/blog/de-thi-vao-10-toan-kien-giang/", label: "Đọc bài viết ôn thi" }}
        highlights={[
          { label: "Khối lớp", value: "Lớp 6-12 và nhóm luyện thi" },
          { label: "Sĩ số", value: "5-10 học sinh mỗi lớp" },
          { label: "Mục tiêu", value: "Nền tảng chắc và tăng điểm bền vững" },
        ]}
      />
      <SurfaceCards items={programSignals} />
      <Curriculum />
      <Results />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

function PlatformPage() {
  return (
    <main className="min-h-screen">
      <Header currentPath="/nen-tang-lms/" />
      <PageHero
        eyebrow="EduSmart LMS"
        title="Nền tảng hỗ trợ việc học Toán sau giờ lên lớp bằng quiz, tài liệu và theo dõi tiến độ."
        description="EduSmart LMS giúp phụ huynh và học sinh không bị đứt nhịp học. Bài tập, nhận xét, tài liệu và kết quả được tập trung tại một nơi để việc ôn tập dễ nhìn và dễ duy trì hơn."
        primaryAction={{ href: siteConfig.lmsHref, label: "Truy cập nền tảng" }}
        secondaryAction={{ href: "/#contact", label: "Tư vấn cách triển khai" }}
        highlights={[
          { label: "Ứng dụng", value: "Bài tập, quiz, tài liệu và báo cáo" },
          { label: "Thiết bị", value: "Điện thoại, tablet, laptop" },
          { label: "Giá trị", value: "Giữ nhịp học đều ngoài giờ học trực tiếp" },
        ]}
      />
      <SurfaceCards items={platformSignals} />
      <PlatformShowcase />
      <DocumentShowcase />
      <CtaBanner
        title="Muốn kết hợp lớp học trực tiếp với theo dõi tiến độ trên LMS?"
        description="Đăng ký tư vấn để xác định chương trình phù hợp và cách phụ huynh có thể theo dõi quá trình học của con."
        primaryAction={{ href: "/#contact", label: "Liên hệ tư vấn" }}
        secondaryAction={{ href: "/chuong-trinh-hoc/", label: "Xem chương trình học" }}
      />
      <Footer />
    </main>
  )
}

function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header currentPath="/ve-thay-long/" />
      <PageHero
        eyebrow="Về Thầy Long"
        title="Hồ sơ giáo viên, triết lý giảng dạy và lý do phụ huynh tại Rạch Giá lựa chọn đồng hành lâu dài."
        description="Trang giới thiệu tập trung vào uy tín chuyên môn, cách tổ chức lớp học và triết lý giúp học sinh hiểu sâu bản chất thay vì học mẹo ngắn hạn."
        primaryAction={{ href: "/#contact", label: "Đăng ký học thử" }}
        secondaryAction={{ href: "/blog/cach-giup-con-hoc-toan-hieu-ban-chat/", label: "Đọc bài dành cho phụ huynh" }}
        highlights={[
          { label: "Kinh nghiệm", value: "40+ năm giảng dạy môn Toán" },
          { label: "Địa phương", value: "Rạch Giá, Kiên Giang" },
          { label: "Phương pháp", value: "Hiểu bản chất, luyện tập có hệ thống" },
        ]}
      />
      <SurfaceCards items={aboutSignals} />
      <TeacherProfile />
      <ValueProposition />
      <Results />
      <Testimonials />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  )
}

function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-base">
      <Header currentPath="/blog/" />
      <PageHero
        eyebrow="Blog học Toán"
        title="Bài viết về cách học Toán đúng cách, theo lộ trình và có hệ thống."
        description="Blog tập trung vào nội dung Toán học và việc học Toán — luyện thi vào 10, ôn THPT, thi chuyên, phương pháp học và cách phụ huynh đồng hành đúng cách."
        primaryAction={{ href: "/#contact", label: "Nhận tư vấn học thử" }}
        secondaryAction={{ href: "/chuong-trinh-hoc/", label: "Xem chương trình học" }}
        highlights={[
          { label: "Bài viết", value: `${blogPosts.length} bài về Toán & việc học Toán` },
          { label: "Trọng tâm", value: "Lộ trình, luyện thi, sửa lỗi sai" },
          { label: "Đối tượng", value: "Phụ huynh, học sinh THCS & THPT" },
        ]}
      />
      <FeaturedPost />
      <BlogGrid excludeFeatured />
      <CtaBanner
        title="Muốn tìm đúng bài viết Toán phù hợp với giai đoạn học hiện tại?"
        description="Từ blog, phụ huynh và học sinh có thể đi tiếp sang chương trình học, học thử hoặc xem cách EduSmart LMS hỗ trợ việc ôn tập ngoài giờ lên lớp."
        primaryAction={{ href: "/chuong-trinh-hoc/", label: "Xem chương trình học" }}
        secondaryAction={{ href: "/#contact", label: "Đăng ký học thử" }}
      />
      <Footer />
    </main>
  )
}

function BlogPostPage({ slug }) {
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return <BlogIndexPage />
  }

  return (
    <main className="min-h-screen bg-base">
      <Header currentPath={`/blog/${slug}/`} />

      {/* Article header */}
      <section className="bg-base" style={{ padding: "64px 0 48px" }}>
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Trang chủ", path: "/" },
              { name: "Blog", path: "/blog/" },
              { name: post.title },
            ]}
          />
          <div
            className="eyebrow mt-9"
            style={{ color: "var(--color-accent-mid)" }}
          >
            {post.category}
          </div>
          <h1
            className="font-head"
            style={{
              fontSize: "clamp(36px, 4.6vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "16px 0 24px",
              textWrap: "balance",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--color-body)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            {post.description}
          </p>

          {/* Meta strip */}
          <div
            className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-4"
            style={{
              borderTop: "1px solid var(--color-rule)",
              borderBottom: "1px solid var(--color-rule)",
              padding: "20px 0",
            }}
          >
            {[
              {
                label: "Tác giả",
                value: (
                  <a
                    href="/ve-thay-long/"
                    className="no-underline transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-ink)" }}
                  >
                    Thầy Nguyễn Hữu Long
                  </a>
                ),
              },
              { label: "Đối tượng", value: post.audience },
              { label: "Thời lượng", value: post.readingTime },
              {
                label: "Cập nhật",
                value: <time dateTime={post.updatedAt}>{post.updatedAt}</time>,
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="font-mono mb-1.5 text-[11px] uppercase"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.16em" }}
                >
                  {item.label}
                </div>
                <div
                  className="font-head"
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull-out: in-this-article summary */}
      <section className="bg-tint" style={{ padding: "48px 0" }}>
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <div
            className="eyebrow mb-4"
            style={{ color: "var(--color-accent-mid)" }}
          >
            Trong bài viết
          </div>
          <p
            className="font-head italic"
            style={{
              fontSize: 22,
              lineHeight: 1.5,
              color: "var(--color-ink)",
              margin: "0 0 24px",
              letterSpacing: "-0.005em",
              maxWidth: 720,
            }}
          >
            “{post.heroNote}”
          </p>
          <ul className="m-0 grid gap-3 p-0 sm:grid-cols-2" style={{ listStyle: "none" }}>
            {post.summaryPoints.map((point) => (
              <li
                key={point}
                className="grid grid-cols-[auto_1fr] items-start gap-3"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-accent-deep)" }}
                />
                <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-body)" }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-base" style={{ padding: "64px 0 80px" }}>
        <div className="mx-auto max-w-[720px] px-6 lg:px-8">
          {post.sections.map((section, idx) => (
            <article
              key={section.title}
              style={{
                paddingTop: idx === 0 ? 0 : 40,
                marginTop: idx === 0 ? 0 : 40,
                borderTop: idx === 0 ? "none" : "1px solid var(--color-rule)",
              }}
            >
              <div
                className="font-mono mb-3 text-[11px] uppercase"
                style={{ color: "var(--color-muted)", letterSpacing: "0.16em" }}
              >
                {String(idx + 1).padStart(2, "0")} · {post.category}
              </div>
              <h2
                className="font-head"
                style={{
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.018em",
                  color: "var(--color-ink)",
                  margin: "0 0 20px",
                  textWrap: "balance",
                }}
              >
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--color-body)",
                    margin: "0 0 16px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul
                  className="m-0 mt-4 list-none p-0"
                  style={{ borderLeft: "2px solid var(--color-accent-deep)" }}
                >
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        padding: "10px 0 10px 18px",
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: "var(--color-body)",
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title={post.cta.title}
        description={post.cta.description}
        primaryAction={{ href: post.cta.primaryHref, label: post.cta.primaryLabel }}
        secondaryAction={{ href: "/#contact", label: "Đăng ký học thử" }}
      />

      {/* Related posts */}
      <section className="bg-base" style={{ padding: "80px 0 24px" }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-3">Đọc tiếp</div>
              <h2 className="h-section m-0">Bài viết liên quan</h2>
            </div>
            <a
              href="/blog/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold no-underline transition-opacity hover:opacity-70"
              style={{ color: "var(--color-ink)" }}
            >
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <BlogGrid currentSlug={post.slug} />
      <Footer />
    </main>
  )
}

function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header currentPath="/chinh-sach-bao-mat/" />
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-slate-950">Trang chủ</a></li>
                <li className="flex items-center gap-2"><ChevronRight className="h-4 w-4 text-slate-300" /><span className="font-medium text-slate-700">Chính sách bảo mật</span></li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Chính sách bảo mật</h1>
            <p className="mt-4 text-sm text-slate-500">Cập nhật lần cuối: 22 tháng 3, 2026</p>

            <div className="article-content mt-10">
              <h2>1. Thu thập thông tin cá nhân</h2>
              <p>Khi quý phụ huynh hoặc học sinh điền vào biểu mẫu liên hệ trên trang web này, chúng tôi thu thập các thông tin sau: họ tên, số điện thoại và khối lớp học. Thông tin này chỉ được sử dụng để liên hệ tư vấn và sắp xếp lịch học.</p>
              <p>Chúng tôi không yêu cầu địa chỉ email hoặc thông tin tài chính qua biểu mẫu này.</p>

              <h2>2. Mục đích sử dụng thông tin</h2>
              <p>Thông tin thu thập được sử dụng với mục đích duy nhất là liên hệ lại để tư vấn chương trình học phù hợp và thông báo lịch học thử. Chúng tôi không sử dụng thông tin này cho mục đích tiếp thị bên thứ ba.</p>

              <h2>3. Bảo vệ thông tin cá nhân</h2>
              <p>Chúng tôi cam kết không chia sẻ, bán hoặc trao đổi thông tin cá nhân của quý phụ huynh và học sinh với bất kỳ bên thứ ba nào, trừ khi có yêu cầu của cơ quan pháp luật có thẩm quyền.</p>
              <p>Thông tin cá nhân được lưu giữ an toàn và chỉ những người có thẩm quyền trong trung tâm mới có quyền truy cập.</p>

              <h2>4. Quyền của chủ thể dữ liệu</h2>
              <p>Theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân, quý phụ huynh và học sinh có quyền:</p>
              <ul>
                <li>Yêu cầu xem lại thông tin cá nhân mà chúng tôi đang lưu giữ</li>
                <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
                <li>Yêu cầu xóa thông tin cá nhân bất kỳ lúc nào</li>
              </ul>

              <h2>5. Cookie và công nghệ theo dõi</h2>
              <p>Trang web này có thể sử dụng Google Analytics để phân tích lượng truy cập nhằm cải thiện nội dung và trải nghiệm người dùng. Dữ liệu phân tích được thu thập ở dạng tổng hợp và ẩn danh, không gắn với thông tin cá nhân cụ thể.</p>

              <h2>6. Liên hệ về bảo mật dữ liệu</h2>
              <p>Nếu có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến chính sách bảo mật này, vui lòng liên hệ trực tiếp qua số điện thoại <strong>0919 414 006</strong> hoặc địa chỉ lớp học tại Hẻm 1, Đường Nguyễn Tuân, TP. Rạch Giá, Tỉnh Kiên Giang.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export function getStaticPages() {
  return staticPages
}

export function getPageComponent(pageId, pageProps = {}) {
  switch (pageId) {
    case "home":
      return App
    case "programs":
      return ProgramsPage
    case "platform":
      return PlatformPage
    case "about":
      return AboutPage
    case "blog-index":
      return BlogIndexPage
    case "blog-post":
      return function BlogPostRoute() {
        return <BlogPostPage slug={pageProps.slug} />
      }
    case "privacy":
      return PrivacyPage
    default:
      return App
  }
}

export function getPageMetadata(pageId, pageProps = {}) {
  switch (pageId) {
    case "home":
      return createMetadata({
        title: "Dạy Toán Thầy Long Rạch Giá | Dạy thêm Toán, luyện thi vào 10 và THPT",
        description:
          "Trung tâm Dạy Toán Thầy Long tại Rạch Giá, Kiên Giang. Dạy thêm Toán lớp 6-12, luyện thi vào 10, ôn THPT và theo dõi tiến độ học tập qua EduSmart LMS.",
        path: "/",
        keywords: [
          "dạy toán rạch giá",
          "dạy thêm toán ở rạch giá",
          "dạy thêm toán cấp 2 rạch giá",
          "dạy thêm toán cấp 3 rạch giá",
          "luyện thi vào 10 rạch giá",
          "ôn thi thpt toán rạch giá",
          "gia sư toán kiên giang",
        ],
        ogImage: absoluteUrl("/room1.jpeg"),
        ogImageAlt: "Lớp học Toán Thầy Long tại Rạch Giá, Kiên Giang",
        structuredData: [organizationSchema(), websiteSchema(), personSchema(), studyProgramsSchema()],
      })
    case "programs":
      return createMetadata({
        title: "Chương trình học Toán tại Rạch Giá | Lộ trình lớp 6-12 và luyện thi",
        description:
          "Trang chương trình học trình bày rõ lộ trình dạy Toán lớp 6-12, luyện thi vào 10 và ôn THPT tại Rạch Giá với lớp nhỏ và theo dõi tiến độ sát.",
        path: "/chuong-trinh-hoc/",
        keywords: [
          "chương trình học toán rạch giá",
          "dạy toán lớp 6 rạch giá",
          "dạy toán lớp 9 rạch giá",
          "dạy toán lớp 12 rạch giá",
          "luyện thi vào 10 kiên giang",
          "ôn thi toán thpt rạch giá",
        ],
        ogImage: absoluteUrl("/room2.jpeg"),
        ogImageAlt: "Không gian học tập tại trung tâm Dạy Toán Thầy Long",
        structuredData: [
          organizationSchema(),
          studyProgramsSchema(),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Chương trình học", path: "/chuong-trinh-hoc/" },
          ]),
        ],
      })
    case "platform":
      return createMetadata({
        title: "EduSmart LMS | Nền tảng hỗ trợ học Toán và theo dõi tiến độ",
        description:
          "Giới thiệu EduSmart LMS, nền tảng hỗ trợ học Toán cho học sinh tại Rạch Giá với quiz, tài liệu, kết quả và báo cáo tiến độ tập trung.",
        path: "/nen-tang-lms/",
        keywords: [
          "lms học toán",
          "nền tảng học toán online rạch giá",
          "edusmart lms",
        ],
        ogImage: absoluteUrl("/screenshots/ss-dashboard.webp"),
        ogImageAlt: "Dashboard EduSmart LMS theo dõi bài tập và tiến độ học Toán",
        structuredData: [
          organizationSchema(),
          lmsApplicationSchema(),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "EduSmart LMS", path: "/nen-tang-lms/" },
          ]),
        ],
      })
    case "about":
      return createMetadata({
        title: "Về Thầy Long | Giáo viên dạy Toán tại Rạch Giá, Kiên Giang",
        description:
          "Trang giới thiệu hồ sơ giáo viên, triết lý giảng dạy và cách trung tâm dạy Toán Thầy Long tổ chức lớp học tại Rạch Giá.",
        path: "/ve-thay-long/",
        keywords: [
          "thầy long rạch giá",
          "giáo viên dạy toán kiên giang",
          "trung tâm toán rạch giá",
        ],
        ogImage: absoluteUrl("/potrait.jpeg"),
        ogImageAlt: "Chân dung Thầy Long, giáo viên dạy Toán tại Rạch Giá",
        structuredData: [
          organizationSchema(),
          personSchema(),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Về Thầy Long",
            url: absoluteUrl("/ve-thay-long/"),
            description: "Trang giới thiệu hồ sơ giáo viên và triết lý giảng dạy của Thầy Nguyễn Hữu Long tại Rạch Giá.",
            about: { "@id": `${siteConfig.baseUrl}/#teacher` },
          },
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Về Thầy Long", path: "/ve-thay-long/" },
          ]),
        ],
      })
    case "blog-index":
      return createMetadata({
        title: "Blog học Toán tại Rạch Giá | Kiến thức, luyện thi và phương pháp học",
        description:
          "Blog học Toán dành cho phụ huynh và học sinh tại Rạch Giá với bài viết về luyện thi vào 10, ôn THPT, phương pháp học và đồng hành cùng con.",
        path: "/blog/",
        keywords: [
          "blog học toán",
          "kinh nghiệm học toán rạch giá",
          "đề thi vào 10 toán kiên giang",
          "phương pháp học toán hiệu quả",
        ],
        ogImage: absoluteUrl("/room1.jpeg"),
        ogImageAlt: "Không gian học Toán và tư vấn tại Dạy Toán Thầy Long",
        structuredData: [
          organizationSchema(),
          websiteSchema(),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${siteConfig.name} Blog`,
            url: absoluteUrl("/blog/"),
            description: "Blog chia sẻ phương pháp học Toán, kinh nghiệm thi và lộ trình ôn tập.",
          },
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Blog", path: "/blog/" },
          ]),
        ],
      })
    case "blog-post": {
      const post = getBlogPostBySlug(pageProps.slug)
      if (!post) {
        return getPageMetadata("blog-index")
      }

      return createMetadata({
        title: `${post.title} | ${siteConfig.name}`,
        description: post.description,
        path: `/blog/${post.slug}/`,
        keywords: post.keywords,
        type: "article",
        ogImage: absoluteUrl("/room1.jpeg"),
        ogImageAlt: post.title,
        structuredData: [
          organizationSchema(),
          blogPostSchema(post),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
        ],
        article: {
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          section: post.category,
          tags: post.keywords,
        },
      })
    }
    case "privacy":
      return createMetadata({
        title: "Chính sách bảo mật | Dạy Toán Thầy Long Rạch Giá",
        description:
          "Chính sách bảo mật của Dạy Toán Thầy Long tại Rạch Giá, Kiên Giang — cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của phụ huynh và học sinh.",
        path: "/chinh-sach-bao-mat/",
        keywords: ["chính sách bảo mật", "bảo vệ dữ liệu cá nhân"],
        structuredData: [
          organizationSchema(),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Chính sách bảo mật", path: "/chinh-sach-bao-mat/" },
          ]),
        ],
      })
    default:
      return getPageMetadata("home")
  }
}
