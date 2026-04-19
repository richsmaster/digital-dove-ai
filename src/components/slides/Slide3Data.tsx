import { SlideLayout } from "./SlideLayout";

export function Slide3Data({ page, total }: { page: number; total: number }) {
  const bars = [
    { label: "تتبع السلوك", value: 92 },
    { label: "التحليل التنبؤي", value: 87 },
    { label: "تخصيص العروض", value: 95 },
    { label: "كشف الاتجاهات", value: 78 },
  ];

  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            02 — تحليل البيانات
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">كيف يفهم AI العميل؟</h1>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-8">
          {/* Stats column */}
          <div className="col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm">
              <div className="text-7xl font-black text-[#3b82f6] mb-2">2.5B</div>
              <div className="text-2xl text-[#475569]">نقطة بيانات تُحلل يومياً لكل علامة كبرى</div>
            </div>
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl p-8 text-white shadow-xl">
              <div className="text-7xl font-black mb-2">89%</div>
              <div className="text-2xl">دقة التوقعات السلوكية للعملاء</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm">
              <div className="text-7xl font-black text-[#1e293b] mb-2">0.3s</div>
              <div className="text-2xl text-[#475569]">زمن اتخاذ القرار التسويقي</div>
            </div>
          </div>

          {/* Chart column */}
          <div className="col-span-3 bg-white rounded-2xl p-10 border border-[#e8ecf1] shadow-sm">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-2">قدرات AI في فهم العميل</h3>
            <p className="text-xl text-[#94a3b8] mb-8">نسبة الفعالية مقارنة بالأساليب التقليدية</p>

            <div className="space-y-7">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-semibold text-[#334155]">{b.label}</span>
                    <span className="text-3xl font-black text-[#3b82f6]">{b.value}%</span>
                  </div>
                  <div className="h-6 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-end pl-3"
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e8ecf1] text-xl text-[#64748b] leading-relaxed">
              💡 <span className="font-bold text-[#3b82f6]">مثال:</span> اشتريت هاتفاً؟
              يتوقع AI أنك ستحتاج غطاء حماية ويعرض إعلانه لك خلال دقائق.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
