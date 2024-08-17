import "./App.css";
import { data } from "../data";
import { useEffect, useState } from "react";
import { Wordle } from "./components/Wordle";
export default function App() {
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
