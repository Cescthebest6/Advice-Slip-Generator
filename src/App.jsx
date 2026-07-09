import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [adviceId, setAdviceId] = useState(null);
  const [advice, setAdvice] = useState(null);

  /*
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdvice(data.slip.advice);
        setIsLoading(false);
      });
  };
  */

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceId(data.slip.id);
    setAdvice(data.slip.advice);
    setIsLoading(false);
  };

  const handleFetchAdvice = () => {
    setIsLoading(true);
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
    console.log("component has rendered");
  }, []);

  console.log("before render");

  return (
    <>
      <main>
        <h1>Advice Generator APP Updated</h1>
        <div className="card">
          <h3>
            Advice #<span id="advice-id">{isLoading ? "..." : adviceId}</span>
          </h3>

          <div className="advice loading">
            {isLoading && <div className="loader"></div>}
            {!isLoading && <blockquote id="advice">{advice}</blockquote>}
          </div>

          <div className="pattern-divider-wrapper">
            <img
              src="./images/pattern-divider-desktop.svg"
              className="pattern-divider"
              alt="Pattern Divider"
            />
          </div>

          <button id="advice-generator-button" onClick={handleFetchAdvice}>
            <img src="./images/icon-dice.svg" alt="Button Icon" />
          </button>
        </div>
      </main>
      <footer>
        @Advice Generator App | Developed by{" "}
        <a
          href="//https://my-website-mu-six-99.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Amadou Saikou Jallow
        </a>
      </footer>
    </>
  );
}

export default App;
