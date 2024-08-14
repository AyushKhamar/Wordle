import "./App.css";
import { data } from "../data";
import { useEffect, useState } from "react";
import { Wordle } from "./components/Wordle";
export default function App() {
  const [word, setWord] = useState<string>("ayush");
  useEffect(() => {
    const randomWord = data[Math.floor(Math.random() * data.length)];
    setWord(randomWord);
  }, []);
  return (
    <main>
      <div className="flex b-2 p-2">{word && <Wordle word={word} />}</div>
    </main>
  );
}
