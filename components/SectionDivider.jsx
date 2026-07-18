const SectionDivider = () => (
  <div className="container mx-auto">
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
    </div>
  </div>
);

export default SectionDivider;
