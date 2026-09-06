import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const data = {
  instaLink: 'https://www.instagram.com/shiv_____yadav/',
  githubLink: 'https://github.com/shivyadav-error404',
  linkedinLink: 'https://www.linkedin.com/in/shiv-shankar-yadav-71b2a325/',
  nav: {
    home: 'index.html',
    about: 'about.html',
    education: 'education.html',
    works: 'works.html',
    contact: 'contact.html',
  },
  services: {
    webdev: 'works.html',
    webdesign: 'works.html',
    ml: 'works.html',
    business: 'works.html',
  },
  contact: {
    email: 'shivyadav0344@gmail.com',
    phone: '+977-9845789132',
    phoneHref: 'https://wa.me/9779845789132',
    address: 'London, UK',
  },
  company: {
    name: 'Shiv Shankar Yadav',
    description:
      'CS Engineer, Entrepreneur & Creative Technologist. I build web experiences, 3D websites and machine-learning projects.',
    logo: 'assets/images/logo/computer-science.svg',
  },
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
];

const quickLinks = [
  { text: 'Home', href: data.nav.home },
  { text: 'About', href: data.nav.about },
  { text: 'Education', href: data.nav.education },
  { text: 'Works', href: data.nav.works },
  { text: 'Contact', href: data.nav.contact },
];

const serviceLinks = [
  { text: 'Web Development', href: data.services.webdev },
  { text: '3D Websites', href: data.services.webdesign },
  { text: 'Machine Learning', href: data.services.ml },
  { text: 'Business & Finance', href: data.services.business },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: data.contact.phoneHref },
  { icon: MapPin, text: data.contact.address, href: undefined },
];

export function Footer4Col() {
  return (
    <footer className="bg-black text-white">
      {/* Collaboration band — replaces any newsletter/subscribe block */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-6 px-6 py-7 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-[#0f172a]">Let&apos;s collaborate</h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-slate-600">
              Open for collaboration on web development, 3D websites, machine
              learning and business-tech projects. Reach me directly — no
              newsletter, no spam, just a conversation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`mailto:${data.contact.email}`}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f172a] shadow-sm transition hover:scale-110 hover:border-[#8b7cf6] hover:bg-[#8b7cf6]/10 hover:text-[#7656c7]"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={data.instaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f172a] shadow-sm transition hover:scale-110 hover:border-[#8b7cf6] hover:bg-[#8b7cf6]/10 hover:text-[#7656c7]"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={data.contact.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f172a] shadow-sm transition hover:scale-110 hover:border-[#8b7cf6] hover:bg-[#8b7cf6]/10 hover:text-[#7656c7]"
              >
                <Phone className="size-4" />
              </a>
              <a
                href={data.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f172a] shadow-sm transition hover:scale-110 hover:border-[#8b7cf6] hover:bg-[#8b7cf6]/10 hover:text-[#7656c7]"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2.5 md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="assets/images/shiv/shiv-02.jpeg"
              alt="Shiv Shankar Yadav"
              className="h-[172px] w-[150px] rounded-2xl border border-slate-200 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-6 pb-2 pt-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-lg font-extrabold tracking-tight">
              {data.company.name}
            </span>
          </div>
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-slate-400">
            {data.company.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200"
              >
                <Icon className="size-3.5" /> {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-extrabold uppercase tracking-[.14em]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map(({ text, href }) => (
              <li key={text}>
                <a href={href} className="text-sm text-slate-400">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-extrabold uppercase tracking-[.14em]">
            What I Do
          </h4>
          <ul className="space-y-2">
            {serviceLinks.map(({ text, href }) => (
              <li key={text}>
                <a href={href} className="text-sm text-slate-400">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-extrabold uppercase tracking-[.14em]">
            Contact
          </h4>
          <ul className="space-y-2">
            {contactInfo.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-2 text-sm text-slate-400">
                <Icon className="mt-0.5 size-[15px] shrink-0 text-[#b794ff]" />
                {href ? <a href={href}>{text}</a> : <span>{text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-[1280px] flex-wrap justify-between gap-2.5 border-t border-white/10 px-6 pb-5 pt-3.5">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {data.company.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer4Col;
