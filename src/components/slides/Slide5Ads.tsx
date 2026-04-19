import { SlideLayout } from "./SlideLayout";

export function Slide5Ads({ page, total }: { page: number; total: number }) {
  // Donut chart for ROI
  const roiSegments = [
    { label: "إعلانات ذكية", value: 68, color: "#3b82f6" },
    { label: "إعلانات تقليدية", value: 32, color: "#e8ecf1" },
  ];
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const smartOffset = circumference * (1 - 0.68);

  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            04 — الإعلانات الذكية
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">Programmatic Advertising</h1>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Real-time bidding flow */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-6">⚡ المزاد اللحظي</h3>
            <div className="space-y-4">
              {[
                { num: "1", text: "العميل يفتح صفحة ويب", time: "0ms" },
                { num: "2", text: "AI يحلل الملف الشخصي", time: "50ms" },
                { num: "3", text: "مزاد بين المعلنين", time: "120ms" },
                { num: "4", text: "يفوز الأنسب ويُعرض الإعلان", time: "200ms" },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="flex-1 text-2xl text-[#334155]">{s.text}</div>
                  <div className="text-xl text-[#3b82f6] font-mono font-bold">{s.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI donut */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 text-white shadow-xl flex flex-col">
            <h3 className="text-3xl font-bold mb-2">📈 العائد على الاستثمار</h3>
            <p className="text-xl text-blue-200 mb-4">ROI — مقارنة الفعالية</p>

            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <svg width="240" height="240" viewBox="0 0 240 240" className="-rotate-90">
                  <circle cx="120" cy="120" r={radius} fill="none" stroke="#334155" strokeWidth="32" />
                  <circle
                    cx="120" cy="120" r={radius} fill="none" stroke="#3b82f6" strokeWidth="32"
                    strokeDasharray={circumference} strokeDashoffset={smartOffset} strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-black">+68%</div>
                  <div className="text-xl text-blue-200">زيادة ROI</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              {roiSegments.map((s) => (
                <div key={s.label} className="flex items-center gap-3 text-xl">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: s.color }} />
                  <span className="flex-1">{s.label}</span>
                  <span className="font-bold">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-r-4 border-[#3b82f6] rounded-xl p-5 text-2xl text-[#1e293b]">
          💰 <span className="font-bold">AI يوقف الإعلانات الخاسرة فوراً</span> ويضخ الميزانية في الحملات الرابحة.
        </div>
      </div>
    </SlideLayout>
  );
}
