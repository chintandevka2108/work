import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { rates, names, loading } = useCurrencyInfo(from);
  const options = Object.keys(rates);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (rates[to]) {
      setConvertedAmount(amount * rates[to]);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading currency data...
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/20 shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-400 drop-shadow-md">
          💱 Currency Converter
        </h1>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/40 focus:ring-2 focus:ring-orange-400 outline-none placeholder-white/70"
            placeholder="Enter amount"
          />
        </div>

        {/* From & To Currency */}
        <div className="flex items-center justify-between mb-4">
          {/* From Currency */}
          <div className="w-1/2 mr-2">
            <label className="block text-white font-medium mb-2">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white border border-white/40 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              {options.map((currency) => (
                <option
                  key={currency}
                  value={currency}
                  className="bg-gray-800 text-white"
                >
                  {currency} – {names[currency] || "Unknown"}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={swap}
            className="px-3 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition mt-6 shadow-lg"
          >
            ⇆
          </button>

          {/* To Currency */}
          <div className="w-1/2 ml-2">
            <label className="block text-white font-medium mb-2">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white border border-white/40 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              {options.map((currency) => (
                <option
                  key={currency}
                  value={currency}
                  className="bg-gray-800 text-white"
                >
                  {currency} – {names[currency] || "Unknown"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={convert}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
        >
          Convert
        </button>

        {/* Result */}
        {convertedAmount !== 0 && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-white drop-shadow-sm">
              {amount} {from} =
            </p>
            <p className="text-3xl font-bold text-green-300 drop-shadow-lg">
              {convertedAmount.toFixed(2)} {to}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
