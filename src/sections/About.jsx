import {
  Code2,
  Database,
  CreditCard,
  Layers,
  GraduationCap,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code & Architecture",
    description:
      "Applying SOLID principles, OOP, and modular design to write robust, maintainable backend and frontend code.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Hands-on experience integrating Cambodian payment ecosystems including ABA Pay and Bakong KHQR.",
  },
  {
    icon: Layers,
    title: "Full-Stack & Microservices",
    description:
      "Building decoupled architectures with Spring Boot, Eureka microservices, Laravel, and reactive frontends.",
  },
  {
    icon: Database,
    title: "Database & API Optimization",
    description:
      "Designing schemas and tuning queries across PostgreSQL, PostgREST, MySQL, MongoDB, and Microsoft SQL Server.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering reliable back-ends,
              <span className="font-serif italic font-normal text-white">
                {" "}
                delivering seamless experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a final-year Computer Science and Engineering student at
                the <strong className="text-foreground">Royal University of Phnom Penh (RUPP)</strong> and
                a dedicated full-stack developer with over 2 years of practical
                software development experience.
              </p>
              <p>
                During my web developer internship at <strong className="text-foreground">Etec Center</strong>,
                I implemented end-to-end e-commerce solutions, engineered task management systems,
                connected complex RESTful APIs between front-end interfaces and Spring Boot / Laravel back-ends,
                and integrated real-world payment solutions such as <strong className="text-primary">ABA Pay</strong> and <strong className="text-primary">Bakong KHQR</strong>.
              </p>
              <p>
                My toolkit spans both backend architecture (Java Spring Boot, Eureka microservices, Dart Frog, PHP/Laravel)
                and modern client-side engineering (React.js, Vue 3, AngularJS, TypeScript, Tailwind CSS), alongside mobile development with Kotlin and Capacitor, and UI/UX design in Figma.
              </p>
            </div>

            {/* Academic & Certifications Summary */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-250">
              <div className="glass p-4 rounded-xl border border-primary/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">B.S. Computer Science & Eng.</h4>
                  <p className="text-xs text-muted-foreground">Royal University of Phnom Penh (Final Year)</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl border border-primary/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Cloud & Network Certified</h4>
                  <p className="text-xs text-muted-foreground">AWS Academy Cloud Foundations • Cisco CCNA 1 & 2</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Committed to clean code, solid architecture, and user-centered
                solutions that scale seamlessly under real-world demands."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in border border-primary/10 hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
