import { SlideLayout } from "./SlideLayout";

/**
 * جميع الأرقام موثّقة من:
 * ¹ Salesforce — State of the AI Connected Customer, 2024
 * ² McKinsey & Company — The State of AI in Early 2024, Feb 2024
 * ³ McKinsey & Company — Next in Personalization 2021
 */

export function Slide3Data({ page, total }: { page: number; total: number }) {
  const bars = [
    {
      label: "يتوقعون تجارب مخصصة",
      value: 71,
      ref: "¹",
      source: "Salesforce 2024",
    },
    {
      label: "يشعرون بالإحباط دون تخصيص",
      value: 76,
      ref: "³",
      source: "McKinsey 2021",
    },
    {
      label: "المسوّقون يستخدمون AI فعلياً",
      value: 75,
      ref: "¹",
      source: "Salesforce 2024",
    },
    {
      label: "يشعرون أن العلامة تعاملهم كأفراد",
      value: 73,
      ref: "¹",
      source: "Salesforce 2024",
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

            {/* Stat 1 — Salesforce */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl p-8 text-white shadow-xl flex-1">
              <div className="text-7xl font-black mb-1">73%</div>
              <div className="text-2xl leading-snug">
                من العملاء يشعرون أن العلامات تعاملهم كأفراد
              </div>
              {/* Explanation */}
              <div className="mt-4 pt-4 border-t border-white/20 text-xl text-blue-100 leading-relaxed">
                أي أن الذكاء الاصطناعي نجح في تحويل التسويق من
                {" "}<span className="line-through text-white/50">رسائل جماعية للكل</span>{" "}
                إلى <span className="font-bold text-white">تجربة شخصية لكل عميل</span>.
                <br />
                <span className="text-blue-200 text-lg">📈 كان 39% فقط في 2023</span>
              </div>
              <div className="mt-3 text-blue-200 text-lg font-semibold">
                ¹ Salesforce 2024
              </div>
            </div>

            {/* Stat 2 — McKinsey */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm flex-1">
              <div className="text-7xl font-black text-[#1e293b] mb-1">50×</div>
              <div className="text-2xl text-[#475569] leading-snug">
                أسرع في توليد المحتوى التسويقي بالذكاء الاصطناعي
              </div>
              <div className="mt-3 text-[#3b82f6] text-lg font-semibold">
                ² McKinsey 2024
              </div>
            </div>

          </div>

          {/* Chart column */}
          <div className="col-span-3 bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm flex flex-col">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-1">تأثير AI على تجربة العميل</h3>
            <p className="text-xl text-[#94a3b8] mb-6">بيانات موثّقة — Salesforce &amp; McKinsey</p>

            <div className="space-y-5 flex-1">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-semibold text-[#334155]">
                      {b.label}
                      <sup className="text-[#3b82f6] text-base ml-1">{b.ref}</sup>
                    </span>
                    <span className="text-3xl font-black text-[#3b82f6]">{b.value}%</span>
                  </div>
                  <div className="h-6 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-[#3b82f6] to-[#60a5fa] rounded-full"
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                  <div className="text-right text-lg text-[#94a3b8] mt-1 italic">{b.source}</div>
                </div>
              ))}
            </div>

            {/* ── Footnotes ── */}
            <div className="mt-4 pt-4 border-t border-[#e8ecf1] space-y-1">
              <p className="text-lg text-[#64748b]">
                <sup className="text-[#3b82f6] font-bold">¹</sup>{" "}
                Salesforce —{" "}
                <em>State of the AI Connected Customer</em>, 2024.
              </p>
              <p className="text-lg text-[#64748b]">
                <sup className="text-[#3b82f6] font-bold">²</sup>{" "}
                McKinsey &amp; Company —{" "}
                <em>The State of AI in Early 2024</em>, Feb 2024.
              </p>
              <p className="text-lg text-[#64748b]">
                <sup className="text-[#3b82f6] font-bold">³</sup>{" "}
                McKinsey &amp; Company —{" "}
                <em>Next in Personalization 2021</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
