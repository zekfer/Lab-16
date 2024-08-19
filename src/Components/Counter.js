import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleDec() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="text-2xl font-semibold mb-4">{counter}</div>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleDec}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
