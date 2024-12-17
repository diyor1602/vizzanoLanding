export default function AboutUs() {
  return (
    <div className="bg-transparent relative text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">BIZ HAQIMIZDA</h1>
          <p className="text-yellow-400">
            🤝 Diqqat, diqqat! Yaxshi kayfiyatda, quvnoq muhitda ishlashga
            tayyormisiz? Vizzano-ga qo'shiling va kunlaringizni biz bilan zavqli
            o'tkazing! 🤝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-2 gap-2">👥 Do‘stona Jamoa</h2>
            <h3 className="text-xl mb-2">Birga ishlaymiz, birga kulamiz!</h3>
            <p className="text-gray-300">
              Har kuni birga ishlash, birga o‘sish va yangi cho‘qqilarni zabt
              etish imkoniyati. Qulay ish joyi, zamonaviy texnika va do‘stona
              muhit – bizda bor!
            </p>
          </div>
          <div className="bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-2 gap-2">
              💼 Ish Sharoitlari
            </h2>
            <h3 className="text-xl mb-2">Barqaror va o‘z vaqtida to‘lovlar!</h3>
            <p className="text-gray-300">
              📅 Yil bo‘yi ish bilan ta'minlanasiz va oylik ish haqi har oy o‘z
              vaqtida to‘lanadi. Qobiliyatingiz va mehnatingizga yarasha
              2,500,000 dan 5,000,000 so‘mgacha maosh olish imkoniyati!
            </p>
          </div>
          <div className="bg-sky-900 bg-opacity-30  p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-2 gap-2">
              📞 Aloqada Bo‘ling
            </h2>
            <h3 className="text-xl mb-2">Bizni tanlang!</h3>
            <p className="text-gray-300">
              Telefon: <a href="tel: +998 99 512 33 66">+998 99 512 33 66</a>
              <br /> Telegram:{" "}
              <a href="https://www.t.me/Vizzano_HR_1" target="_blank">
                @Vizzano_HR_1
              </a>{" "}
              <br /> 📍 Manzil: Namangan shahar, Promzona, So‘lim Oshxonasi
              ortida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
