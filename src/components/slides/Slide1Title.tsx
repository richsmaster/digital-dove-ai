import { SlideLayout } from "./SlideLayout";

export function Slide1Title({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        {/* Knowledge University Logo */}
        <div className="mb-12 relative flex flex-col items-center gap-4">
          <img
            src="/knowledge-university-logo.png"
            alt="Knowledge University"
            className="h-36 w-auto object-contain drop-shadow-xl"
            style={{ maxWidth: 520 }}
          />
          {/* College & Department & Supervisor */}
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2d3a8c]">كلية العلوم المالية والإدارية</div>
            <div className="text-2xl font-semibold text-[#b8943a] mt-1">قسم التسويق الرقمي</div>
            <div className="mt-3 text-2xl text-[#475569] font-medium">د. جيلان غازي</div>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#b8a070] opacity-15 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#2d3a8c] opacity-10 blur-2xl" />
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
          <div className="text-4xl font-bold text-[#1e293b]">
            خالد مظهر &nbsp;•&nbsp; زبيدة حازم
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
