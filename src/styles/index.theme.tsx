import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: var(--highlight);
	color: white;
	font-size: 20px;
	width: fit-content;
	padding: 10px 40px;
	font-weight: 500;
	transition: background-color ease-in-out 0.4s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	font-family: "Sarabun", sans-serif;
	border-radius: 30px;
	display: flex;
	align-items: center;
	div {
		margin-left: 20px;
	}
	svg {
		display: inline;
		transition: transform 0.3s ease;
	}
	&:hover {
		cursor: pointer;
		background-color: var(--hover);
		svg {
			transform: translateX(10px);
		}
	}
`;

function Arrow() {
	return <IoIosArrowForward />;
}

function Button(
	{ children }: { children: React.ReactNode },
	props: {
		type?: "submit" | "button" | "reset";
	}
): JSX.Element {
	return (
		<StyledButton type={props.type}>
			{children}
			<div />
			<Arrow />
		</StyledButton>
	);
}

const Span = styled.span`
	color: var(--highlight);
	font-family: var(--title);
`;
export { Button as StyledButton, Span };
