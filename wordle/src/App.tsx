import { useEffect, useState } from "react";

import { data } from "./utils/data";
import { Wordle } from "./components/Wordle";

function App() {
  const [word, setWord] = useState<string>("ayush");
  useEffect(() => {
    const randomWord =
      data[Math.floor(Math.random() * data.length)].toLocaleUpperCase();
    setWord(randomWord);
  }, []);
  return (
    <main style={{ backgroundColor: "#373F51", color: "white" }}>
      <div>{word && <Wordle word={word} />}</div>
    </main>
  );
}

export default App;
