
import React from 'react'

import {NavLink} from 'react-router-dom'
import {
    Container,
	NavBarDiv,
	NavBarLogo,
	NavBarLogoText,
	UlList,
	ListItem,
    Anchor
} from "./style";
function NavBar() {
	return (
		<NavBarDiv>
			<Container>
				<NavBarLogo>
					<NavBarLogoText>React Profile</NavBarLogoText>
				</NavBarLogo>

				<UlList>
					<ListItem className="list-item">
						<Anchor to="/">Home</Anchor>
					</ListItem>
					<ListItem className="list-item">
						<Anchor to="/">Work</Anchor>
					</ListItem>
					<ListItem className="list-item">
						<Anchor to="/">Portfolio</Anchor>
					</ListItem>
					<ListItem className="list-item">
						<Anchor to="/">Resume</Anchor>
					</ListItem>
					<ListItem className="list-item">
						<Anchor to="/">About</Anchor>
					</ListItem>
					<ListItem className="list-item">
						<Anchor to="/contact">Contact</Anchor>
					</ListItem>
				</UlList>
			</Container>
		</NavBarDiv>
	);
}

export default NavBar