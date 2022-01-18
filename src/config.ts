// google analytics measurement id
const GA_TRACKING_ID = "";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "NextJS ChakraUI Template | Hazim Arafa",
	lang: "en-us",
	description:
		"Boilerplate built to scale containing Typescript + NextJS + ChakraUI + Google Analytics + ESLint + Jest + Styled Components + Icons",
	url: "https://boilerplate.hazimarafa.tech",
	image: "/logo.png",
	tags: ["nextjs", "typescript", "chakraui", "google analytics", "eslint", "jest", "styled components", "icons"]
};

export { GA_TRACKING_ID, META };
