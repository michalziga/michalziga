import { GraduationCap, Award, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageWrapper from "@/components/PageWrapper";

const education = [
  {
    period: "2026",
    title: "Salzburg Global Fellowship",
    subtitle: "Public Policy — New Voices Europe",
    icon: Award,
    details: ["Selected fellow for international public policy program"],
  },
  {
    period: "2025 – 2026",
    title: "CEU Roma Graduate Preparation Program",
    subtitle: "Central European University, Vienna",
    icon: GraduationCap,
    details: ["Intensive graduate preparation in social sciences"],
  },
  {
    period: "2020 – 2023",
    title: "BA in Political Science",
    subtitle: "Bratislava International School of Liberal Arts (BISLA)",
    icon: BookOpen,
    details: [
      "GPA: 3.27 / 4.0",
      "Rector's Scholarship recipient",
      "Thesis: Influence of Romani culture on current socio-economic conditions of Roma in Slovakia",
      "Member of Academic Senate & Student Council",
    ],
  },
];

const Education = () => (
  <PageWrapper>
    <section className="mx-auto max-w-4xl px-6 py-24">
      <AnimatedSection>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Background</p>
        <h1 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Education
        </h1>
      </AnimatedSection>

      <div className="relative border-l-2 border-border pl-8">
        {education.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.15} className="relative mb-16 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                <Icon size={18} className="text-primary" />
              </div>

              <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-primary">
                {item.period}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{item.subtitle}</p>
              <ul className="space-y-1.5">
                {item.details.map((d, j) => (
                  <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                    • {d}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  </PageWrapper>
);

export default Education;
