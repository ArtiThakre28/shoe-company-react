import React from "react";

const bars = [
  { rotate: 0, delay: "0s" },
  { rotate: 30, delay: "-1.1s" },
  { rotate: 60, delay: "-1s" },
  { rotate: 90, delay: "-0.9s" },
  { rotate: 120, delay: "-0.8s" },
  { rotate: 150, delay: "-0.7s" },
  { rotate: 180, delay: "-0.6s" },
  { rotate: 210, delay: "-0.5s" },
  { rotate: 240, delay: "-0.4s" },
  { rotate: 270, delay: "-0.3s" },
  { rotate: 300, delay: "-0.2s" },
  { rotate: 330, delay: "-0.1s" },
];

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Inline style block for keyframes */}
      <style>
        {`
          @keyframes fade458 {
            from {
              opacity: 1;
            }
            to {
              opacity: 0.25;
            }
          }
        `}
      </style>
      {/* Loader container */}
      <div className="relative w-[54px] h-[54px] rounded-[10px]">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="absolute left-1/2"
            style={{
              top: "30%",
              width: "8%",
              height: "24%",
              background: "rgb(128, 128, 128)",
              opacity: 0,
              borderRadius: "50px",
              boxShadow: "0 0 3px rgba(255,255,255,0.2)",
              animation: "fade458 1s linear infinite",
              animationDelay: bar.delay,
              transform: `rotate(${bar.rotate}deg) translate(0, -130%)`,
              transformOrigin: "center center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
