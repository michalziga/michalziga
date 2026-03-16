import { Download, MapPin, Globe, Code } from "lucide-react";
import profileImg from "@/assets/profile.png";
import AnimatedSection from "@/components/AnimatedSection";
import PageWrapper from "@/components/PageWrapper";

const Index = () => {
  return (
    <PageWrapper>
      <section className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <AnimatedSection>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                Portfolio
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Michal<br />
                <span className="text-gradient">Žiga</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mb-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Applicant for MA in Transnational Governance. Passionate about Roma inclusion, public policy, and human rights advocacy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" /> Bratislava, Slovakia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe size={14} className="text-primary" /> Slovak (native) · English (C1)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Code size={14} className="text-primary" /> Beginner in Python & AI
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <a
                href="/Michal_Ziga_CV.docx"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
              >
                <Download size={16} /> Download CV
              </a>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection className="order-1 flex justify-center md:order-2" delay={0.2} direction="right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
              <img
                src={profileImg}
                alt="Michal Žiga"
                className="relative z-10 h-72 w-72 rounded-full object-cover object-top shadow-2xl ring-4 ring-primary/20 md:h-96 md:w-96"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Index;
