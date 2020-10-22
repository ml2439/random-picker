import React from "react";
import { Row, Col } from "antd";
import { RandomPicker } from "../components/RandomPicker";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { ProgressStatus } from "../components/ProgressStatus";
import { WF_START_TIME, WF_DURATION_MIN } from "../data/constants";
import { useCustomImages } from "../hooks/useCustomImages";

const Index = () => {
	const [names, images] = useCustomImages();

	return (
		<>
			<SEO />
			<Layout>
				<Row justify="center" align="middle">
					<Col xs={24} sm={8}>
						<RandomPicker names={names} images={images} />
					</Col>
					<Col xs={24} sm={8}>
						<ProgressStatus
							startTime={WF_START_TIME}
							durationMinutes={WF_DURATION_MIN}
						/>
					</Col>
				</Row>
			</Layout>
		</>
	);
};

export default Index;
