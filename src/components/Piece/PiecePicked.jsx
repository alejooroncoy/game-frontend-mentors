import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import getRandomPiece from "../../libs/getRandomPiece.js";
import Piece from "./Piece.jsx";
import checkStatusGame from "../../libs/checkStatusGame.js";
import { $status } from "../../states/status.js";
import { lessScore, plusScore } from "../../states/score.js";

const PieceAnimated = motion(Piece);

const PiecePicked = ({ pieces, pieceUserPicked }) => {
  const refHomePicked = useRef(null);
  const [piece, setPiece] = useState(null);

  const handleAnimationEnd = () => {
    setPiece(getRandomPiece(pieces));
  };

  const handleCheckStatus = () => {
    const status = checkStatusGame(pieceUserPicked.value, piece.value);

    $status.set(status);

    if (status === "win") {
      const refUserPicked = document.querySelector("#pieceUser");
      plusScore();
      refUserPicked.classList.add("piece--winner");
      return;
    }

    if (status === "lose") {
      refHomePicked.current.classList.add("piece--winner");
      lessScore();
      return;
    }
  };

  useEffect(() => {
    if (piece) handleCheckStatus();
  }, [piece]);

  return (
    <section className="picked">
      <h2 className="picked__title">The house picked</h2>
      <AnimatePresence>
        {piece ? (
          <PieceAnimated
            ref={refHomePicked}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="piece--picked"
            style={{
              "--color-from": `var(--${piece.name}-from)`,
              "--color-to": `var(--${piece.name}-to)`,
            }}
            piece={piece}
          />
        ) : (
          <div
            onAnimationEnd={handleAnimationEnd}
            className="picked__loading"
          ></div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PiecePicked;
