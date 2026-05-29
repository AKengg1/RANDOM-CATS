import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://api.freeapi.app/api/v1/public/cats/cat/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  }, [counter]);

  return (
    <div className="card">
      <h1>Random Cat Image</h1>
      <article>
        <h3>{data?.name}, </h3>
        {data?.temperament}
      </article>
      <h6>ORIGIN: {data?.origin}</h6>
      <p>{data?.description}</p>

      <a href={data?.wikipedia_url} target="_blank" rel="noopener noreferrer">
        Learn more about this cat
      </a>
      <img src={data?.image} alt="" />
      <button onClick={() => setCounter(counter + 1)}>Get New Cat Image</button>
    </div>
  );
}

export default App;
