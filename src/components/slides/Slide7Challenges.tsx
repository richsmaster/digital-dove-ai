import { SlideLayout } from "./SlideLayout";

export function Slide7Challenges({ page, total }: { page: number; total: number }) {
  return (
    <SlideLayout pageNumber={page} totalPages={total}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-orange-50 text-[#ea580c] text-2xl font-bold mb-4">
            06 — التحديات
          </div>
          <h1 className="text-6xl font-black text-[#1e293b]">ليس كل شيء كامل!</h1>
          <p className="text-2xl text-[#64748b] mt-3">رغم الروعة، يواجه المسوقون تحديات حقيقية</p>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Privacy */}
          <div className="bg-white rounded-3xl p-10 border-2 border-[#fee2e2] shadow-lg flex flex-col">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#dc2626] flex items-center justify-center text-6xl mb-6 shadow-md">
              🔒
            </div>
            <h3 className="text-4xl font-black text-[#1e293b] mb-4">الخصوصية</h3>
            <p className="text-2xl text-[#475569] leading-relaxed mb-6 flex-1">
              الناس تخاف على بياناتها. كيف نجمع معلومات كافية للتحليل دون اختراق خصوصية المستخدمين؟
            </p>
            <div className="bg-[#fef2f2] rounded-xl p-5 text-xl text-[#991b1b]">
              ⚠️ قوانين GDPR وحماية البيانات تُلزم الشركات بالشفافية الكاملة.
            </div>
          </div>

          {/* Human touch */}
          <div className="bg-white rounded-3xl p-10 border-2 border-[#fef3c7] shadow-lg flex flex-col">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-6xl mb-6 shadow-md">
              ❤️
            </div>
            <h3 className="text-4xl font-black text-[#1e293b] mb-4">اللمسة البشرية</h3>
            <p className="text-2xl text-[#475569] leading-relaxed mb-6 flex-1">
              مهما كان AI ذكياً، فإنه يفتقر إلى المشاعر. التسويق يحتاج أحياناً لتعاطف بشري لا تستطيع الآلة تقليده.
            </p>
            <div className="bg-[#fffbeb] rounded-xl p-5 text-xl text-[#92400e]">
              💛 الإبداع والقصص العاطفية تبقى ميزة الإنسان الفريدة.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
