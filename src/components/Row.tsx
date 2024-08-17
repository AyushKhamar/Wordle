import { guessType } from "../hooks/useWordle";
import { motion } from "framer-motion";
import { animationStyle } from "./utils";

export interface RowProps {
  guess?: guessType[];
  currentGuess?: string;
}
export const Row = ({ guess, currentGuess }: RowProps) => {
  const letters = guess ? guess : new Array(5).fill({ key: "", color: "" });
  const styles = `p-2 m-2 border-2 h-[80px] w-[80px] text-6xl flex items-center justify-center rounded-md`;
  if (guess) {
    //console.log("this is guess");
    return (
      <div className="row flex items-center justify center">
        {letters.map((item) => {
          return (
            <motion.div
              {...animationStyle}
              className={styles}
              style={{ backgroundColor: item.color }}
            >
              {" "}
              {item.key}
            </motion.div>
          );
        })}
      </div>
    );
  }
  if (currentGuess) {
    //console.log("This is currentGUess");
    const letters = currentGuess.split("");
    const remainingLength = 5 - letters.length;
    return (
      <div className="row flex items-center justify center">
        {letters.map((item) => {
          return (
            <motion.div {...animationStyle} className={styles}>
              {" "}
              {item}
            </motion.div>
          );
        })}
        {[...Array(remainingLength)].map(() => {
          return <div className={styles}> </div>;
        })}
      </div>
    );
  }
  //console.log("this is normal");
  return (
    <div className="row flex items-center justify center">
      <motion.div {...animationStyle} className={styles}></motion.div>
      <motion.div {...animationStyle} className={styles}></motion.div>
      <motion.div {...animationStyle} className={styles}></motion.div>
      <motion.div {...animationStyle} className={styles}></motion.div>
      <motion.div {...animationStyle} className={styles}></motion.div>
    </div>
  );
};
