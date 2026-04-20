import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3, X } from "lucide-react";
import { Slide1Title } from "@/components/slides/Slide1Title";
import { Slide2Intro } from "@/components/slides/Slide2Intro";
import { Slide3Data } from "@/components/slides/Slide3Data";
import { Slide4Content } from "@/components/slides/Slide4Content";
import { Slide5Ads } from "@/components/slides/Slide5Ads";
import { Slide6Service } from "@/components/slides/Slide6Service";
import { Slide7Challenges } from "@/components/slides/Slide7Challenges";
import { Slide8Conclusion } from "@/components/slides/Slide8Conclusion";
import { Slide9Companies } from "@/components/slides/Slide9Companies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الذكاء الاصطناعي في التسويق الرقمي — عرض تقديمي" },
      { name: "description", content: "عرض تقديمي تفاعلي حول كيف يُحدث الذكاء الاصطناعي ثورة في التسويق الرقمي." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Cairo:wght@400;700;900&display=swap",
      },
    ],
  }),
  component: PresentationApp,
});

const slides = [
  Slide1Title,
  Slide2Intro,
  Slide3Data,
  Slide4Content,
  Slide5Ads,
  Slide6Service,
  Slide7Challenges,
  Slide8Conclusion,
];

const slideTitles = [
  "العنوان",
  "مقدمة",
  "تحليل البيانات",
  "صناعة المحتوى",
  "الإعلانات الذكية",
  "خدمة العملاء",
  "التحديات",
  "الخلاصة",
];

function PresentationApp() {
  const [current, setCurrent] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showGrid) {
        if (e.key === "Escape") setShowGrid(false);
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === " ") next();
      else if (e.key === "ArrowRight" || e.key === "PageUp") prev();
      else if (e.key === "Home") setCurrent(0);
      else if (e.key === "End") setCurrent(slides.length - 1);
      else if (e.key === "g" || e.key === "G") setShowGrid((v) => !v);
      else if (e.key === "F5" || e.key === "f") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid]);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const sx = clientWidth / 1920;
      const sy = clientHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const Current = slides[current];

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <div className="bg-white border-b border-[#e8ecf1] px-6 py-3 flex items-center justify-between shadow-sm z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center text-white font-black text-xl">
            AI
          </div>
          <div>
            <div className="font-bold text-[#1e293b]">عرض تقديمي تفاعلي</div>
            <div className="text-xs text-[#64748b]">الذكاء الاصطناعي في التسويق الرقمي</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGrid((v) => !v)}
            className="px-4 py-2 rounded-lg hover:bg-[#f1f5f9] text-[#475569] font-medium flex items-center gap-2 transition"
            title="عرض الشبكة (G)"
          >
            <Grid3x3 className="w-4 h-4" /> الشبكة
          </button>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            className="px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium flex items-center gap-2 transition"
            title="عرض كامل (F)"
          >
            <Maximize2 className="w-4 h-4" /> عرض كامل
          </button>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 relative overflow-hidden">
        <div
          className="absolute"
          style={{
            width: 1920,
            height: 1080,
            left: "50%",
            top: "50%",
            marginLeft: -960,
            marginTop: -540,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <Current page={current + 1} total={slides.length} />
        </div>

        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-[#1e293b] disabled:opacity-30 transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-[#1e293b] disabled:opacity-30 transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-[#3b82f6]" : "w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]"
              }`}
            />
          ))}
        </div>
      </div>

      {showGrid && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-auto p-8" dir="rtl">
          <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white">جميع الشرائح</h2>
            <button
              onClick={() => setShowGrid(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
            {slides.map((S, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setShowGrid(false);
                }}
                className={`relative overflow-hidden rounded-xl bg-white shadow-xl border-4 transition aspect-video ${
                  i === current ? "border-[#3b82f6] scale-105" : "border-transparent hover:border-white/40"
                }`}
              >
                <div
                  className="absolute"
                  style={{
                    width: 1920,
                    height: 1080,
                    left: 0,
                    top: 0,
                    transform: "scale(0.2)",
                    transformOrigin: "top left",
                  }}
                >
                  <S page={i + 1} total={slides.length} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-3 py-2 text-sm font-bold flex justify-between">
                  <span>{slideTitles[i]}</span>
                  <span>{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
