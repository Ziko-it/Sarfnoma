import React, { useEffect, useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock(); // Birinchi chaqiruv
    const interval = setInterval(updateClock, 1000); // Har 1 sekundda yangilansin

    return () => clearInterval(interval); // Komponent unmount bo‘lsa tozalash
  }, []);

  return (
    <div className="p-6 font-sans text-black">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-2xl font-semibold">
            Filial Yunusobod 1 (Megaplanet)
          </h1>
          <h2 className="text-[#73757C] text-base">
            Operator: Axmedov Nurlan Botirovich
          </h2>
        </div>
        <div className="text-right">
          <h2 className="text-[#1B1B1B] font-medium text-2xl">{currentTime}</h2>
          <h2 className="text-base font-normal text-[#73757C]">25.04.2025</h2>
        </div>
      </div>

      <div className="mt-[250px]">
        <div className="flex justify-center mb-6">
          <div className="flex w-[299px] h-[105px] p-2 items-start gap-5 bg-white shadow-md rounded-xl">
            <div className="w-[136.5px] h-[89px] bg-[#F3F4F4] rounded-lg flex items-center justify-center">
              <div className="flex flex-col justify-center items-center text-[#8A8C91] text-sm">
                <img
                  src="/assets/icons/icon-2.svg"
                  alt=""
                  className="w-6 h-6 mb-1"
                />
                NFC karta
              </div>
            </div>
            <div className="w-[136.5px] h-[89px] bg-[#F3F4F4] rounded-lg flex items-center justify-center">
              <div className="flex flex-col justify-center items-center text-[#8A8C91] text-sm">
                <img
                  src="/assets/icons/icon-1.svg"
                  alt=""
                  className="w-6 h-6 mb-1"
                />
                QR Kod
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[18px] font-medium mb-1 justify-center flex w-[470px] mx-auto ">
          <span>
            Sotuvni amalga oshirish uchun haydovchining NFC kartasini yoki
            QR-kodini skanerlang!
          </span>
        </div>

        <div className="text-center text-[#73757C] mb-4">yoki</div>

        <div className="flex justify-center">
          <button className="px-6 py-3 bg-[#FF7A2E] text-white rounded-lg flex  items-center gap-2 ">
            <img
              src="/assets/icons/icon-3.svg"
              alt="Sotish"
              className="w-5 h-5"
            />
            <span className="text-[18px]">Sotish</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
