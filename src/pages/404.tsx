import { Heading, Link } from "@chakra-ui/react";

export default function FourOhFour(): JSX.Element {
	return (
		<>
			<Heading as="h1">404 Page not Found</Heading>
			<Heading as="h3">Edit this page in /src/pages/404</Heading>
			<Link href="/">Go back home</Link>
		</>
	);
}
