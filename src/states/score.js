import { persistentAtom } from "@nanostores/persistent";

export const $score = persistentAtom("score", 0, {
  decode: (v) => +v,
});

const updateScore = (newScore) => {
  $score.set(newScore);
};

export const plusScore = () => updateScore($score.get() + 1);

export const lessScore = () =>
  $score.get() - 1 >= 0 && updateScore($score.get() - 1);
