export interface RowProps  {
  guesses:any[]
}
export const Row = ({guesses}:RowProps) => {
  return (
    <div className="row flex items-center justify center">
      <div className="p-2 m-2 b-2"></div>
      <div className="p-2 m-2 b-2"></div>
      <div className="p-2 m-2 b-2"></div>
      <div className="p-2 m-2 b-2"></div>
      <div className="p-2 m-2 b-2"></div>
    </div>
  );
};
