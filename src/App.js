import { useState } from "react";
import styles from "./app.module.css";

import React from "react";


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Click Counter Game</h1>
      <h2 className={styles.score}>{count < 10 ? `Score: ${count}` : "You Win!"}</h2>
      <button 
        onClick={handleClick} 
        disabled={count >= 10}
        className={styles.button}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;