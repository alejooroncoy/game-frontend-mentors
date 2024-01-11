import { forwardRef } from "react";
import { BASE } from "../../constants";

export const Piece = forwardRef(
  ({ piece, style = {}, className = "" }, ref) => {
    return (
      <article
        ref={ref}
        className={"piece ".concat(className).trimEnd()}
        style={{
          ...style,
          backgroundImage: `url("${`${BASE}/pieces/icon-${piece.name}.svg`}")`,
        }}
      ></article>
    );
  }
);
export default Piece;
