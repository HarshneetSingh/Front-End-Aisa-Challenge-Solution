import { useState, useEffect } from 'react'
import ResultsList from './components/ResultsList';
import ResultPopUp from './components/ResultPopUp';
import './App.css'

export default function App() {

  // 1: created a state variable to hold the data
  const [data, setData] = useState([]);

  // 2: fetch data.json when this component loads
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())  // convert response to JS object
      .then((json) => setData(json))  // save data into state
      .catch((err) => console.error("Error loading data:", err));
  }, []); // [] means this only runs once when component is first shown

  return (
    <main className="page">
      <div className="card">
        {/* Left side: score + result text */}
        <ResultPopUp data={data} />

        {/* Right side: dynamic list */}
        <section className="summary">
          <h3>Summary</h3>
          <ResultsList data={data} />
          <button className="btn">Continue</button>
        </section>
      </div>
    </main>
  );
}
