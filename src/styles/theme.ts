import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		secondary: "#171a23",
		primary: "#5cfff1",
	},
	styles: {
		global: () => ({
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				backgroundColor: "secondary",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;
