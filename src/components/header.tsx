import { Heading, HStack } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<HStack
			borderTop="5px #5cfff1 solid"
			justify="space-between"
			bg="#1a202c"
			px="50px"
			py="10px"
			as="header"
		>
			<Heading>NextJS Boilerplate</Heading>
			<HStack justify="center" align="center">
				<NextChakraLink
					href="https://github.com/HazimAr/"
					aria-label="Github"
				>
					<FaGithub size="30px" />
				</NextChakraLink>
				<NextChakraLink
					href="https://www.linkedin.com/in/hazim-arafa-a439aa205/"
					aria-label="LinkedIn"
				>
					<FaLinkedin size="30px" />
				</NextChakraLink>
			</HStack>
		</HStack>
	);
}
