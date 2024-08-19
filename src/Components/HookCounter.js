import { useEffect, useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => setCalculation(count * 2), [count]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-xl font-semibold">Count: {count}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <p className="mt-4 text-xl font-semibold">Calculation: {calculation}</p>
    </div>
  );
}

export default HookCounter;
