import { guessType } from "../hooks/useWordle";

export interface RowProps {
  guess: guessType[];
}
export const Row = ({ guess }: RowProps) => {
  const letters = guess ? guess : new Array(5).fill({ key: "", color: "" });
  return (
    <div className="row flex items-center justify center">
      {letters.map((item) => {
        const styles = `p-2 m-2 border-2 h-[100px] w-[100px] text-6xl flex items-center justify-center`;
        return (
          <div className={styles} style={{ backgroundColor: item.color }}>
            {" "}
            {item.key}
          </div>
        );
      })}
    </div>
  );
};
