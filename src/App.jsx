import React, { useState } from "react";
import { HeartPulseIcon } from "lucide-react";
import { Link } from "react-router-dom"; // tambahkan Link

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black px-4">
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-[0_0_20px_#10b98140] w-full max-w-md text-center text-white space-y-6 transition-all">
        <div className="flex flex-col items-center space-y-2">
          <HeartPulseIcon className="w-8 h-8 text-emerald-400 animate-pulse" />
          <h1 className="text-2xl font-bold text-emerald-300">BMI Calculator</h1>
        </div>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Berat (kg)"
            className="w-full p-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Tinggi (cm)"
            className="w-full p-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <div className="flex gap-4">
            <button
              onClick={calculateBMI}
              className="w-full bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition font-semibold"
            >
              Hitung BMI
            </button>
            <button
              onClick={resetForm}
              className="w-full bg-gray-700 text-white py-2 rounded-xl hover:bg-gray-600 transition font-semibold"
            >
              Reset
            </button>
          </div>
        </div>

        {bmi && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div>
              <p className="text-lg font-medium">
                BMI Anda: <span className="font-bold">{bmi}</span>
              </p>
              <p className="text-xl font-semibold text-emerald-400">{category}</p>
            </div>
            <Link to="/detail">
              <button className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl font-semibold transition">
                Lihat Detail
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;