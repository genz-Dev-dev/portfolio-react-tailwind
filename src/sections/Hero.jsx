import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Send,
  Mail,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import profilePhoto from "../assets/newProfile.jpeg";
import cvPdf from "../assets/nam tola.pdf";

const skills = [
  "Java",
  "Spring Boot",
  "Microservices / Eureka",
  "Dart Frog",
  "PHP / Laravel",
  "Vania Framework",
  "Node.js",
  "RESTful APIs",
  "React.js",
  "Vue 3",
  "AngularJS",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap CSS",
  "MySQL",
  "PostgreSQL",
  "PostgREST",
  "MongoDB",
  "Microsoft SQL Server",
  "ABA Pay & Bakong KHQR",
  "Docker",
  "Git & GitHub",
  "AWS",
  "Capacitor",
  "Kotlin",
  "Figma (UI/UX)",
  "C / C++ / C#",
];

const greenDots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${((i * 37) % 97) + 1.5}%`,
  top: `${((i * 53) % 95) + 2.5}%`,
  duration: `${15 + ((i * 7) % 20)}s`,
  delay: `${(i * 0.4) % 5}s`,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {greenDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software & Back-End Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">robust</span>
                <br />
                systems & web
                <br />
                <span className="font-serif italic font-normal text-white">
                  experiences.
                </span>
              </h1>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-200">
                Hi, I’m <strong className="text-foreground">Nam Tola</strong>, a Software / Back-End Engineer and final-year Computer Science & Engineering student at RUPP. I build scalable back-end services with Java Spring Boot, microservices, and Laravel, alongside responsive frontend interfaces using React.js, Vue 3, and AngularJS. Experienced in RESTful API development, SQL/NoSQL database optimisation, and seamless payment integration with ABA Pay and Bakong KHQR.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton
                href={cvPdf}
                download="Nam_Tola_CV.pdf"
                title="Download Nam Tola's CV"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Connect with me: </span>
              {[
                { icon: Github, href: "https://github.com/genz-Dev-dev", label: "GitHub: genz-Dev-dev" },
                { icon: Send, href: "https://t.me/tola_nam", label: "Telegram: @tola_nam" },
                { icon: Mail, href: "mailto:namtola4444@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-3 glow-border">
                <img
                  src={profilePhoto}
                  alt="Nam Tola - Software & Back-end Engineer"
                  className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for hire
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 shadow-lg">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Core Technologies & Frameworks
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 py-4">
                  <span className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
