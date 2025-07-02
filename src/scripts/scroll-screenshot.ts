// src/scripts/scroll-screenshot.ts
const showcase = document.querySelector<HTMLDivElement>(".portfolio-showcase");
if (!showcase) throw new Error("PortfolioShowcase element not found.");

const scrollable = showcase.querySelector<HTMLDivElement>(".scroll-container");
if (!scrollable) throw new Error("Scrollable container not found.");

let frameId: number | null = null;
const duration = 8000; // ms
const delay = 300; // ms

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;

const animateScroll = (to: number): void => {
  const start = scrollable.scrollTop;
  const change = to - start;
  const startTime = performance.now();

  const step = (now: number): void => {
    const progress = Math.min((now - startTime) / duration, 1);
    scrollable.scrollTop = start + change * easeInOutCubic(progress);
    if (progress < 1) frameId = requestAnimationFrame(step);
  };

  if (frameId !== null) cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(step);
};

showcase.addEventListener("mouseenter", () => {
  setTimeout(() => animateScroll(scrollable.scrollHeight), delay);
});

showcase.addEventListener("mouseleave", () => {
  if (frameId !== null) cancelAnimationFrame(frameId);
  scrollable.scrollTo({ top: 0, behavior: "smooth" });
});
