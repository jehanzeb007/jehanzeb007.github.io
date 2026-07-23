import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { AIExpertise } from "@/components/portfolio/AIExpertise";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Services } from "@/components/portfolio/Services";
import { Stats } from "@/components/portfolio/Stats";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import portraitAsset from "@/assets/portrait.png.asset.json";

const title = "Jehanzeb Sarfraz — CEO & Technical Lead of Dev & Design | Senior Full Stack Developer & AI Solutions Architect";
const description =
  "Hire Jehanzeb Sarfraz — CEO & Technical Lead of Dev & Design, and Top Rated Plus Senior Full Stack Developer & AI Solutions Architect with 13+ years building 150+ SaaS, AI, FinTech and enterprise platforms in Laravel, Node.js, React and Vue.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Jehanzeb Sarfraz, Jehanzeb Ali, Senior Full Stack Developer, AI Solutions Architect, Laravel Developer, Node.js Developer, React Developer, Vue.js Developer, SaaS Developer, AI Integration, OpenAI, Claude, RAG, AI Agents, Stripe, PayPal, Payment Systems, Upwork Top Rated Plus, Kuala Lumpur, Malaysia, Pakistan",
      },
      { name: "author", content: "Jehanzeb Sarfraz" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: portraitAsset.url },
      { property: "og:site_name", content: "Jehanzeb Sarfraz" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: portraitAsset.url },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jehanzeb Sarfraz",
          alternateName: "Jehanzeb Ali",
          jobTitle: "CEO & Technical Lead of Dev & Design | Senior Full Stack Developer & AI Solutions Architect",
          description,
          email: "mailto:jehanzebsherali@gmail.com",
          telephone: "+60-11-5337-6898",
          image: portraitAsset.url,
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "6 Capsquare, Jln Munshi Abdullah",
            addressLocality: "Kuala Lumpur",
            addressCountry: "MY",
          },
          worksFor: {
            "@type": "Organization",
            name: "Dev & Design",
            url: "https://devandesign.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6 Capsquare, Jln Munshi Abdullah",
              addressLocality: "Kuala Lumpur",
              addressCountry: "MY",
            },
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of Sargodha",
          },
          sameAs: [
            "https://www.upwork.com/freelancers/~01jehanzeb",
            "https://www.linkedin.com/in/jehanzeb-sarfraz",
            "https://github.com/jehanzeb007",
            "https://jehanzeb007.github.io",
          ],
          knowsAbout: [
            "AI Integration",
            "SaaS Architecture",
            "Laravel",
            "Node.js",
            "React",
            "Vue.js",
            "Payment Systems",
            "OpenAI",
            "Claude",
            "RAG",
            "AI Agents",
            "Elasticsearch",
            "VoIP",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen text-foreground">
      <Toaster theme="dark" position="top-right" richColors />
      <Nav />
      <main>
        <Hero />
        <About />
        <AIExpertise />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Stats />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
