import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AboutSection = styled.div`
	height: 500px;
	background: url("./images/creative/about-bg.jpg");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	@media (max-width: 991px) {
	
			height: auto;

		.creative .creative-info {
			width: 100%;
			padding-top: 10px;
			float: none;
		}

		.creative .creative-info .info-dir {
			font-size: 30px;
		}
	}
`;
export const AboutInfo = styled.div`
	padding-top: 100px;
	width: 50%;
	float: right;

	@media (max-width: 991px) {

			width: 100%;
			padding-top: 10px;
			float: none;
	
	}
`;

export const AboutTitle = styled.h2`
	font-weight: bold;
	font-size: 50px;
`;

export const AboutTitleSpan = styled.span`
	font-weight: normal;
`;

export const AboutDir = styled.h4`
	font-size: 40px;
	color: #eb5424;
	margin-bottom: 20px;

	@media (max-width: 991px) {

			font-size: 30px;

	}
`;

export const Anchor = styled(Link)`
	text-decoration: none;
`;

export const AboutDesc = styled.p`
	color: #000;
	margin-bottom: 15px;
	line-height: 1.8;
`;
