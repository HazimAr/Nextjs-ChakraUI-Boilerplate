import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ChakraUI, NextJS } from "@components/icons";
import { FaReact } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { SiEslint, SiGoogleanalytics, SiTypescript } from "react-icons/si";

export default function Home(): JSX.Element {
	return (
		<VStack>
			<VStack justify="center" minH="600px">
				<Heading>Hello, World!</Heading>
			</VStack>
			<Heading>Stack</Heading>
			<Flex flexWrap="wrap" maxW="1300px" justify="center">
				<Card>
					<SiTypescript size="40px" color="#007acd" />
					<Heading color="#52baff">Typescript</Heading>
					<Text>
						Built to ensure long-term usability and a cleaner //
						codebase, We use 100% Typescript
					</Text>
				</Card>
				<Card>
					<ChakraUI />

					<Heading color="#52baff">ChakraUI</Heading>
					<Text>
						Using Chakra UI to create accessible React apps with
						speed and ease
					</Text>
				</Card>
				<Card>
					<NextJS />
					<Heading color="#52baff">NextJS</Heading>
					<Text>
						This template uses NextJS, Jest, Eslint-Config-Galex, //
						Google Analytics
					</Text>
				</Card>
				<Card>
					<GiFeather size="40px" />

					<Heading color="#52baff">Lightweight</Heading>
					<Text>
						Setting the baseline configurations to provide an //
						accelerated development environment
					</Text>
				</Card>
				<Card>
					<SiGoogleanalytics size="40px" color="#f0ae33" />

					<Heading color="#52baff">Google Analytics</Heading>
					<Text>
						You can set a tracking Id in src/config.ts to track //
						analytics
					</Text>
				</Card>
				<Card>
					<SiEslint size="40px" color="purple" />

					<Heading color="#52baff">ESLint</Heading>
					<Text>
						Using a package of 30+ Eslint Plugins to ensure clean //
						code quality and accessibility
					</Text>
				</Card>
				<Card>
					<FaReact size="40px" color="green" />

					<Heading color="#52baff">React Icons</Heading>
					<p>
						Icons from popular packages.{" "}
						<a
							style={{ color: "#00ffaa" }}
							href="https://react-icons.github.io/react-icons"
						>
							All Icons
						</a>
					</p>
				</Card>
			</Flex>
		</VStack>
	);
}

function Card({ children }) {
	return (
		<Box
			maxW="370px"
			w="100%"
			maxH="400px"
			h="250px"
			boxSizing="border-box"
			p="40px"
			m="20px"
			position="relative"
			bg="#2e3748"
			rounded="10px"
			transition="all ease-in-out 0.2s"
			_hover={{ top: "-8px" }}
		>
			{children}
		</Box>
	);
}
