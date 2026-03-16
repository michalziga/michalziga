import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen pt-[var(--nav-height)]">{children}</main>
);

export default PageWrapper;
