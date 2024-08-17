import { useState } from "react";
import { letters as listOfLetters } from "../../data";

export interface KeypadProps {
  usedKeys: Map<string, string>;
}
export default function Keypad({ usedKeys }: KeypadProps) {
  const [letters, setLetters] = useState(listOfLetters);

  return (
    <div className="flex mx-auto my-[20px] max-w-[700px] flex-wrap items-center justify-center">
      {letters &&
        letters.map((l) => {
          const key = l.key.toLocaleUpperCase();
          const color = usedKeys.get(key);
          //console.log(l.key, usedKeys.get(l.key));
          return (
            <div
              key={key}
              className="w-[50px] h-[60px] flex items-center justify-center border-2 rounded-md mx-1 my-2"
              style={{ backgroundColor: color }}
            >
              <div>{key}</div>
            </div>
          );
        })}
    </div>
  );
}
