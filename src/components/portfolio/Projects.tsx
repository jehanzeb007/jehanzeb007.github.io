import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Teamery — Smart Team Performance Platform",
    category: "SaaS · Collaboration",
    desc: "Secure, scalable team-management SaaS with real-time communication, task management, role-based access and analytics for distributed teams.",
    tags: ["Laravel", "MySQL", "Vue.js", "WebSockets"],
    url: "https://teamery.net/",
    color: "from-blue/30 to-purple/30",
  },
  {
    title: "Nardagani — Interactive Language Learning",
    category: "EdTech · AI",
    desc: "Immersive phonics-based language learning built with Unity + Laravel, AI-driven recommendations, secure subscriptions and cross-platform sync.",
    tags: ["Laravel", "Unity", "AI", "Stripe"],
    url: "https://www.nardagani.com/",
    color: "from-cyan/30 to-blue/30",
  },
  {
    title: "Joticle — Knowledge Management Platform",
    category: "SaaS · AI",
    desc: "Manages millions of knowledge units with AI-powered curation, 360° reporting, premium subscriptions and cross-domain session sync.",
    tags: ["Laravel", "Vue.js", "Tailwind", "OpenAI"],
    url: "https://joticle.com/",
    color: "from-purple/30 to-cyan/30",
  },
  {
    title: "PayGreenCard — Digital Payments",
    category: "FinTech · Payments",
    desc: "Secure digital wallet & payments platform with instant transfers, 2048-bit encryption, fraud detection and high-volume transaction processing.",
    tags: ["Laravel", "PostgreSQL", "Payments", "Security"],
    url: "https://www.paygreencard.com/",
    color: "from-blue/30 to-cyan/30",
  },
  {
    title: "College for World Connections",
    category: "EdTech · SaaS",
    desc: "Modern learning & leadership platform with AI content curation, real-time progress tracking and secure course payments.",
    tags: ["Laravel", "Vue.js", "Tailwind", "Stripe"],
    url: "https://collegeforworldconnections.com/",
    color: "from-purple/30 to-blue/30",
  },
  {
    title: "SMSStats — SMS Analytics Platform",
    category: "Analytics · Telecom",
    desc: "High-performance SMS tracking, gateway integrations and campaign analytics handling billions of messages across multiple databases.",
    tags: ["Laravel", "SMPP", "Big Data", "Redis"],
    url: "https://smsstats.com/",
    color: "from-cyan/30 to-purple/30",
  },
  {
    title: "Consulting Centrale — Consultancy SaaS",
    category: "SaaS · WebRTC",
    desc: "Manages millions of consultants & earnings, Elastic search, audio/video calls via WebRTC + Twilio and multi-language support.",
    tags: ["Laravel", "WebRTC", "Twilio", "Elasticsearch"],
    url: "https://www.consultingcentrale.com/",
    color: "from-blue/30 to-purple/30",
  },
  {
    title: "Business2Sell — Business Marketplace",
    category: "Marketplace",
    desc: "Leading business buying & selling marketplace with thousands of listings, advanced filtering, payments and engagement analytics.",
    tags: ["Laravel", "MySQL", "Payments"],
    url: "https://www.business2sell.com.au/",
    color: "from-cyan/30 to-blue/30",
  },
  {
    title: "CommercialProperty2Sell",
    category: "Real Estate · Marketplace",
    desc: "Commercial real-estate marketplace with real-time listings, advanced filters, lease workflows and premium listing payments.",
    tags: ["Laravel", "Vue.js", "MySQL"],
    url: "https://commercialproperty2sell.com.au/",
    color: "from-purple/30 to-cyan/30",
  },
  {
    title: "Arabian Eagle — Hotels & Air Tickets",
    category: "Travel · B2B/B2C",
    desc: "Online booking system integrating 18+ live rate APIs (Booking.com, Tripadvisor, Tourico) with Elasticsearch and multi-language support.",
    tags: ["Laravel", "Vue.js", "Elasticsearch", "APIs"],
    url: "http://www.ae.sa.com/",
    color: "from-blue/30 to-cyan/30",
  },
  {
    title: "MillionTelecom — VoIP Platform",
    category: "Telecom · VoIP",
    desc: "Asterisk + VoIP telecom platform handling trillions of CDRs, call routing, billing and real-time monitoring at scale.",
    tags: ["Laravel", "Asterisk", "VoIP", "SMPP"],
    url: "http://milliontelecom.com/",
    color: "from-purple/30 to-blue/30",
  },
  {
    title: "Efynch — Home Repairs Marketplace",
    category: "Marketplace · Escrow",
    desc: "Connects homeowners with service providers — escrow payments, microservices backend for iOS & Android apps.",
    tags: ["CodeIgniter", "Escrow", "REST APIs"],
    url: "http://www.efynch.com/",
    color: "from-cyan/30 to-purple/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Featured Work</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Selected <span className="text-gradient">Projects</span></h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of the 150+ SaaS, AI, FinTech and enterprise platforms I've architected and shipped for clients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group glass-strong rounded-3xl overflow-hidden shadow-card hover:border-cyan/30 transition"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl font-bold text-white/20 font-display select-none">
                    {p.title.split(/\s|—/).filter(Boolean).map((w) => w[0]).join("").slice(0, 3)}
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider glass rounded-full px-3 py-1">
                  {p.category}
                </div>
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white/70 group-hover:rotate-45 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:text-gradient transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70">{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg bg-gradient-primary px-3 py-2 text-primary-foreground">
                    <ExternalLink className="h-3.5 w-3.5" /> Visit Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
