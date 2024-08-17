import { motion } from "framer-motion";
export interface ModalProps {
  isCorrect: boolean;
  turn: number;
  solution: string;
}

export const Modal = ({ isCorrect, turn, solution }: ModalProps) => {
  let message = "";
  if (isCorrect)
    message = "Congratulations! You guessed the word in " + turn + " tries!!!";
  if (turn > 5) message = "You ran out of turns. The word was " + solution;
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" text-2xl p-2 mx-2 flex items-center justify-center"
    >
      {" "}
      <div>{message}</div>
    </motion.div>
  );
};
