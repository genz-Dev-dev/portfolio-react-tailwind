import { Server, Layout, Database, CreditCard, Cloud, ShieldCheck } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present (Final Year)",
    role: "Computer Science & Engineering Student",
    company: "Royal University of Phnom Penh (RUPP)",
    description:
      "Pursuing Bachelor of Computer Science & Engineering. Leading final-semester software engineering project 'The Tourism Management Information System' using Dart Frog + MongoDB APIs. Designed e-commerce Figma prototypes, built team applications with Angular and Node.js (Vania), and developed AI-assisted robotics.",
    technologies: [
      "Java",
      "Spring Boot",
      "Dart Frog",
      "MongoDB",
      "Node.js",
      "Vania",
      "Angular",
      "Figma",
      "C++",
      "UML",
    ],
    current: true,
  },
  {
    period: "Sep 2024 — Oct 2025",
    role: "Web Developer Intern",
    company: "Etec Center, Phnom Penh",
    description:
      "Developed e-commerce solutions with Vue 3 and Spring Boot, integrating AI model capabilities and Cambodian online payments (ABA Pay & Bakong KHQR). Built enterprise backend systems with Spring Boot & AngularJS under Professor Ouk Khean, created a note/task management app with Laravel & AngularJS, tuned SQL reporting queries, and administered Windows Server environments.",
    technologies: [
      "Spring Boot",
      "Vue 3",
      "AngularJS",
      "Laravel",
      "MySQL",
      "ABA Pay",
      "Bakong KHQR",
      "RESTful APIs",
      "Windows Server",
    ],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "Full-Stack & Mobile App Developer",
    company: "Freelance & Independent Projects",
    description:
      "Crafted full-stack web and cross-platform mobile applications using Vue.js, TypeScript, and Capacitor. Deployed containerized applications with Docker, established GitHub CI/CD workflows, and integrated secure payment gateways and REST APIs for client solutions.",
    technologies: [
      "React.js",
      "Vue 3",
      "TypeScript",
      "Capacitor",
      "Kotlin",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    current: true,
  },
];

const technicalSkillGroups = [
  {
    category: "Backend & Architecture",
    icon: Server,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Eureka / Microservices",
      "Dart Frog",
      "PHP / Laravel",
      "Vania Framework",
      "Node.js",
      "RESTful APIs",
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: Layout,
    skills: [
      "React.js",
      "Vue 3",
      "AngularJS",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Capacitor",
      "Kotlin (Android)",
      "Figma (UI/UX)",
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    skills: [
      "PostgreSQL",
      "PostgREST",
      "MySQL",
      "MongoDB",
      "Microsoft SQL Server",
      "Query Optimization",
      "Database Modeling",
    ],
  },
  {
    category: "Payment & Integrations",
    icon: CreditCard,
    skills: [
      "ABA Pay",
      "Bakong KHQR",
      "Payment Webhooks",
      "AI Model APIs",
      "Barcode & QR Scanning",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Git & GitHub",
      "Jenkins",
      "AWS (Cloud Foundations)",
      "Vercel",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "Systems & Engineering Principles",
    icon: ShieldCheck,
    skills: [
      "Windows Server Admin",
      "Cisco CCNA 1 & 2",
      "SOLID Principles",
      "Design Patterns",
      "UML Diagrams",
      "SDLC & Agile",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey & Technical Matrix
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience & skills that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              deliver results.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A comprehensive look at my engineering experience at Etec Center, academic leadership at RUPP, and mastery across modern development technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-28">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3.5 h-3.5 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg"
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-1.5 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 bg-surface text-xs rounded-full border border-border/40 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Technical Competencies
            </span>
            <h3 className="text-3xl font-bold mt-2 text-foreground">
              Skills & Expertise Matrix
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Comprehensive breakdown of languages, frameworks, databases, and system engineering tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkillGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground text-base">
                    {group.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-surface/80 border border-border/60 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
