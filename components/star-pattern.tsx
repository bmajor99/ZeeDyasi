"use client"

export function StarPattern() {
  // Create star positions in a circular pattern like Beyoncé's site
  const stars = [
    { top: "45%", left: "50%", delay: "0s" },
    { top: "35%", left: "45%", delay: "0.5s" },
    { top: "35%", left: "55%", delay: "1s" },
    { top: "40%", left: "40%", delay: "1.5s" },
    { top: "40%", left: "60%", delay: "2s" },
    { top: "50%", left: "35%", delay: "0.3s" },
    { top: "50%", left: "65%", delay: "0.8s" },
    { top: "55%", left: "40%", delay: "1.3s" },
    { top: "55%", left: "60%", delay: "1.8s" },
    { top: "60%", left: "45%", delay: "0.6s" },
    { top: "60%", left: "55%", delay: "1.1s" },
  ]

  return (
    <div className="relative w-full h-full">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-6 h-6 star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            transform: "translate(-50%, -50%)",
            animationDelay: star.delay,
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full drop-shadow-lg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
