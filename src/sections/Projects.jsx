import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "E-Commerce Management & POS Dashboard",
    description:
      "Full-stack e-commerce management platform featuring real-time revenue analytics, barcode scanning, order management, system auditing, and online payment processing.",
    image: "/projects/ecommerce-dashboard.png",
    tags: ["Vue 3", "Spring Boot", "ABA Pay", "Bakong KHQR", "PostgreSQL / PostgREST", "Tailwind CSS"],
    link: "https://tola24.namtola4444.workers.dev/dashboard",
    github: "https://github.com/genz-Dev-dev",
  },
  {
    title: "shopKh Customer Store & Order Portal",
    description:
      "Consumer e-commerce storefront with live order status tracking, integrated AI recommendation features, and direct Cambodian mobile banking checkout.",
    image: "/projects/ecommerce-orders.png",
    tags: ["Vue 3", "TypeScript", "Spring Boot", "Capacitor", "PostgreSQL", "AI Model"],
    link: "https://tola24.namtola4444.workers.dev/orders",
    github: "https://github.com/genz-Dev-dev",
  },
  {
    title: "Score & Grade Academic Assessment Core",
    description:
      "Academic assessment platform with real-time score statistics, batch validation, grade reporting, and student semester record management powered by PostgreSQL & PostgREST.",
    image: "/projects/grade-management.png",
    tags: ["Spring Boot", "AngularJS", "PostgREST", "PostgreSQL", "SQL Optimization"],
    link: "#",
    github: "https://github.com/genz-Dev-dev",
  },
  {
    title: "University Role-Based Access Control (RBAC)",
    description:
      "Enterprise security system implementing granular permission matrices, role definitions (ROLE_ADMIN, ROLE_STAFF), and secure API route authorization.",
    image: "/projects/rbac-system.png",
    tags: ["Java", "Spring Security", "Spring Boot", "PostgreSQL", "Windows Server"],
    link: "#",
    github: "https://github.com/genz-Dev-dev",
  },
  {
    title: "CamSolution Tech Ecosystem Platform",
    description:
      "Modern corporate software agency portal showcasing custom engineering solutions, cloud architecture, AI solutions, and digital transformation services.",
    image: "/projects/camsolution.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "PostgREST / API", "Vercel"],
    link: "https://camsolution.vercel.app",
    github: "https://github.com/genz-Dev-dev",
  },
  {
    title: "Tourism Management Information System",
    description:
      "RUPP Year 4 final-semester software engineering project featuring high-concurrency microservices, robust data persistence with PostgREST & MongoDB, and comprehensive UML design.",
    image: "/projects/university-portal.png",
    tags: ["Dart Frog", "PostgREST", "MongoDB", "Docker", "Software Architecture"],
    link: "#",
    github: "https://github.com/genz-Dev-dev",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work & UI Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Engineering solutions that
            <span className="font-serif italic font-normal text-white">
              {" "}
              deliver real impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of my recent production systems, UI dashboards, and university engineering projects — from payment-integrated e-commerce platforms to backend architectures and security portals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col border border-primary/20 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-muted/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/40
                 to-transparent opacity-70"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground/40" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/genz-Dev-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Projects on GitHub (@genz-Dev-dev)
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
