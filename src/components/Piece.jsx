const Piece = ({ piece }) => {
  return (
    <li className="game__pieces__item">
      <article
        className="piece"
        style={{
          backgroundImage: `url("${`/pieces/icon-${piece.name}.svg`}")`,
        }}
      ></article>
    </li>
  );
};

export default Piece;
