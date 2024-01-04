const win = (va, vb) => {
  if (va - 1 === vb) return true;
  const vbResolve = ((vb + 3) % 6) + (vb > 2);
  return vbResolve === va;
};

const checkStatusGame = (va, vb) => {
  if (win(va, vb)) return "win";
  if (va === vb) return "tie";
  return "lose";
};

export default checkStatusGame;
