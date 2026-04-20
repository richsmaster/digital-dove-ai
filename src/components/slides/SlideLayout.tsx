import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  pageNumber?: number;
  totalPages?: number;
}

export function SlideLayout({ children, className = "", pageNumber, totalPages }: SlideLayoutProps) {
  return (
    <div
      dir="rtl"
      className={`slide-root relative w-full h-full bg-[#fafbfc] overflow-hidden ${className}`}
      style={{ fontFamily: "'Tajawal', 'Cairo', system-ui, sans-serif", fontSize: "22px" }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-l from-[#3b82f6] via-[#60a5fa] to-[#3b82f6]" />

      {/* ── 3D Background Layer ──
          contain:layout+style+paint → fully isolated from main render tree
          pointer-events:none       → zero interaction cost
          All children use GPU-only transform + opacity animations             */}
      <div
        className="bg-3d-layer absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* ── Large radial orbs (GPU: translate3d + scale via class) ── */}
        <div
          className="bg-shape-orb absolute rounded-full"
          style={{
            width: 420, height: 420,
            top: -90, right: -90,
            background: "radial-gradient(circle at 35% 35%, #dde3ec, #edf1f7 55%, transparent 78%)",
          }}
        />
        <div
          className="bg-shape-orb absolute rounded-full"
          style={{
            width: 340, height: 340,
            bottom: -70, left: -70,
            background: "radial-gradient(circle at 62% 62%, #dde3ec, #edf1f7 55%, transparent 78%)",
            animationDelay: "-11s",
          }}
        />

        {/* ── Wireframe cubes (GPU: rotate3d via class) ── */}
        <div
          className="bg-shape-cube absolute"
          style={{
            width: 100, height: 100,
            top: 130, left: 95,
            border: "2px solid #c8d3df",
            borderRadius: 8,
            boxShadow: "inset 0 0 0 24px transparent, 2px 2px 0 0 #dde3ec",
          }}
        />
        <div
          className="bg-shape-cube absolute"
          style={{
            width: 68, height: 68,
            bottom: 150, right: 155,
            border: "1.8px solid #c8d3df",
            borderRadius: 6,
            animationDelay: "-9s",
          }}
        />
        <div
          className="bg-shape-cube absolute"
          style={{
            width: 46, height: 46,
            top: "43%", right: 75,
            border: "1.5px solid #c8d3df",
            borderRadius: 4,
            animationDelay: "-4s",
          }}
        />

        {/* ── Rings — orbit tilt (GPU: rotateX+Z via class) ── */}
        <div
          className="bg-shape-ring absolute rounded-full"
          style={{
            width: 155, height: 155,
            top: 85, right: "34%",
            border: "2.5px solid #c8d3df",
          }}
        />
        <div
          className="bg-shape-ring absolute rounded-full"
          style={{
            width: 210, height: 210,
            bottom: 65, left: "26%",
            border: "2px solid #c8d3df",
            animationDelay: "-6s",
          }}
        />

        {/* ── SVG Triangles (GPU: rotateY via class) ── */}
        <svg
          className="bg-shape-tri absolute"
          style={{ top: "28%", left: 55 }}
          width="88" height="88" viewBox="0 0 90 90" fill="none"
        >
          <polygon points="45,6 84,78 6,78"  stroke="#b0bec8" strokeWidth="2.5" fill="none" />
          <polygon points="45,22 70,68 20,68" stroke="#b0bec8" strokeWidth="1.2" fill="none" opacity="0.5" />
        </svg>
        <svg
          className="bg-shape-tri absolute"
          style={{ bottom: 110, right: 85, animationDelay: "-13s" }}
          width="60" height="60" viewBox="0 0 90 90" fill="none"
        >
          <polygon points="45,6 84,78 6,78" stroke="#b0bec8" strokeWidth="2" fill="none" />
        </svg>

        {/* ── Floating dots (GPU: translate3d via class) ── */}
        {([
          { top: "17%", left: "22%", size: 14, delay: "0s"     },
          { top: "71%", left: "56%", size: 10, delay: "-3s"    },
          { top: "37%", left: "79%", size: 18, delay: "-5.2s"  },
          { top: "84%", left: "14%", size: 12, delay: "-1.7s"  },
          { top: "54%", left: "43%", size:  8, delay: "-7.4s"  },
          { top: "11%", left: "66%", size: 15, delay: "-2.3s"  },
          { top: "63%", left: "89%", size: 10, delay: "-4.8s"  },
        ] as const).map((d, i) => (
          <div
            key={i}
            className="bg-shape-float absolute rounded-full"
            style={{
              width: d.size, height: d.size,
              top: d.top, left: d.left,
              backgroundColor: "#b8c5d1",
              animationDelay: d.delay,
            }}
          />
        ))}

        {/* ── Dashed diagonal lines (static — no animation cost) ── */}
        <svg
          className="absolute"
          style={{ top: 50, left: "38%", opacity: 0.09 }}
          width="220" height="220" viewBox="0 0 220 220" fill="none"
        >
          <line x1="0" y1="220" x2="220" y2="0"  stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="9 7" />
          <line x1="32" y1="220" x2="220" y2="32" stroke="#94a3b8" strokeWidth="1"   strokeDasharray="9 7" />
        </svg>

      </div>
      {/* ── End 3D Background ── */}

      {/* Slide content */}
      <div className="relative w-full h-full px-24 py-24">{children}</div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 px-16 flex items-center justify-between border-t border-[#e8ecf1] bg-white/60 backdrop-blur-sm">
        <div className="text-[#94a3b8] text-2xl">الذكاء الاصطناعي في التسويق الرقمي</div>
        <div className="text-[#3b82f6] text-2xl font-bold">
          {pageNumber && totalPages ? `${pageNumber} / ${totalPages}` : ""}
        </div>
        <div className="text-[#94a3b8] text-2xl">جامعة نولج</div>
      </div>
    </div>
  );
}
