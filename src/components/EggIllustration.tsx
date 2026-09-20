import React from "react";

interface Props {
  pattern: "brown" | "speckled" | "green" | "wholesale" | "organic";
  className?: string;
}

export default function EggIllustration({ pattern, className = "w-full h-48" }: Props) {
  if (pattern === "wholesale") {
    return (
      <div className={`relative overflow-hidden bg-[#EAE2D7] flex items-center justify-center p-6 border-b border-[#DCD2C4] ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2C2723_1px,transparent_1px)] [background-size:12px_12px]" />
        {/* Stylized wholesale 30-egg tray illustration */}
        <div className="relative z-10 w-44 bg-[#D3C7B5] rounded-lg p-3 shadow-inner border border-[#BFB29E]">
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-7 rounded-full bg-gradient-to-b from-[#E7AC78] via-[#C9844B] to-[#995C2E] shadow-sm transform hover:scale-105 transition-transform"
                style={{
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  transform: i % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
                }}
              />
            ))}
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#BAAE9B] flex items-center justify-between text-[10px] font-mono text-[#5C4F41]">
            <span className="font-semibold uppercase tracking-wider">30-EGG TRAY</span>
            <span className="bg-[#2D5A3F] text-[#FAF7F2] px-1.5 py-0.5 rounded text-[9px] font-sans font-bold">GRADE AA</span>
          </div>
        </div>
      </div>
    );
  }

  if (pattern === "green") {
    return (
      <div className={`relative overflow-hidden bg-[#E2EBE4] flex items-center justify-center p-6 border-b border-[#CCD9CF] ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1F382B_1px,transparent_1px)] [background-size:12px_12px]" />
        {/* Heirloom pastel eggs */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          {/* Pale Sage Green Egg */}
          <div
            className="w-14 h-18 bg-gradient-to-b from-[#B8CBBF] via-[#9EB7A7] to-[#759580] shadow-md border border-[#91AC9B]"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
          {/* Robin Sky Blue Egg */}
          <div
            className="w-16 h-20 -mt-2 bg-gradient-to-b from-[#C4D9E2] via-[#A8C7D4] to-[#7EA9BD] shadow-lg border border-[#92B5C5]"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
          {/* Dark Chocolate Marans Egg */}
          <div
            className="w-14 h-18 bg-gradient-to-b from-[#8C583E] via-[#6F402B] to-[#4F2B1A] shadow-md border border-[#5C321F]"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
        </div>
        <div className="absolute bottom-2 right-3 bg-[#1F382B]/10 text-[#1F382B] text-[10px] font-semibold px-2 py-0.5 rounded-full">
          Heirloom Breeds
        </div>
      </div>
    );
  }

  if (pattern === "organic") {
    return (
      <div className={`relative overflow-hidden bg-[#FAF0E1] flex items-center justify-center p-6 border-b border-[#ECDDC5] ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7C4A1E_1px,transparent_1px)] [background-size:12px_12px]" />
        {/* Organic Golden Egg & Laurel accent */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="w-16 h-22 bg-gradient-to-b from-[#F2C58A] via-[#DF9D55] to-[#B26B26] shadow-lg border border-[#CA8944]"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
          <span className="mt-2 text-[11px] font-semibold text-[#66431E] tracking-wider uppercase flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#2D5A3F]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Organic Pasture
          </span>
        </div>
      </div>
    );
  }

  if (pattern === "speckled") {
    return (
      <div className={`relative overflow-hidden bg-[#F5EBE1] flex items-center justify-center p-6 border-b border-[#E3D3C3] ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2C2723_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="relative z-10 flex items-center justify-center gap-4">
          <div
            className="w-15 h-20 bg-gradient-to-b from-[#F3DFC9] via-[#E4C5A5] to-[#BA8E63] shadow-md border border-[#CBA075] relative overflow-hidden"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          >
            {/* Speckles */}
            <div className="absolute top-4 left-3 w-1 h-1 bg-[#85552D] rounded-full opacity-60" />
            <div className="absolute top-7 right-3 w-1.5 h-1 bg-[#85552D] rounded-full opacity-50" />
            <div className="absolute bottom-5 left-4 w-1 h-1 bg-[#85552D] rounded-full opacity-70" />
            <div className="absolute bottom-3 right-4 w-1.5 h-1.5 bg-[#85552D] rounded-full opacity-60" />
          </div>
          <div
            className="w-13 h-17 bg-gradient-to-b from-[#EED5BD] via-[#D5AC85] to-[#A87950] shadow-sm border border-[#BA8E63] relative overflow-hidden"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          >
            <div className="absolute top-5 left-2 w-1 h-1 bg-[#6A3F1F] rounded-full opacity-60" />
            <div className="absolute top-8 right-2 w-1 h-1.5 bg-[#6A3F1F] rounded-full opacity-50" />
          </div>
        </div>
        <div className="absolute bottom-2 right-3 bg-[#8B5E34]/15 text-[#6D421D] text-[10px] font-semibold px-2 py-0.5 rounded-full">
          Soy & Corn Free
        </div>
      </div>
    );
  }

  // Default: rich warm brown pasture egg
  return (
    <div className={`relative overflow-hidden bg-[#FBF2E5] flex items-center justify-center p-6 border-b border-[#ECD9BF] ${className}`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#40240D_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="relative z-10 flex items-center justify-center gap-3">
        <div
          className="w-16 h-22 bg-gradient-to-b from-[#EBB886] via-[#CF874B] to-[#9E5723] shadow-lg border border-[#B86E33] relative"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
        >
          {/* Subtle light reflection sheen */}
          <div className="absolute top-3 left-3 w-3 h-7 bg-white/25 rounded-full transform -rotate-12 blur-[1px]" />
        </div>
        <div
          className="w-14 h-19 -ml-2 mt-3 bg-gradient-to-b from-[#E2A46C] via-[#BE7333] to-[#8C4616] shadow-md border border-[#A75A1E] opacity-95"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
        />
      </div>
      <div className="absolute bottom-2 left-3 bg-[#D97706]/15 text-[#92400E] text-[10px] font-semibold px-2 py-0.5 rounded-full">
        Golden Yolk AA
      </div>
    </div>
  );
}
