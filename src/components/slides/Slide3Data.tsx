import { SlideLayout } from "./SlideLayout";

/**
 * قدرات AI في فهم العميل
 * نسبة الفعالية مقارنة بالأساليب التقليدية
 */

export function Slide3Data({ page, total }: { page: number; total: number }) {
  const bars = [
    {
      label: "تتبع السلوك",
      value: 92,
      icon: "🎯",
    },
    {
      label: "التحليل التنبؤي",
      value: 87,
      icon: "📊",
    },
    {
      label: "تخصيص العروض",
      value: 95,
      icon: "✨",
    },
    {
      label: "كشف الاتجاهات",
      value: 78,
      icon: "📈",
    },
  ];

  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">

        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            02 — تحليل البيانات
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">كيف يفهم AI العميل؟</h1>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-8">

          {/* Stats column */}
          <div className="col-span-2 flex flex-col gap-5">

            {/* Stat 1 — Top capability */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl p-8 text-white shadow-xl flex-1">
              <div className="text-7xl font-black mb-1">95%</div>
              <div className="text-2xl leading-snug font-bold">
                تخصيص العروض
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xl text-blue-100 leading-relaxed">
                أعلى قدرة لدى AI في فهم العميل وتقديم
                {" "}<span className="font-bold text-white">العرض المناسب في اللحظة المناسبة</span>.
              </div>
            </div>

            {/* Stat 2 — Example */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm flex-1">
              <div className="text-4xl mb-3">💡</div>
              <div className="text-xl font-bold text-[#1e293b] mb-2">مثال حي</div>
              <div className="text-lg text-[#475569] leading-relaxed">
                اشتريت هاتفاً؟ يتوقع AI أنك ستحتاج
                {" "}<span className="font-bold text-[#3b82f6]">غطاء حماية</span>{" "}
                ويعرض إعلانه لك خلال دقائق.
              </div>
            </div>

          </div>

          {/* Chart column */}
          <div className="col-span-3 bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm flex flex-col">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-1">قدرات AI في فهم العميل</h3>
            <p className="text-xl text-[#94a3b8] mb-6">نسبة الفعالية مقارنة بالأساليب التقليدية</p>

            <div className="space-y-5 flex-1">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-semibold text-[#334155]">
                      <span className="ml-2">{b.icon}</span>
                      {b.label}
                    </span>
                    <span className="text-3xl font-black text-[#3b82f6]">{b.value}%</span>
                  </div>
                  <div className="h-6 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-[#3b82f6] to-[#60a5fa] rounded-full"
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── مثال توضيحي ── */}
            <div className="mt-4 pt-4 border-t border-[#e8ecf1]">
              <p className="text-lg text-[#64748b] leading-relaxed">
                <span className="font-bold text-[#3b82f6]">💡 مثال:</span>{" "}
                اشتريت هاتفاً؟ يتوقع AI أنك ستحتاج غطاء حماية ويعرض إعلانه لك خلال دقائق
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
