import { SlideLayout } from "./SlideLayout";

export function Slide9Companies({ page, total }: { page: number; total: number }) {
  const companies = [
    {
      name: "Persado",
      country: "🇺🇸 أمريكا",
      desc: "تولّد نصوص إعلانية بـ AI ترفع التحويلات حتى 41%.",
      clients: "JPMorgan, Vodafone",
      color: "from-[#3b82f6] to-[#2563eb]",
    },
    {
      name: "Albert.ai",
      country: "🇺🇸 أمريكا",
      desc: "أول مسوّق رقمي ذاتي بالكامل — يدير الحملات بدون تدخل بشري.",
      clients: "Harley-Davidson",
      color: "from-[#8b5cf6] to-[#7c3aed]",
    },
    {
      name: "Jasper AI",
      country: "🇺🇸 أمريكا",
      desc: "كتابة محتوى تسويقي ومدوّنات بالذكاء الاصطناعي.",
      clients: "+100,000 شركة",
      color: "from-[#10b981] to-[#059669]",
    },
    {
      name: "HubSpot AI",
      country: "🇺🇸 أمريكا",
      desc: "أتمتة CRM وتخصيص رسائل البريد لكل عميل.",
      clients: "+200,000 شركة",
      color: "from-[#f97316] to-[#ea580c]",
    },
    {
      name: "Adext AI",
      country: "🇲🇽 المكسيك",
      desc: "يوزّع ميزانيات إعلانات Google وFacebook تلقائياً للأفضل أداءً.",
      clients: "وكالات عالمية",
      color: "from-[#ec4899] to-[#db2777]",
    },
    {
      name: "Crayon",
      country: "🇸🇦 السعودية",
      desc: "منصة عربية لتحليل المنافسين وتوليد محتوى تسويقي ذكي.",
      clients: "stc, مصارف خليجية",
      color: "from-[#06b6d4] to-[#0891b2]",
    },
  ];

  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            07 — أمثلة واقعية
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">شركات تسويق بالذكاء الاصطناعي</h1>
          <p className="text-2xl text-[#64748b] mt-3">روّاد عالميون وعرب يقودون الثورة</p>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {companies.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl p-7 border border-[#e8ecf1] shadow-sm flex flex-col"
            >
              <div
                className={`w-full h-2 rounded-full bg-gradient-to-l ${c.color} mb-5`}
              />
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-3xl font-black text-[#1e293b]">{c.name}</h3>
                <span className="text-xl text-[#64748b]">{c.country}</span>
              </div>
              <p className="text-2xl text-[#475569] leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-4 pt-4 border-t border-[#e8ecf1] text-xl text-[#3b82f6] font-bold">
                👥 {c.clients}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
