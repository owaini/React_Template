import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
	width: 85%;
	margin: auto;
`;

export const NavBarDiv = styled.div`
	padding: 20px 0;
	overflow: hidden;
	background: #fff;
	position: relative;
	border-bottom: 1px solid #000;
`;

export const NavBarLogo = styled.div`
	width: 30%;
	float: left;
`;

export const NavBarLogoText = styled.h2`
	font-size: 30px;
	font-weight: bold;
`;

export const UlList = styled.ul`
	width: 70%;
	float: left;
	list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
	display: inline-block;
`;

export const Anchor = styled(NavLink)`
	display: block;
	color: #222;
	text-decoration: none;
	padding: 10px 10px;
	font-weight: bold;

	&:hover {
		color: #eb5424;
	}
`;