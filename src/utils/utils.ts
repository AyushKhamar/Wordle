export const initialScale = { scale: 0 };
export const finalScale = { scale: 1 };
export const style = { type: "spring", stiffness: 260, damping: 20 };
export const animationStyle = {
  initial: { ...initialScale },
  animate: { ...finalScale },
  transition: { ...style },
};
