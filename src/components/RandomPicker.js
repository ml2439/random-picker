/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Button } from "antd";
import Img from "gatsby-image";
import { Picker } from "../utils/picker";
import {
	ContainerVertical,
	ButtonContainer,
	ImgContainer,
} from "./common/containers";
import { ENDING_IMG, STARTING_IMG } from "../data/constants";

export const RandomPicker = ({ names, images }) => {
	const [myPicker, setMyPicker] = useState(new Picker(names));
	const [picked, setPicked] = useState(STARTING_IMG);
	const [displayNext, setDisplayNext] = useState("");
	const [displayDelay, setDisplayDelay] = useState("none");
	const [displayReset, setDisplayReset] = useState("none");

	const handleNext = () => {
		const next = myPicker.pick();
		setDisplayReset("");
		if (!next) {
			setDisplayNext("none");
			setDisplayDelay("none");
			setPicked(ENDING_IMG);
		} else {
			setPicked(next);
			setDisplayDelay("");
		}
	};

	const handleDelay = () => {
		const next = myPicker.delay(picked);
		if (!next) {
			setDisplayNext("none");
			setPicked(ENDING_IMG);
		} else {
			setPicked(next);
		}
	};

	const handleReset = () => {
		setMyPicker(myPicker.reset());
		setPicked(STARTING_IMG);
		setDisplayNext("");
		setDisplayReset("none");
		setDisplayDelay("none");
	};

	return (
		<ContainerVertical>
			<ImgContainer>
				<Img fluid={images[picked]?.childImageSharp.fluid} alt={picked} />
			</ImgContainer>
			<ButtonContainer>
				<Button
					type="primary"
					size="large"
					onClick={handleNext}
					css={css`
						margin: 0 0.5em;
						display: ${displayNext};
					`}
				>
					Next
				</Button>
				<Button
					size="large"
					onClick={handleDelay}
					css={css`
						margin: 0 0.5em;
						display: ${displayDelay};
					`}
				>
					Delay
				</Button>
			</ButtonContainer>
			<ButtonContainer>
				<Button
					danger
					onClick={handleReset}
					css={css`
						margin: 0 0.5em;
						display: ${displayReset};
					`}
				>
					Reset
				</Button>
			</ButtonContainer>
		</ContainerVertical>
	);
};
