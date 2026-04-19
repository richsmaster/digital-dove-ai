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
      className={`relative w-full h-full bg-[#fafbfc] overflow-hidden ${className}`}
      style={{ fontFamily: "'Tajawal', 'Cairo', system-ui, sans-serif" }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-l from-[#3b82f6] via-[#60a5fa] to-[#3b82f6]" />

      {/* Content */}
      <div className="relative w-full h-full px-24 py-20">{children}</div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 px-16 flex items-center justify-between border-t border-[#e8ecf1] bg-white/60 backdrop-blur-sm">
        <div className="text-[#94a3b8] text-xl">
          الذكاء الاصطناعي في التسويق الرقمي
        </div>
        <div className="text-[#3b82f6] text-xl font-bold">
          {pageNumber && totalPages ? `${pageNumber} / ${totalPages}` : ""}
        </div>
        <div className="text-[#94a3b8] text-xl">جامعة نولج</div>
      </div>
    </div>
  );
}
