import { SlideLayout } from "./SlideLayout";

export function Slide4Content({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            03 — صناعة المحتوى
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">AI كصانع محتوى</h1>
        </div>

        {/* Time comparison */}
        <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm mb-8">
          <h3 className="text-2xl font-bold text-[#475569] mb-6">⏱️ الوقت اللازم لإنتاج حملة كاملة</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xl text-[#94a3b8] mb-2">قبل AI</div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-black text-[#ef4444]">7</span>
                <span className="text-3xl text-[#64748b] mb-2">أيام</span>
              </div>
              <div className="h-4 bg-[#fee2e2] rounded-full">
                <div className="h-full w-full bg-[#ef4444] rounded-full" />
              </div>
            </div>
            <div>
              <div className="text-xl text-[#94a3b8] mb-2">مع AI</div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-6xl font-black text-[#3b82f6]">15</span>
                <span className="text-3xl text-[#64748b] mb-2">دقيقة</span>
              </div>
              <div className="h-4 bg-[#dbeafe] rounded-full">
                <div className="h-full w-[3%] bg-[#3b82f6] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">✍️</div>
            <h4 className="text-3xl font-bold mb-3">ChatGPT</h4>
            <p className="text-xl leading-relaxed opacity-95">
              كتابة أوصاف منتجات ومقالات SEO جذابة في ثوانٍ.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">🎨</div>
            <h4 className="text-3xl font-bold mb-3">Midjourney</h4>
            <p className="text-xl leading-relaxed opacity-95">
              تصاميم وصور إعلانية احترافية بدون جلسات تصوير.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">📧</div>
            <h4 className="text-3xl font-bold mb-3">تخصيص الرسائل</h4>
            <p className="text-xl leading-relaxed opacity-95">
              رسائل بأسلوب رسمي للمدراء، شبابي للطلاب — لنفس المنتج.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-2xl text-[#475569]">
          <span className="font-bold text-[#3b82f6]">نتيجة:</span> توفير حتى{" "}
          <span className="font-black text-3xl text-[#3b82f6]">70%</span> من تكاليف إنتاج المحتوى.
        </div>
      </div>
    </SlideLayout>
  );
}
