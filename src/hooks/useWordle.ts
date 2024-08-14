import { useState } from "react";
export interface useWordleProps {
  word: string;
}
export const useWordle = ({ word }: useWordleProps) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState<string[]>([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'grey', b: 'green', c: 'yellow'} etc
  //new guess - match the guessed words letter to show us green yellow or grey
  const addNewGuess = () => {};
  //formatted guess, and add to history of guesses
  const formatGuess = () => {
    let solutionArray = [...word];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
    //find green colors
    for (let i = 0; i < solutionArray.length; i++)
      if (solutionArray[i] === formattedGuess[i].key)
        (formattedGuess[i].color = "green"), (solutionArray[i] = "");
    //find yellow colors
    for (let i = 0; i < formattedGuess.length; i++) {
      if (
        solutionArray.includes(formattedGuess[i].key) &&
        formattedGuess[i].color !== "green"
      ) {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(formattedGuess[i].key)] = "";
      }
    }
    console.log("formatting the guess", currentGuess);
    return formattedGuess;
  };
  //handle the submit part
  const handleKeyUp = (e: any) => {
    const key = e.key;
    if (key === "Enter") {
      //turn less than 5, do not allow duplicate, check if length is 5
      if (turn > 5) {
        console.log("no more turns");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("already tried that word");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("word must be 5 letters");
        return;
      }
      const formattedGuess = formatGuess();
      console.log(formattedGuess);
    }
    if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
      return;
    }
    if (/^[a-zA-Z]*$/.test(key)) {
      if (currentGuess.length < 5)
        setCurrentGuess((currentGuess) => currentGuess + key);
    }
    console.log(currentGuess);
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};
