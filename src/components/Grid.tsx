import { guessType } from "../hooks/useWordle";
import { Row } from "./Row";

export interface GridProps {
  turn: number;
  currentGuess: string;
  guesses: any[];
  isCorrect: boolean;
}
export const Grid = ({ turn, currentGuess, guesses }: GridProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {guesses.map((item, index) => {
        if (index === turn)
          return (
            <Row
              key={index}
              guess={item as guessType[]}
              currentGuess={currentGuess}
            />
          );
        return <Row key={index} guess={item as guessType[]} />;
      })}
    </div>
  );
};
