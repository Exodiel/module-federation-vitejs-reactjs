import React, { useContext } from 'react'
import Header from "remote/Header";

import { StoreProvider, CounterContext } from "store/store";

import './index.css'

const App = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <StoreProvider>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div>Name: host</div>
        <div>Count: {counter}</div>
        <div>
          <button
            onClick={() => {
              setCounter(counter + 1)
            }}
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </StoreProvider>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />)