import { SlideLayout } from "./SlideLayout";

export function Slide8Conclusion({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-8">
          07 — الخلاصة
        </div>

        <h1 className="text-6xl font-black text-[#1e293b] mb-12">نصيحة لمسوّقي المستقبل</h1>

        {/* Big quote */}
        <div className="relative max-w-5xl mb-12">
          <div className="absolute -top-8 -right-4 text-9xl text-[#3b82f6] opacity-20 font-serif leading-none">"</div>
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-3xl p-12 shadow-2xl text-white">
            <p className="text-5xl font-bold leading-snug">
              المسوّق الذي يستخدم الذكاء الاصطناعي،
              <br />
              <span className="text-yellow-300">سيأخذ وظيفة المسوّق الذي لا يستخدمه!</span>
            </p>
          </div>
        </div>

        {/* Action items */}
        <div className="grid grid-cols-3 gap-6 max-w-5xl w-full mb-10">
          <div className="bg-white rounded-2xl p-6 border border-[#e8ecf1] shadow-sm">
            <div className="text-5xl mb-3">📚</div>
            <div className="text-2xl font-bold text-[#1e293b]">تعلّم الأدوات</div>
            <div className="text-xl text-[#64748b] mt-2">ChatGPT, Midjourney, Analytics</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#e8ecf1] shadow-sm">
            <div className="text-5xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-[#1e293b]">كن مديراً للحملات</div>
            <div className="text-xl text-[#64748b] mt-2">لا مجرد منفّذ يدوي</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#e8ecf1] shadow-sm">
            <div className="text-5xl mb-3">🚀</div>
            <div className="text-2xl font-bold text-[#1e293b]">طبّق وجرّب</div>
            <div className="text-xl text-[#64748b] mt-2">المستقبل لمن يبدأ اليوم</div>
          </div>
        </div>

        <div className="text-3xl text-[#3b82f6] font-bold">شكراً لإصغائكم 🌟</div>
        <div className="text-xl text-[#94a3b8] mt-3">خالد مظهر • زبيدة حازم — جامعة نولج</div>
      </div>
    </SlideLayout>
  );
}
