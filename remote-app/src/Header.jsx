import React, { useContext } from 'react'
import { CounterContext } from "store/store";

export default () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Awesome Header</div>
      <div>
        {counter}

        <button
          onClick={() => {
            setCounter(0)
          }}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};