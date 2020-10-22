/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const Header = () => {
  return (
    <div
      css={css`
        margin: 0;
        padding: 3rem;
        text-align: center;
        font-size: 2rem;
        background-color: rgba(248, 207, 28, 0.2);
      `}
    >
      Who's Up Next?
    </div>
  );
};
