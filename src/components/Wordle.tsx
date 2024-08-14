import { useEffect } from "react";
import { useWordle, useWordleProps } from "../hooks/useWordle";
import { Grid } from "./grid";

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
