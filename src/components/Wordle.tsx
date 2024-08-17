import { useEffect } from "react";
import { guessType, useWordle, useWordleProps } from "../hooks/useWordle";
import { Grid } from "./Grid";

export const Wordle = ({ word }: useWordleProps) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useWordle({
    word: word,
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  console.log("wordle component", guesses);
  return (
    <>
      <div>The solution is = {word}</div>
      <div>The word you entered is - {currentGuess}</div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        isCorrect={isCorrect}
        turn={turn}
      />
    </>
  );
};
