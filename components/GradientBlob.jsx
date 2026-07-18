"use client";

const GradientBlob = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-accent/20 blur-[100px] animate-blob"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-[30%] right-[-10%] w-[480px] h-[480px] rounded-full bg-accent-purple/20 blur-[100px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent-magenta/10 blur-[100px] animate-blob"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
};

export default GradientBlob;
