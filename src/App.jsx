import React, { useState } from "react";
import { HeartPulseIcon } from "lucide-react";
import { Link } from "react-router-dom";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeter = height / 100;
    const bmiValue = weight / (heightInMeter * heightInMeter);
    setBmi(bmiValue.toFixed(1));

    let cat = "";
    if (bmiValue < 18.5) cat = "Kurus";
    else if (bmiValue < 24.9) cat = "Normal";
    else if (bmiValue < 29.9) cat = "Gemuk";
    else cat = "Obesitas";

    setCategory(cat);
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-500 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full border border-emerald-100">
        <div className="text-center mb-6">
          <HeartPulseIcon className="w-14 h-14 text-emerald-600 mx-auto animate-pulse mb-2" />
          <h1 className="text-3xl font-extrabold text-emerald-700">Kalkulator BMI</h1>
          <p className="text-sm text-gray-500 mt-1">Cek indeks massa tubuh Anda sekarang</p>
        </div>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Berat badan (kg)"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder-gray-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Tinggi badan (cm)"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder-gray-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <div className="flex gap-4">
            <button
              onClick={calculateBMI}
              className="flex-1 bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition font-semibold"
            >
              Hitung
            </button>
            <button
              onClick={resetForm}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition font-semibold"
            >
              Reset
            </button>
          </div>
        </div>

        {bmi && (
          <div className="mt-6 text-center bg-emerald-50 border border-emerald-200 p-4 rounded-xl shadow-inner">
            <p className="text-lg text-gray-700">
              BMI Anda: <span className="font-bold text-xl">{bmi}</span>
            </p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{category}</p>
            <Link to="/detail">
              <button className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition">
                Lihat Detail Hidup Sehat
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
