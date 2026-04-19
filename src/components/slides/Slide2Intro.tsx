import { SlideLayout } from "./SlideLayout";

export function Slide2Intro({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            01 — مقدمة
          </div>
          <h1 className="text-6xl font-black text-[#1e293b] leading-tight">
            ما هو الذكاء الاصطناعي في التسويق؟
          </h1>
        </div>

        {/* Quote box */}
        <div className="bg-gradient-to-l from-blue-50 to-white border-r-8 border-[#3b82f6] rounded-2xl p-10 mb-10 shadow-sm">
          <p className="text-3xl text-[#334155] leading-relaxed">
            تخيّل موظفاً خارقاً <span className="font-bold text-[#3b82f6]">لا ينام</span>،
            يقرأ أفكار ملايين العملاء في ثانية، ويعرف بالضبط متى وأين يعرض الإعلان المناسب.
          </p>
        </div>

        {/* Comparison: Traditional vs AI */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="bg-white rounded-2xl p-10 border-2 border-[#e8ecf1] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#fee2e2] flex items-center justify-center text-4xl">📰</div>
              <h3 className="text-3xl font-bold text-[#475569]">التسويق التقليدي</h3>
            </div>
            <ul className="space-y-4 text-2xl text-[#64748b]">
              <li className="flex gap-3"><span className="text-red-400">✕</span> إعلان واحد للجميع</li>
              <li className="flex gap-3"><span className="text-red-400">✕</span> قرارات مبنية على التخمين</li>
              <li className="flex gap-3"><span className="text-red-400">✕</span> تكاليف عالية وعائد محدود</li>
              <li className="flex gap-3"><span className="text-red-400">✕</span> بطء في التحليل والاستجابة</li>
            </ul>
          </div>

          {/* AI */}
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl p-10 shadow-xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl">🤖</div>
              <h3 className="text-3xl font-bold">التسويق بالذكاء الاصطناعي</h3>
            </div>
            <ul className="space-y-4 text-2xl">
              <li className="flex gap-3"><span className="text-green-300">✓</span> رسالة مخصصة لكل عميل</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> قرارات مبنية على البيانات</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> تكاليف أقل وعائد مضاعف</li>
              <li className="flex gap-3"><span className="text-green-300">✓</span> تحليل لحظي وذكي</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
