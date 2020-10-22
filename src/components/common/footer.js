/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const Footer = () => {
	return (
		<div
			css={css`
				margin: 0;
				height: 77px;
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;
				background-color: rgba(248, 207, 28, 0.2);
			`}
		>
			<div
				css={css`
					font-size: 0.8em;
					color: rgba(1, 1, 1, 0.4);
					text-align: right;
					padding: 1em;
				`}
			>{`Random Picker, COVID-19 Edition © ${new Date().getFullYear()}, ML`}</div>
		</div>
	);
};
