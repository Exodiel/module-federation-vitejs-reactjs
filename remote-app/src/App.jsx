import React from 'react';
import Header from "./Header";

import { StoreProvider } from "store/store";

import './index.css'

const App = () => {
  return (
    <StoreProvider>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div>Name: remote</div>
      </div>
    </StoreProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />)