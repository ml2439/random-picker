import { graphql, useStaticQuery } from "gatsby";

export const useCustomImages = () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { dir: { regex: "/images/workflow/" } }) {
				images: edges {
					node {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
						name
						id
					}
				}
			}
		}
	`);
	const { images } = data.allFile;

	const imageData = images.reduce(
		(acc, cur) => {
			const name = cur.node.name;
			if (name !== "start" && name !== "end") {
				acc.names.push(name);
			}
			acc.images[name] = cur.node;
			return acc;
		},
		{ names: [], images: {} }
	);

	return [imageData.names, imageData.images];
};
