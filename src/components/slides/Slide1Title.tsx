import { SlideLayout } from "./SlideLayout";

export function Slide1Title({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        {/* Decorative AI icon */}
        <div className="mb-12 relative">
          <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] flex items-center justify-center shadow-2xl shadow-blue-200">
            <svg viewBox="0 0 24 24" className="w-24 h-24 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#60a5fa] opacity-30 blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#3b82f6] opacity-20 blur-2xl" />
        </div>

        {/* Subtitle */}
        <div className="text-3xl text-[#3b82f6] font-bold mb-6 tracking-wide">
          تقرير أكاديمي
        </div>

        {/* Main title */}
        <h1 className="text-7xl font-black text-[#1e293b] mb-4 leading-tight">
          الذكاء الاصطناعي
        </h1>
        <h2 className="text-5xl font-bold text-[#475569] mb-12">
          وثورته في التسويق الرقمي
        </h2>

        {/* Divider */}
        <div className="w-32 h-1.5 bg-gradient-to-l from-[#3b82f6] to-[#60a5fa] rounded-full mb-12" />

        {/* Authors */}
        <div className="bg-white rounded-2xl px-12 py-8 shadow-lg border border-[#e8ecf1] max-w-4xl">
          <div className="text-2xl text-[#94a3b8] mb-4">إعداد الطلاب</div>
          <div className="text-4xl font-bold text-[#1e293b] mb-6">
            خالد مظهر &nbsp;•&nbsp; زبيدة حازم
          </div>
          <div className="text-2xl text-[#475569] leading-relaxed">
            جامعة نولج — كلية العلوم المالية والإدارية
            <br />
            <span className="text-[#3b82f6] font-semibold">قسم التسويق الرقمي</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
