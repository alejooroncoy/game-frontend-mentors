import { useEffect, useState } from "react";
import { $score } from "../../states/score";
import { useStore } from "@nanostores/react";

const Score = ({ className }) => {
  const score = useStore($score);
  const [newScore, setNewScore] = useState(0);

  useEffect(() => {
    setNewScore(score);
  }, [score]);

  return <span className={className}>{newScore}</span>;
};

export default Score;
