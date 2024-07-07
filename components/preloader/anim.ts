export const welcomeAnim = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.05 * i }}),
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.45 } },
};