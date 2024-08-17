import { useEffect, useState } from "react";
import { guessType, useWordle, useWordleProps } from "../hooks/useWordle";
import { Grid } from "./Grid";
import Keypad from "./Keypad";
import { Modal } from "./Modal";

export const Wordle = ({ word }: useWordleProps) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } =
    useWordle({
      word: word,
    });
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect)
      console.log("You Win"),
        window.removeEventListener("keyup", handleKeyUp),
        setShowModal(true);
    if (turn > 5)
      console.log("turns overr"),
        window.removeEventListener("keyup", handleKeyUp),
        setShowModal(true);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, turn]);
  useEffect(() => {
    //console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  //console.log("wordle component", guesses);
  console.log(word);
  return (
    <>
      <div className="flex items-center justify-center text-6xl p-5 ">
        Wordle
      </div>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={word} />}
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        isCorrect={isCorrect}
        turn={turn}
      />
      <Keypad usedKeys={usedKeys} />
    </>
  );
};
