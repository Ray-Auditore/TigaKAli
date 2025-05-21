import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black text-white px-4">
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-[0_0_20px_#8b5cf640] w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-400">
          Informasi Detail BMI
        </h1>

        <div className="space-y-4 text-white">
          <div>
            <h2 className="text-xl font-semibold text-purple-300">Kurus</h2>
            <p className="text-sm text-gray-300">
              BMI di bawah 18.5. Anda mungkin perlu menambah asupan kalori dan
              memperhatikan asupan nutrisi.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-emerald-400">Normal</h2>
            <p className="text-sm text-gray-300">
              BMI antara 18.5 dan 24.9. Berat badan Anda ideal, pertahankan gaya
              hidup sehat.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">Gemuk</h2>
            <p className="text-sm text-gray-300">
              BMI antara 25 dan 29.9. Anda mungkin memiliki kelebihan berat
              badan, pertimbangkan olahraga teratur.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-400">Obesitas</h2>
            <p className="text-sm text-gray-300">
              BMI 30 ke atas. Disarankan konsultasi dengan profesional kesehatan
              untuk rencana penurunan berat badan.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link to="/">
            <button className="bg-emerald-500 hover:bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold transition">
              Kembali ke Kalkulator
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;