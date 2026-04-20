import { SlideLayout } from "./SlideLayout";

type Company = {
  name: string;
  country: string;
  desc: string;
  clients: string;
  accent: string;
  logo: React.ReactNode;
};

const companies: Company[] = [
  {
    name: "Persado",
    country: "🇺🇸 أمريكا",
    desc: "تولّد نصوص إعلانية بـ AI ترفع التحويلات حتى 41%.",
    clients: "JPMorgan, Vodafone",
    accent: "#0ea5e9",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-[#0ea5e9] flex items-center justify-center">
          <span className="text-white font-black text-2xl">P</span>
        </div>
        <span className="text-3xl font-black text-[#0c4a6e] tracking-tight">
          persado
        </span>
      </div>
    ),
  },
  {
    name: "Albert.ai",
    country: "🇺🇸 أمريكا",
    desc: "أول مسوّق رقمي ذاتي بالكامل — يدير الحملات بدون تدخل بشري.",
    clients: "Harley-Davidson",
    accent: "#7c3aed",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center shadow-md">
          <span className="text-white font-black text-2xl">A</span>
        </div>
        <span className="text-3xl font-black text-[#1e293b] tracking-tight">
          albert<span className="text-[#7c3aed]">.ai</span>
        </span>
      </div>
    ),
  },
  {
    name: "Jasper AI",
    country: "🇺🇸 أمريكا",
    desc: "كتابة محتوى تسويقي ومدوّنات بالذكاء الاصطناعي.",
    clients: "+100,000 شركة",
    accent: "#ec4899",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#f472b6] flex items-center justify-center shadow-md">
          <span className="text-white text-2xl">✦</span>
        </div>
        <span className="text-3xl font-black text-[#831843] tracking-tight">
          Jasper
        </span>
      </div>
    ),
  },
  {
    name: "wpro",
    country: "🌐 عالمية",
    desc: "منصة ذكاء اصطناعي متكاملة لإدارة التسويق الرقمي وتحسين الحملات الإعلانية.",
    clients: "علامات تجارية رائدة",
    accent: "#6366f1",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center shadow-md">
          <span className="text-white font-black text-xl">W</span>
        </div>
        <span className="text-3xl font-black text-[#312e81] tracking-tight">
          w<span className="text-[#6366f1]">pro</span>
        </span>
      </div>
    ),
  },
];

export function Slide9Companies({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            07 — أمثلة واقعية
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">شركات تسويق بالذكاء الاصطناعي</h1>

        </div>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {companies.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl p-6 border border-[#e8ecf1] shadow-sm flex flex-col relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: c.accent }}
              />
              <div className="flex items-center justify-between mb-4 mt-2">
                {c.logo}
                <span className="text-lg text-[#64748b]">{c.country}</span>
              </div>
              <p className="text-2xl text-[#475569] leading-relaxed flex-1">{c.desc}</p>
              <div
                className="mt-4 pt-4 border-t border-[#e8ecf1] text-xl font-bold"
                style={{ color: c.accent }}
              >
                👥 {c.clients}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
