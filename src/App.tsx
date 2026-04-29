import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import logo from "/assets/nexuslogohorizontal.png";

type FaqItem = { q: string; a: string };

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <Header />
      <Hero />

      <main>
        <section className="py-16 md:py-20 bg-nexus-blue/5">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-semibold text-2xl md:text-3xl text-nexus-navy">
              A simple process, clear communication, and websites that feel polished.
            </h2>
            <p className="mt-4 text-gray-600">
              Working with small businesses to create websites that are modern, easy to use, and tailored to their goals.
            </p>
          </div>
        </section>

        <Services />
        <ContactCTA />
        <Portfolio />
        <WeddingInvitations />
        <Process />
        <AboutSection />
        <Support />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const nav = (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      {[
        ["Services", "#services"],
        ["Portfolio", "#portfolio"],
        ["Wedding Invitations", "#wedding-invitations"],
        ["Process", "#process"],
        ["About", "#about"],
        ["FAQ", "#faq"],
        ["Contact", "#contact"],
        ["Support", "#support"],
      ].map(([label, href]) => (
        <li key={label}>
          <a
            className="inline-flex items-center font-medium text-white/90 hover:text-white py-2"
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <a
          className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow-card transition-transform hover:scale-[1.02]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
          }}
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-nexus-blue text-white">
      <nav className="mx-auto max-w-7xl px-6 h-28 md:h-32 flex items-center justify-between">
        <a className="flex items-center min-w-0" href="#">
          <img
            src={logo}
            alt="Nexus Web Design"
            className="h-20 md:h-24 w-auto object-contain"
          />
          <span className="sr-only">Nexus Web Design</span>
        </a>

        <div className="hidden md:block">{nav}</div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/20 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-nexus-blue/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4">{nav}</div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="w-full grid md:grid-cols-2 items-stretch">
        <div
          className="min-h-[320px] md:min-h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/desk-hero.png')" }}
          role="img"
          aria-label="Laptop workspace"
        />

        <div className="bg-[#eef7f8] px-8 py-12 md:px-16 md:py-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-nexus-navy">
              Simple, modern websites for small businesses in Sydney
            </h1>

            <p className="mt-5 text-base md:text-xl text-gray-600 leading-relaxed">
              I help small businesses create clean, easy-to-use websites that
              look professional, build trust, and attract more customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-nexus-navy bg-white border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] hover:bg-gray-50"
              >
                See Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow-card transition-transform hover:scale-[1.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                }}
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white px-4 py-2 text-nexus-blue border border-nexus-blue/10">
                Based in Sydney
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-nexus-blue border border-nexus-blue/10">
                Work directly with me
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-nexus-blue border border-nexus-blue/10">
                No obligation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const plans = [
    {
      name: "Starter Site",
      desc: "A clean 1–4 page site to get you live fast.",
      features: [
        "Homepage + up to 3 inner pages",
        "Responsive design",
        "On-page SEO basics",
        "Contact form + map",
      ],
    },
    {
      name: "Business Site",
      desc: "Deeper content, sections, and conversions.",
      features: [
        "Up to 8 pages",
        "Blog or news section",
        "Performance tuning",
        "Analytics + basic SEO",
      ],
      highlight: true,
    },
    {
      name: "Add-ons",
      desc: "Extras you can add any time.",
      features: [
        "Logo refresh & brand kit",
        "Copywriting support",
        "Booking/embed integrations",
        "Photo sourcing & edits",
      ],
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy text-center">
          Services & Packages
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`rounded-2xl border bg-white shadow-card p-6 transition-transform hover:-translate-y-1 hover:shadow-lg ${
                p.highlight ? "border-nexus-blue/40" : "border-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold text-nexus-navy">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{p.desc}</p>

              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-nexus-blue" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                }}
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 text-white"
      style={{ backgroundColor: "#0076c0" }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          No contracts. No hassle.
        </h2>
        <p className="mt-3 text-white/85">
          Start risk-free with our 15-day delivery goal and money-back guarantee.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-nexus-navy border border-white/20"
            href="tel:+61415909088"
          >
            Call 0415 909 088
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-card"
            style={{
              backgroundImage:
                "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
            }}
            href="mailto:nexuswebdesignau@gmail.com"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    {
      title: "Dandelion Psychology",
      img: "/assets/dandelion-home.png",
      desc: "Custom website design for a child and family psychology practice.",
      images: [
        "/assets/dandelion-home.png",
        "/assets/dandelion-services.png",
        "/assets/dandelion-about.png",
        "/assets/dandelion-forms.png",
        "/assets/dandelion-contactus.png",
      ],
    },
    {
      title: "Austolian Dance Academy",
      img: "/assets/austolian-home.png",
      desc: "Website for a dance academy with class information and a modern layout.",
      images: [
        "/assets/austolian-home.png",
        "/assets/austolian-classes.png",
        "/assets/austolian-services.png",
        "/assets/austolian-about.png",
        "/assets/austolian-gallery.png",
        "/assets/austolian-contactus.png",
      ],
      liveUrl: "https://austoliandance.com.au/",
    },
    {
      title: "Hearth & Grain Cafe (Concept)",
      img: "/assets/hearth-home.png",
      desc: "Concept website for a modern café brand with a warm, clean look.",
      images: [
        "/assets/hearth-home.png",
        "/assets/hearth-menu.png",
        "/assets/hearth-about.png",
        "/assets/hearth-gallery.png",
        "/assets/hearth-book.png",
        "/assets/hearth-contactus.png",
      ],
    },
    {
      title: "Evereve Boutique (Concept)",
      img: "/assets/evereve-home.png",
      desc: "E-commerce fashion concept focused on clean layouts, product filtering, and a premium shopping experience.",
      images: [
        "/assets/evereve-home.png",
        "/assets/evereve-products.png",
        "/assets/evereve-filterbar.png",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<null | (typeof items)[number]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: (typeof items)[number]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const showPrev = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section id="portfolio" className="scroll-mt-24 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-3 text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy">
              Recent Projects
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-gray-500">
              Explore a selection of live websites, client-style concepts, and design demos created to show what your website could look and feel like.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {items.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-gray-100 bg-white shadow-card overflow-hidden flex flex-col"
              >
                <div className="h-56 bg-gray-50 flex items-center justify-center p-4 border-b border-gray-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain rounded-md shadow-sm border border-gray-200 bg-white"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-nexus-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openProject(p)}
                      className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-nexus-navy border border-nexus-blue/20 bg-white hover:bg-gray-50"
                    >
                      View Project
                    </button>

                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-card"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                        }}
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          closeProject={closeProject}
          showPrev={showPrev}
          showNext={showNext}
        />
      )}
    </>
  );
}

function WeddingInvitations() {
  const items = [
    {
      title: "Minimal Elegant Wedding Website",
      img: "/assets/wedding-minimal-home.png",
      desc: "A soft, neutral wedding invitation website with RSVP, countdown, details and gallery.",
      images: [
        "/assets/wedding-minimal-home.png",
        "/assets/wedding-minimal-details.png",
        "/assets/wedding-minimal-rsvp.png",
        "/assets/wedding-minimal-gallery.png",
      ],
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "From $199",
      desc: "Perfect for a simple digital invitation.",
      features: ["One-page invitation", "Event details", "RSVP button/link", "Mobile-friendly design"],
    },
    {
      name: "Premium",
      price: "From $349",
      desc: "A fuller wedding website experience.",
      features: ["Multi-section website", "RSVP form", "Countdown", "Gallery", "Map/location details"],
      highlight: true,
    },
    {
      name: "Add-ons",
      price: "Optional extras",
      desc: "Add extra features when needed.",
      features: ["Password protection", "Guest code login", "Extra pages", "Custom styling", "Photo gallery expansion"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<null | (typeof items)[number]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: (typeof items)[number]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const showPrev = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
<section
  id="wedding-invitations"
  className="scroll-mt-24 bg-nexus-blue/5 py-16 md:py-24"
>
  <div className="mx-auto max-w-6xl px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-nexus-blue">
        Digital Invitations
      </p>

      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-nexus-navy">
        Wedding Invitation Websites
      </h2>

      <p className="mt-4 text-gray-600 leading-7">
        Beautiful digital wedding invitations with event details, RSVP,
        countdowns and photo galleries — designed to feel personal, modern and
        easy to share.
      </p>
    </div>

    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] items-start">
      <article className="rounded-3xl border border-gray-100 bg-white shadow-card overflow-hidden">
        <div className="bg-white p-5 border-b border-gray-100">
          <img
            src="/assets/wedding-minimal-home.png"
            alt="Minimal Elegant Wedding Website"
            className="w-full rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-nexus-navy">
            Minimal Elegant Wedding Website
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            A soft, neutral wedding invitation website with RSVP, countdown,
            details and gallery.
          </p>

          <button
            type="button"
            onClick={() => openProject(items[0])}
            className="mt-5 inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-nexus-navy border border-nexus-blue/20 bg-white hover:bg-gray-50"
          >
            View Invitation Demo
          </button>
        </div>
      </article>

      <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-nexus-blue">
              Wedding websites from
            </p>

            <p className="mt-1 text-4xl font-semibold text-nexus-navy">
              $199
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              Start with a simple digital invitation, then add RSVP forms,
              guest login, galleries or custom features.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-card"
            style={{
              backgroundImage:
                "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
            }}
          >
            Ask for pricing
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-5 ${
                p.highlight
                  ? "border-nexus-blue/30 bg-nexus-blue/5"
                  : "border-gray-100 bg-gray-50"
              }`}
            >
              <h4 className="font-semibold text-nexus-navy">{p.name}</h4>

              <p className="mt-2 text-lg font-semibold text-nexus-blue">
                {p.price}
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-600">
                {p.desc}
              </p>

              <ul className="mt-4 space-y-2">
                {p.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-nexus-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-gray-500">
          Final pricing depends on content, design complexity, and any extra
          features requested.
        </p>
      </div>
    </div>
  </div>
</section>

      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          closeProject={closeProject}
          showPrev={showPrev}
          showNext={showNext}
          enquiryLabel="Enquire About This"
        />
      )}
    </>
  );
}

