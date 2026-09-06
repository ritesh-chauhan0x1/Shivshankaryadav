import { Footer4Col } from "@/components/ui/footer-column";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-foreground font-sans antialiased">
      <Navigation />
      <div className="h-20" aria-hidden="true" />

      {/* Hero Section */}
      <section className="w-full max-w-[1180px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
              <img
                src="/assets/images/shiv/shiv-main.jpeg"
                alt="Shiv Shankar Yadav"
                className="h-[520px] w-full object-cover object-[50%_28%] transition-transform duration-500 hover:scale-1025"
              />
            </div>
            <p className="mt-5 p-4 bg-white border border-gray-200 rounded-xl text-gray-500 text-sm leading-relaxed">
              Reach out anytime.
              <a href="mailto:shivyadav0344@gmail.com" className="block mt-1 text-foreground font-serif text-lg font-bold no-underline hover:text-[#d97745]">
                shivyadav0344@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-extrabold tracking-[.14em] uppercase text-[#d97745]">
              About Shiv
            </p>
            <h1 className="mb-4 text-[2.85rem] font-bold tracking-[-.04em] leading-[1.08] font-serif">
              Curious about how technology can create something meaningful
            </h1>
            <div className="w-[36px] h-[3px] mb-5 bg-[#d97745] rounded-full" aria-hidden="true" />
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              Shiv Shankar Yadav is a Computer Science and Engineering professional with interests spanning software development, web development, entrepreneurship, finance, and creative technology. His journey combines a strong technical foundation with business, stock trading, market analysis, and modern digital experiences.
            </p>
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              He enjoys exploring how technology can move beyond code and become something people can actually use, experience, and connect with — from software and machine-learning projects to web development, business ventures, and immersive 3D websites.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="w-full max-w-[1180px] mx-auto px-6 md:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <p className="mb-3 text-[11px] font-extrabold tracking-[.14em] uppercase text-[#d97745]">
              How he thinks
            </p>
            <h2 className="mb-4 text-[2.85rem] font-bold tracking-[-.04em] leading-[1.08] font-serif">
              Building, learning, and still figuring it out
            </h2>
            <div className="w-[36px] h-[3px] mb-5 bg-[#d97745] rounded-full" aria-hidden="true" />
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              Shiv&apos;s interests sit at the intersection of technology, entrepreneurship, finance, and creativity. His technical foundation includes Java, C, Python, SQL, Java Swing, and TensorFlow, while his broader interests include web design, blogging, stock trading, long-term investment, market analysis, and leadership.
            </p>
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              Rather than limiting himself to one area, he continues to explore different sides of technology and business — from software and ML development to web development, entrepreneurship, and creative digital experiences.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/shiv-shankar-yadav-71b2a325/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold tracking-[.06em] uppercase text-foreground no-underline hover:border-[#d97745] hover:text-[#d97745] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3M20.45 13.4c0-3.47-1.86-5.08-4.34-5.08a3.76 3.76 0 0 0-3.39 1.87V8.5H9.35V20h3.37v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.38z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/shivyadav-error404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold tracking-[.06em] uppercase text-foreground no-underline hover:border-[#d97745] hover:text-[#d97745] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.53 9.53 0 0 1 12 6.46c.85 0 1.7.11 2.5.34 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.95.36.31.68.9.68 1.81v2.68c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.instagram.com/shiv_____yadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold tracking-[.06em] uppercase text-foreground no-underline hover:border-[#d97745] hover:text-[#d97745] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2m0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
              <img
                src="/assets/images/shiv/shiv-second.jpeg"
                alt="Shiv Shankar Yadav"
                className="h-[460px] w-full object-cover object-[50%_38%] transition-transform duration-500 hover:scale-1025"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-[1180px] mx-auto px-6 md:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
              <img
                src="/assets/images/shiv/shiv-01.jpeg"
                alt="Shiv Shankar Yadav"
                className="h-[500px] w-full object-cover object-[50%_42%] transition-transform duration-500 hover:scale-1025"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-extrabold tracking-[.14em] uppercase text-[#d97745]">
              Practical work
            </p>
            <h2 className="mb-4 text-[2.85rem] font-bold tracking-[-.04em] leading-[1.08] font-serif">
              Building things that actually get used
            </h2>
            <div className="w-[36px] h-[3px] mb-5 bg-[#d97745] rounded-full" aria-hidden="true" />
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              Shiv has worked across different kinds of projects and professional environments — serving as Co-Founder and CFO at Himstack Pvt Ltd, working as a Web Development Intern at Load Lift Pvt Ltd, and creating a 3D website experience for cinematographer Deepak Visual.
            </p>
            <p className="mb-3.5 text-[15.5px] leading-[1.72] text-[#64748b] max-w-[640px]">
              His technical project work also includes a Bone Fracture Detection system developed using Logistic Regression, Python, NumPy, Pandas, image preprocessing, and Flask. The project achieved 88% accuracy and included a web application for real-time X-ray image classification.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5" aria-label="Technologies and practices">
              <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">Python</span>
              <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">Machine Learning</span>
              <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">Flask</span>
              <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">Web Development</span>
              <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[10.5px] font-bold tracking-[.07em] uppercase text-[#64748b]">3D Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* Perspective Section */}
      <section className="w-full max-w-[1180px] mx-auto px-6 md:px-8 py-16 border-t border-gray-200">
        <div className="max-w-[720px]">
          <p className="mb-3 text-[11px] font-extrabold tracking-[.14em] uppercase text-[#d97745]">
            Perspective
          </p>
          <h2 className="mb-4 text-[2.4rem] font-bold tracking-[-.04em] leading-[1.08] font-serif">
            Beyond code
          </h2>
          <div className="w-[36px] h-[3px] mb-5 bg-[#d97745] rounded-full" aria-hidden="true" />
          <p className="text-[15px] leading-[1.72] text-[#64748b] max-w-[720px]">
            For Shiv, technology is only one part of the picture. His interest in stock trading, market analysis, long-term investment, business, and leadership adds another dimension to his technical background. This combination allows him to look at problems not only from a development perspective, but also through the lens of business, finance, and practical impact.
          </p>
        </div>
      </section>

      <Footer4Col />
    </div>
  );
}
