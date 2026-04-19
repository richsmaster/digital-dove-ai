import { SlideLayout } from "./SlideLayout";

export function Slide6Service({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-50 text-[#3b82f6] text-2xl font-bold mb-4">
            05 — تجربة العميل
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">خدمة عملاء لا تنام</h1>
        </div>

        {/* Hero stat */}
        <div className="bg-gradient-to-l from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] rounded-3xl p-10 text-white shadow-2xl mb-8 flex items-center justify-between">
          <div>
            <div className="text-2xl opacity-90 mb-2">أنظمة التوصية ترفع المبيعات بنسبة</div>
            <div className="text-3xl">مثلما تفعل Netflix بالأفلام — تطبيقات المتاجر تقترح المنتجات بذكاء</div>
          </div>
          <div className="text-right">
            <div className="text-9xl font-black leading-none">+30%</div>
            <div className="text-2xl opacity-90 mt-2">زيادة في المبيعات</div>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="bg-white rounded-2xl p-8 border-2 border-[#e8ecf1]">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-3xl font-bold text-[#475569] mb-4">Chatbot قديم</h3>
            <ul className="space-y-3 text-2xl text-[#64748b]">
              <li>• إجابات محفوظة وجامدة</li>
              <li>• لا يفهم اللغة العادية</li>
              <li>• يُحوّلك لموظف بشري دائماً</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-3xl font-bold mb-4">Chatbot ذكي بـ AI</h3>
            <ul className="space-y-3 text-2xl">
              <li>✓ يفهم لغة البشر الطبيعية</li>
              <li>✓ يحل مشاكل الشحن والإرجاع</li>
              <li>✓ يتمم عملية البيع بالكامل</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
