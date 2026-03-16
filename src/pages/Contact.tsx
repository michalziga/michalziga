import { Mail, Phone, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageWrapper from "@/components/PageWrapper";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "michal.ziga@example.com",
    href: "mailto:michal.ziga@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+421 XXX XXX XXX",
    href: "tel:+421XXXXXXXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/michalziga",
    href: "https://linkedin.com/in/michalziga",
  },
];

const Contact = () => (
  <PageWrapper>
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />

      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <AnimatedSection>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Get in Touch</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Contact
          </h1>
          <p className="mx-auto mb-16 max-w-md text-muted-foreground">
            I'm always open to new opportunities, collaborations, and conversations about public policy and Roma inclusion.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-3">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                <a
                  href={c.href}
                  target={c.label === "LinkedIn" ? "_blank" : undefined}
                  rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium">{c.value}</span>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Contact;
