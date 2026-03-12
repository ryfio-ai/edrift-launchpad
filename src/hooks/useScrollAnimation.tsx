import { useEffect, useRef, ReactNode } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".fade-up");
      children.forEach((child) => observer.observe(child));
      if (el.classList.contains("fade-up")) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}
