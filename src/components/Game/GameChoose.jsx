import Piece from "../Piece";
import data from "../../../data/pieces.json";

const GameChoose = () => {
  const pieces = data;

  return (
    <ul className="game__pieces__list">
      {pieces.map((piece) => (
        <Piece key={piece.id} piece={piece} />
      ))}
    </ul>
  );
};

export default GameChoose;
