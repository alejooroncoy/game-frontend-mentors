import { useStore } from "@nanostores/react";
import { $status } from "../../states/status";
import { AnimatePresence, motion } from "framer-motion";
import { navigate } from "astro:transitions/client";

const GameResult = () => {
  const status = useStore($status);

  const title = status !== "tie" ? `You ${status}` : "It's a tie";

  const handleClick = () => {
    $status.set("");
    navigate("/game-frontend-mentors");
  };

  return (
    <AnimatePresence>
      {status && (
        <motion.section
          className="round__result"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2 className="round__result__title">{title}</h2>
          <button onClick={handleClick} className="round__result__btn">
            Play again
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default GameResult;
