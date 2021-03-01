import { Span } from "@styles/index.theme";
import Image from "next/image";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import { COMPANY_NAME, COMPANY_SOCIALS } from "../config";
import { headerOptions } from "./header";

const Footer = styled.footer`
	background-color: #233446;
	color: rgba(223, 223, 223, 0.712); ;
`;
const FooterInside = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 800px) {
		justify-content: center;
	}
	@media (max-width: 500px) {
		justify-content: flex-start;
	}
`;
const StyledCopyright = styled.p`
	margin: 0;
	border-top: #2c4258 solid 0.5px;
	font-size: 14px;
	padding: 20px 5%;
	box-sizing: border-box;
	font-size: 20px;
	text-align: left;
	background-color: #233446;
	color: rgba(223, 223, 223, 0.712);
	div {
		max-width: 1200px;
		margin: auto;
	}
	@media (max-width: 700px) {
		font-size: 16px;
	}
`;
const StyledContact = styled.div`
	max-width: 320px;
	text-align: left;
	& h2 {
		font-size: 24px;
	}
`;
const StyledList = styled.ul`
	max-width: 320px;
	text-align: left;
	h2 {
		font-size: 24px;
		color: white;
	}
	li {
		margin: 5px 0;
		div svg {
			transition: transform 0.3s ease;
		}
	}
	li:hover {
		color: #d3d3d3;
		cursor: pointer;
		div svg {
			transform: rotate(90deg);
		}
	}
`;

const services = [
	"Web Development",
	"Database Infrastructure",
	"SEO Services",
	"Graphic Design",
	"Software Development",
];

function Arrow() {
	return (
		<div style={{ marginRight: "5px", display: "inline" }}>
			<IoIosArrowForward />
		</div>
	);
}
const StyledSocials = styled.div`
	display: flex;
	max-width: 120px;
	justify-content: space-evenly;
	a svg {
		color: var(--highlight);
	}
	a:hover {
		svg {
			color: var(--hover);
		}
	}
`;
const size = "30px";
// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<>
			<Footer>
				<FooterInside>
					<StyledContact>
						<Image
							height={90}
							width={270}
							src="/Images/LogoDark.png"
							alt={`${COMPANY_NAME} Logo`}
						/>
						<p>
							{" "}
							We provide 100% custom coded websites with superior
							search engine optimized results
						</p>
						<StyledSocials>
							<a
								href={COMPANY_SOCIALS.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin size={size} />
							</a>
							<a
								href={COMPANY_SOCIALS.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FaFacebook size={size} />
							</a>
							<a
								href={COMPANY_SOCIALS.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram size={size} />
							</a>
						</StyledSocials>
					</StyledContact>
					<StyledList>
						<li>
							<h2>Services</h2>
						</li>
						{services.map((data) => (
							<li key={data}>
								<Arrow />
								{data}
							</li>
						))}
					</StyledList>
					<StyledList>
						<li>
							<h2>Quick Links</h2>
						</li>
						{headerOptions.map((data) => (
							<a href={data[1]} key={data[0]}>
								<li>
									<Arrow />
									{data[0]}
								</li>
							</a>
						))}
						<a href="privacy" key="6">
							<li>
								<Arrow />
								Privacy
							</li>
						</a>
						<a href="terms" key="7">
							<li>
								<Arrow />
								Terms
							</li>
						</a>
					</StyledList>
				</FooterInside>
			</Footer>
			<StyledCopyright>
				<div>
					Copyright © 2021{" "}
					<a href="https://webdefyer.com">
						Designed with <FaHeart color="red" /> by
						<Span> {COMPANY_NAME}</Span>
					</a>
				</div>
			</StyledCopyright>
		</>
	);
}
