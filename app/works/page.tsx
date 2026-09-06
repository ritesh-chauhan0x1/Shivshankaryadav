"use client";

import { useState } from "react";
import { Footer4Col } from "@/components/ui/footer-column";
import Navigation from "@/components/Navigation";

const filterOptions = ["ALL", "EXPERIENCE", "BUSINESS", "WEB", "TECH", "CREATIVE", "PROJECTS"];

const caseStudies = [
  {
    id: 1,
    category: "BUSINESS / ENTREPRENEURSHIP",
    name: "HIMSTACK",
    role: "CO-FOUNDER & CFO",
    company: "HIMSTACK PVT LTD · himstack.com",
    description: "I am a Co-Founder and CFO at Himstack Pvt Ltd, where I work at the intersection of technology, entrepreneurship, business operations, and financial responsibility. This role has given me hands-on exposure to building a technology venture beyond just writing code.",
    tags: ["ENTREPRENEURSHIP", "BUSINESS", "FINANCE", "TECHNOLOGY"],
    link: "https://himstack.com",
    filter: "business",
    image: "/logoHimstack.png",
    visualClass: "himstack-visual",
  },
  {
    id: 2,
    category: "EXPERIENCE / WEB DEVELOPMENT",
    name: "LOAD LIFT",
    role: "WEB DEVELOPMENT INTERN",
    company: "LOAD LIFT PVT LTD · loadlift.com.np",
    description: "I worked as a Web Development Intern at Load Lift Pvt Ltd, where I got practical exposure to building for the web in a professional team. It helped me connect what I learned in my Computer Science studies to real-world projects.",
    tags: ["WEB DEVELOPMENT", "FRONTEND", "INTERNSHIP", "DIGITAL"],
    link: "https://loadlift.com.np",
    filter: "experience web",
  },
  {
    id: 3,
    category: "CREATIVE TECHNOLOGY",
    name: "DEEPAK VISUALS",
    role: "3D WEBSITE DEVELOPMENT",
    company: "Deepak Visual · Cinematographer",
    description: "I designed and built a 3D website experience for cinematographer Deepak Visual — blending web development, immersive interaction, and visual storytelling to create a site that feels more like an experience than a traditional layout.",
    tags: ["3D WEB", "WEB DEVELOPMENT", "CREATIVE TECHNOLOGY", "INTERACTIVE DESIGN"],
    link: "https://deepakvisuals.com",
    filter: "creative web",
    isDark: true,
  },
  {
    id: 4,
    category: "EXPERIENCE",
    name: "NATIONAL MODEL ACADEMY",
    role: "JUNIOR ADMINISTRATOR",
    company: "",
    description: "I worked as a Junior Administrator at National Model Academy from May 2024 to July 2024. I analyzed information from documents and entered it into ERP software, scheduled timetables, coordinated with teachers, motivated students to join extracurricular activities, and helped engage students in a more technological environment.",
    tags: [],
    link: "",
    filter: "experience",
    date: "05.2024 — 07.2024",
    dateSmall: "May 2024 — July 2024",
  },
  {
    id: 5,
    category: "TECH / MACHINE LEARNING",
    name: "BONE FRACTURE DETECTION",
    role: "",
    company: "",
    description: "I built a bone fracture detection system using Logistic Regression. I used Python, NumPy, and Pandas for data handling, applied image preprocessing like grayscale conversion, resizing, and normalization, and built a Flask web app for real-time X-ray classification.",
    tags: ["PYTHON", "NUMPY", "PANDAS", "LOGISTIC REGRESSION", "FLASK", "IMAGE PROCESSING"],
    link: "",
    filter: "tech projects",
    accuracy: "88%",
  },
];

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-foreground font-sans antialiased">
      <Navigation />

      {/* Hero Section */}
      <section className="work-hero relative overflow-hidden">
        <div className="work-shell pt-[124px] pb-[48px]">
          <p className="work-eyebrow">SELECTED WORK</p>
          <h1 className="work-title">WORK, EXPERIENCE &amp; THINGS I&apos;VE BUILT</h1>
          <p className="work-intro mt-4 max-w-[68ch]">
            My professional journey combines technology, entrepreneurship, web development, machine learning, business, and creative digital experiences. From working within organizations to building products and immersive websites, each experience has contributed to how I approach technology and problem solving.
          </p>
          <p className="work-scroll mt-5 inline-flex items-center gap-2 pt-3.5 border-t border-gray-200 text-[11px] font-extrabold tracking-[.14em] uppercase text-foreground opacity-85">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <nav className="work-filter-wrap sticky top-0 z-12 py-4 border-b border-gray-200 bg-[#fcfbf9]/96 backdrop-blur-sm" aria-label="Filter selected work">
        <div className="work-shell work-filters flex flex-wrap gap-2 items-center">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              data-filter={filter.toLowerCase()}
              aria-pressed={activeFilter === filter.toLowerCase()}
              onClick={() => handleFilter(filter.toLowerCase())}
              className={`work-filter px-3.5 py-2 border rounded-full text-[11px] font-extrabold tracking-[.1em] uppercase transition-all ${
                activeFilter === filter.toLowerCase()
                  ? "bg-foreground text-white border-foreground"
                  : "bg-transparent text-[#475569] border-transparent hover:bg-white hover:border-gray-200 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </nav>

      {/* Case Studies */}
      <article className="work-case py-[56px] border-b border-gray-200" data-work="business">
        <div className="work-shell work-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="work-copy max-w-[600px]">
            <p className="work-category mb-2.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase text-[#64748b]">
              {caseStudies[0].category}
            </p>
            <h2 className="work-name mb-0 text-[3.2rem] font-serif font-weight-400 tracking-[-.04em] leading-[.92]">
              HIMSTACK
            </h2>
            <p className="work-role mt-3 mb-1 text-[10.5px] font-extrabold tracking-[.13em] uppercase text-[#7656c7]">
              {caseStudies[0].role}
            </p>
            <p className="work-company mb-3 text-[13.5px] font-semibold">
              {caseStudies[0].company}
            </p>
            <p className="mb-0 text-[15.2px] leading-[1.78] text-[#475569] font-weight-400">
              {caseStudies[0].description}
            </p>
            <div className="work-tags flex flex-wrap gap-2 mt-4">
              {caseStudies[0].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">
                  {tag}
                </span>
              ))}
            </div>
            <a className="work-link inline-flex items-center gap-1.5 mt-4.5 pb-0.5 border-b-[1px] border-[#7656c7] text-[11px] font-extrabold tracking-[.1em] no-underline" href={caseStudies[0].link} target="_blank" rel="noopener noreferrer">
              VISIT HIMSTACK <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="visual-frame himstack-visual bg-[#0f172a] rounded-2xl min-h-[420px] overflow-hidden border border-gray-200 shadow-lg grid place-items-center">
            <img className="himstack-logo w-[min(48%,240px)] p-5 bg-white rounded-xl border border-white/15" src="/logoHimstack.png" alt="Himstack logo" />
            <span className="himstack-label absolute bottom-3.5 left-3.5 right-3.5 flex justify-between text-[10px] font-extrabold tracking-[.12em] uppercase text-white/85">
              <span>CO-FOUNDER &amp; CFO</span>
            </span>
          </div>
        </div>
      </article>

      {/* Load Lift */}
      <article className="work-case py-[56px] border-b border-gray-200" data-work="experience web">
        <div className="work-shell work-grid work-grid--reverse grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="visual-frame browser-visual rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="browser-window w-full min-h-[380px] border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col">
              <div className="browser-bar h-9 flex items-center gap-1.5 px-3 border-b border-gray-200 bg-gray-100">
                <span className="w-2 h-2 rounded-full bg-[#f87171]" />
                <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                <span className="w-2 h-2 rounded-full bg-[#34d399]" />
              </div>
              <div className="browser-screen flex-1 grid place-items-center text-center p-6">
                <div>
                  <img className="w-[110px] mb-3.5 mx-auto" src="/loadlift_logo.png" alt="Load Lift logo" />
                  <strong className="block font-serif text-[2.2rem] font-weight-400 tracking-[-.04em] leading-[.9]">
                    LOAD<br />LIFT
                  </strong>
                  <small className="block mt-2 text-[10px] font-extrabold tracking-[.14em] text-[#64748b]">
                    WEB DEVELOPMENT
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="work-copy max-w-[600px]">
            <p className="work-category mb-2.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase text-[#64748b]">
              {caseStudies[1].category}
            </p>
            <h2 className="work-name mb-0 text-[3.2rem] font-serif font-weight-400 tracking-[-.04em] leading-[.92]">
              LOAD LIFT
            </h2>
            <p className="work-role mt-3 mb-1 text-[10.5px] font-extrabold tracking-[.13em] uppercase text-[#7656c7]">
              {caseStudies[1].role}
            </p>
            <p className="work-company mb-3 text-[13.5px] font-semibold">
              {caseStudies[1].company}
            </p>
            <p className="mb-0 text-[15.2px] leading-[1.78] text-[#475569] font-weight-400">
              {caseStudies[1].description}
            </p>
            <div className="work-tags flex flex-wrap gap-2 mt-4">
              {caseStudies[1].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">
                  {tag}
                </span>
              ))}
            </div>
            <a className="work-link inline-flex items-center gap-1.5 mt-4.5 pb-0.5 border-b-[1px] border-[#7656c7] text-[11px] font-extrabold tracking-[.1em] no-underline" href={caseStudies[1].link} target="_blank" rel="noopener noreferrer">
              VISIT LOAD LIFT <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* Deepak Visuals */}
      <article className="deepak-case py-[56px] border-b border-gray-200 bg-[#0b1220] text-[#e2e8f0]" data-work="creative web">
        <div className="work-shell work-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="work-copy max-w-[600px]">
            <p className="work-category mb-2.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase text-[#94a3b8]">
              {caseStudies[2].category}
            </p>
            <h2 className="work-name mb-0 text-[3.2rem] font-serif font-weight-400 tracking-[-.04em] leading-[.92] text-white">
              DEEPAK<br />VISUALS
            </h2>
            <p className="work-role mt-3 mb-1 text-[10.5px] font-extrabold tracking-[.13em] uppercase text-[#b794ff]">
              {caseStudies[2].role}
            </p>
            <p className="work-company mb-3 text-[13.5px] font-semibold text-[#cbd5e1]">
              {caseStudies[2].company}
            </p>
            <p className="mb-0 text-[15.2px] leading-[1.78] text-[#94a3b8]">
              {caseStudies[2].description}
            </p>
            <div className="work-tags flex flex-wrap gap-2 mt-4">
              {caseStudies[2].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/12 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#cbd5e1]">
                  {tag}
                </span>
              ))}
            </div>
            <a className="work-link inline-flex items-center gap-1.5 mt-4.5 pb-0.5 border-b-[1px] border-[#b794ff] text-white text-[11px] font-extrabold tracking-[.1em] no-underline" href={caseStudies[2].link} target="_blank" rel="noopener noreferrer">
              VIEW DEEPAK VISUALS <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="visual-frame deepak-visual bg-gradient-to-br from-[#111c33] to-[#0b1220] min-h-[440px] rounded-2xl border border-white/12 grid place-items-center text-center p-6">
            <div className="deepak-type text-white font-serif text-[3.2rem] font-weight-400 tracking-[-.04em] leading-[.9]">
              3D / VISUAL /<br />EXPERIENCE
              <span className="block mt-2.5 text-[10px] font-extrabold tracking-[.16em] text-white/65 font-sans uppercase">
                Immersive · Cinematic · Interactive
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* National Model Academy */}
      <article className="academy-case py-[48px] border-b border-gray-200 bg-white" data-work="experience">
        <div className="work-shell academy-layout grid grid-cols-[160px_1fr] gap-8 items-start max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="academy-date text-[#7656c7] font-serif">
            05.2024
            <br />
            —
            <br />
            07.2024
            <small className="block mt-1.5 text-[10px] font-extrabold tracking-[.12em] uppercase text-[#475569]">
              May 2024 — July 2024
            </small>
          </div>
          <div className="academy-copy">
            <p className="work-category mb-2.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase text-[#64748b]">
              {caseStudies[3].category}
            </p>
            <h2 className="mb-2.5 font-serif text-[2.2rem] font-weight-400 tracking-[-.04em] leading-[.95]">
              NATIONAL MODEL ACADEMY
            </h2>
            <p className="work-role mb-3 text-[10.5px] font-extrabold tracking-[.13em] uppercase text-[#7656c7]">
              {caseStudies[3].role}
            </p>
            <p className="mb-0 text-[15px] leading-[1.7] text-[#475569]">
              {caseStudies[3].description}
            </p>
          </div>
        </div>
      </article>

      {/* Bone Fracture Detection */}
      <article className="bone-case py-[56px] border-b border-gray-200 bg-[#f8fafc]" data-work="tech projects">
        <div className="work-shell bone-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="work-copy">
            <p className="work-category mb-2.5 text-[10.5px] font-extrabold tracking-[.14em] uppercase text-[#64748b]">
              {caseStudies[4].category}
            </p>
            <h2 className="work-name mb-0 text-[3.2rem] font-serif font-weight-400 tracking-[-.04em] leading-[.92]">
              BONE FRACTURE DETECTION
            </h2>
            <div className="bone-stat flex items-baseline gap-2.5 mt-3.5 mb-3.5 py-3 border-t border-b border-gray-200 max-w-[320px]">
              <strong className="font-serif text-[4rem] font-weight-400 tracking-[-.06em] leading-[.9] text-foreground">
                {caseStudies[4].accuracy}
              </strong>
              <span className="text-[10px] font-extrabold tracking-[.12em] text-[#64748b]">
                MODEL ACCURACY
              </span>
            </div>
            <p className="mb-0 text-[15.2px] leading-[1.78] text-[#475569]">
              {caseStudies[4].description}
            </p>
            <div className="work-tags flex flex-wrap gap-2 mt-4">
              {caseStudies[4].tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="visual-frame bone-visual bg-[#e2e8f0] rounded-2xl min-h-[420px] overflow-hidden border border-gray-200 shadow-lg">
            <div className="bone-visual-inner w-[80%] h-[72%] border border-[#94a3b8] rounded-xl bg-[rgba(255,255,255,.7)] grid place-items-center relative" aria-hidden="true" />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="work-cta py-[56px] pb-[72px] bg-[#fcfbf9]">
        <div className="work-shell work-cta-inner max-w-[720px] mx-auto text-center">
          <p className="work-eyebrow mb-2.5 text-[10px] font-extrabold tracking-[.18em] uppercase text-[#7656c7]">
            Start a conversation
          </p>
          <h2 className="work-heading mb-2.5 text-[2.8rem] font-serif font-weight-400 tracking-[-.04em] leading-[.88]">
            HAVE SOMETHING WORTH BUILDING?
          </h2>
          <p className="mb-0 text-[15px] leading-[1.7] text-[#475569]">
            Technology, business, creative development, or something completely new — let&apos;s start a conversation.
          </p>
          <a className="cta-link inline-flex items-center gap-2 mt-4.5 px-5 py-3 bg-foreground text-white text-[11px] font-extrabold tracking-[.1em] rounded-full no-underline" href="/contact">
            GET IN TOUCH <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <Footer4Col />
    </div>
  );
}
