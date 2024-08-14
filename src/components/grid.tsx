import { Row } from "./Row";

export interface GridProps {
  turn: number;
  currentGuess: string;
  guesses: any[];
  isCorrect: boolean;
}
export const Grid = ({ turn, currentGuess, guesses, isCorrect }: GridProps) => {
  return (
    <div>
      {guesses.map((item, index) => {
        return <Row key={index} guesses={guesses}/>;
      })}
    </div>
  );
};
