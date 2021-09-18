import {
	Box,
	Image,
	Center,
	VStack,
	HStack,
	Text,
	Button,
} from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return (
		<Center>
			<HStack spacing={10}>
				<Card>
					<Text>This is my favoriate text box ever</Text>
				</Card>
				<Card>
					<Text>Free Roblox Hacks</Text>
					<Button> Free Robux</Button>
				</Card>
				<Card>
					<Text>This is my favoriate text box ever</Text>
				</Card>
			</HStack>
		</Center>
	);
}

function Card({ children }) {
	return (
		<VStack
			rounded="10px"
			bg="brand.primary"
			boxSize="200px"
			color="black"
			align="center"
			p="20px"
		>
			{children}
		</VStack>
	);
}
