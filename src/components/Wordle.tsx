import { useEffect } from "react";
import { useWordle, useWordleProps } from "../hooks/useWordle";

export const Wordle = ({ word }: useWordleProps) => {
  const { currentGuess, handleKeyUp } = useWordle({ word: word });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  return (
    <>
      <div>The solution is = {word}</div>
      <div>The word you entered is - {currentGuess}</div>
    </>
  );
};
