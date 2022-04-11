import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>Name: store</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)