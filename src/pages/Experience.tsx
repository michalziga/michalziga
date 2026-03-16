import { Briefcase, Users, Heart, Flame } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageWrapper from "@/components/PageWrapper";

const experiences = [
  {
    icon: Briefcase,
    period: "2024",
    title: "Trainee — Roma and Travellers Division",
    org: "Council of Europe, Strasbourg",
    points: [
      "Conducted research on Roma inclusion policies",
      "Assisted in organizing multilateral meetings",
      "Contributed to policy documents and reports",
    ],
  },
  {
    icon: Users,
    period: "2023 – 2024",
    title: "Content Moderator",
    org: "Accenture, Kraków, Poland",
    points: [
      "Trust & Safety operations for major tech platforms",
      "Cross-cultural team collaboration in multinational environment",
    ],
  },
  {
    icon: Heart,
    period: "2021 – 2022",
    title: "Team Coordinator",
    org: "Helsinki Committee for Human Rights, Slovakia",
    points: [
      "Coordinated human rights monitoring initiatives",
      "Managed volunteer teams and community outreach",
    ],
  },
  {
    icon: Flame,
    period: "2019 – present",
    title: "Founder & Leader",
    org: "Out of Terror Initiative",
    highlight: "€7,000+ raised",
    points: [
      "Founded grassroots initiative focused on Roma empowerment",
      "Raised over €7,000 through community fundraising campaigns",
      "Organized educational workshops and community events",
    ],
  },
];

const Experience = () => (
  <PageWrapper>
    <section className="mx-auto max-w-5xl px-6 py-24">
      <AnimatedSection>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Career</p>
        <h1 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Work Experience
        </h1>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => {
          const Icon = exp.icon;
          return (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold">{exp.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{exp.org}</p>

                {exp.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {exp.highlight}
                  </span>
                )}

                <ul className="space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                      • {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  </PageWrapper>
);

export default Experience;
