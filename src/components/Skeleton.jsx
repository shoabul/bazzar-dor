export function Bar({ className = "" }) {
  return <div className={`sk ${className.includes("rounded") ? "" : "rounded-md"} ${className}`} />;
}

export function SkeletonStyle() {
  return (
    <style>{`
      .sk{background:linear-gradient(90deg,#e6ebe7 25%,#f3f6f3 50%,#e6ebe7 75%);background-size:200% 100%;animation:sk-shimmer 1.4s ease-in-out infinite}
      @keyframes sk-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `}</style>
  );
}