function ProjectModal({
  selectedProject,
  currentImageIndex,
  setCurrentImageIndex,
  closeProject,
  showPrev,
  showNext,
  enquiryLabel,
}: {
  selectedProject: {
    title: string;
    desc: string;
    images: string[];
    liveUrl?: string;
  };
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  closeProject: () => void;
  showPrev: () => void;
  showNext: () => void;
  enquiryLabel?: string;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3">
      <div className="relative w-[94vw] max-w-5xl h-[86dvh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={closeProject}
          className="absolute right-3 top-3 z-30 rounded-full bg-nexus-navy px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          Close ✕
        </button>

        <div className="overflow-y-auto h-full">
          <div className="grid md:grid-cols-[1fr_320px]">
            <div className="bg-gray-100 flex items-center justify-center p-4 pt-14 md:p-6 min-h-[280px] md:min-h-[600px]">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                className="max-h-[42vh] md:max-h-[70vh] max-w-full object-contain rounded-lg border border-gray-200 bg-white shadow"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-semibold text-nexus-navy">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {selectedProject.desc}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Image {currentImageIndex + 1} of {selectedProject.images.length}
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-nexus-navy border border-gray-200 bg-white hover:bg-gray-50"
                >
                  Previous
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                  }}
                >
                  Next
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-16 overflow-hidden rounded-lg border ${
                      currentImageIndex === index
                        ? "border-nexus-blue ring-2 ring-nexus-blue/20"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                  }}
                >
                  Visit Live Site
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={closeProject}
                  className="mt-8 inline-flex w-fit items-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
                  }}
                >
                  {enquiryLabel || "Enquire About This"}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  const steps = [
    { title: "Discovery", desc: "Short call, goals, and content checklist." },
    { title: "Design", desc: "Homepage mock + brand styles for approval." },
    { title: "Build", desc: "Responsive pages, performance, basic SEO." },
    { title: "Launch", desc: "QA, training, handover, and go-live." },
  ];

  return (
    <section id="process" className="scroll-mt-24 py-16 md:py-24 bg-#0076c0">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy text-center">
          Our hassle-free process
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-card p-6 text-center"
            >
              <div className="mx-auto h-10 w-10 rounded-full bg-nexus-blue/10 text-nexus-blue grid place-items-center font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-3 font-semibold text-nexus-navy">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy">
            About Nexus
          </h2>
          <p className="mt-3 text-gray-600 leading-7">
            Hi, I’m Burcu — a Sydney-based web developer. I help small businesses create clean, simple websites without the stress of dealing with agencies or complicated tech. I focus on making your website clear, easy to use, and professional — so your customers understand your business quickly.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Fixed-price, guided process",
              "Realistic 15-day delivery goal",
              "Content & SEO basics included",
              "Training & handover at launch",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-nexus-blue" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#portfolio"
            className="mt-6 inline-flex items-center rounded-xl px-5 py-3 font-semibold text-nexus-navy border border-nexus-blue/30"
          >
            See recent work
          </a>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <p className="text-sm text-gray-600">
            “My goal is to keep things simple, communicate clearly, and focus on what actually works for your business.”
          </p>
          <div className="mt-4 text-sm text-gray-500">— Burcu</div>
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="scroll-mt-24 py-16 md:py-24 bg-nexus-blue/5">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy">
            Ongoing Support
          </h2>
          <p className="mt-3 text-gray-600">
            Want us to keep things running smoothly after launch? Choose a simple care plan.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "Security updates & backups",
              "Small content edits each month",
              "Uptime monitoring",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-nexus-blue" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-6">
          <h3 className="font-semibold text-nexus-navy">Care Plan (Monthly)</h3>
          <p className="mt-1 text-sm text-gray-600">Cancel any time, no lock-in.</p>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-nexus-navy">Basic</div>
              <div className="text-gray-600 mt-1">$79 / mo</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-nexus-navy">Plus</div>
              <div className="text-gray-600 mt-1">$129 / mo</div>
            </div>
          </div>

          <a
            href="mailto:nexuswebdesignau@gmail.com"
            className="mt-6 inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white"
            style={{
              backgroundImage:
                "linear-gradient(90deg,var(--tw-cor1),var(--tw-cor2))",
            }}
          >
            Ask about care plans
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const data: FaqItem[] = [
    {
      q: "How fast can you deliver?",
      a: "We aim for a 15-day delivery for most small sites once content is ready.",
    },
    {
      q: "Do you do fixed price?",
      a: "Yes—clear, fixed packages so there are no surprises.",
    },
    {
      q: "Is SEO included?",
      a: "We include on-page SEO basics: titles, meta, alt tags, performance.",
    },
    {
      q: "What do you need from me?",
      a: "Your logo, brand colours, 3–6 key pages of copy, and any photos you have.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-nexus-navy text-center">
          FAQ
        </h2>

        <div className="mt-8 divide-y divide-gray-200 border border-gray-100 rounded-2xl bg-white shadow-card">
          {data.map((item, idx) => (
            <FaqRow key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium text-nexus-navy">{item.q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && <div className="px-5 pb-4 text-sm text-gray-600">{item.a}</div>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A3D66] text-white/85">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-white font-semibold">Nexus Web Design</p>
          <p className="mt-2 text-sm">Sydney, Australia</p>
        </div>

        <div className="text-sm space-y-2">
          <a href="#services" className="block hover:text-white">Services</a>
          <a href="#portfolio" className="block hover:text-white">Portfolio</a>
          <a href="#wedding-invitations" className="block hover:text-white">Wedding Invitations</a>
          <a href="#process" className="block hover:text-white">Process</a>
          <a href="#contact" className="block hover:text-white">Contact</a>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Nexus Web Design
        </div>
      </div>
    </footer>
  );
}