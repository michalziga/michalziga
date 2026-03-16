import { Globe, Mic, Newspaper, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageWrapper from "@/components/PageWrapper";

const activities = [
  {
    icon: Globe,
    title: "NATO / One Young World Academy",
    description: "Selected participant in a transatlantic security and leadership program bringing together young leaders from NATO member states.",
  },
  {
    icon: Users,
    title: "Dikh He Na Bister",
    description: 'Active participant in the "Look and Don\'t Forget" Roma Holocaust remembrance initiative promoting awareness and education.',
  },
];

const media = [
  {
    icon: Mic,
    title: "ERIAC Podcast",
    description: "Featured guest discussing Roma identity, culture, and empowerment in the European Roma Institute for Arts and Culture podcast series.",
    link: "#",
  },
  {
    icon: Newspaper,
    title: "Denník N Interview",
    description: "In-depth interview with one of Slovakia's leading independent newspapers on Roma inclusion and grassroots activism.",
    link: "#",
  },
];

const Activities = () => (
  <PageWrapper>
    <section className="mx-auto max-w-5xl px-6 py-24">
      <AnimatedSection>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Involvement</p>
        <h1 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Activities & Media
        </h1>
      </AnimatedSection>

      {/* Extracurriculars */}
      <AnimatedSection delay={0.1}>
        <h2 className="mb-8 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Extracurricular Activities
        </h2>
      </AnimatedSection>

      <div className="mb-20 grid gap-6 md:grid-cols-2">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <AnimatedSection key={i} delay={0.15 + i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Media */}
      <AnimatedSection delay={0.1}>
        <h2 className="mb-8 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Media Appearances
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {media.map((m, i) => {
          const Icon = m.icon;
          return (
            <AnimatedSection key={i} delay={0.15 + i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  </PageWrapper>
);

export default Activities;
