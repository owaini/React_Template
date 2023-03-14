
import React from 'react'
import styled from 'styled-components';


const FooterSection = styled.div`
	text-align: center;
	padding: 10px 0;

	> p {
		color: #888;
	}
`;

const date = new Date();
const fullYear = date.getFullYear()
function Footer() {
  return (
		<FooterSection>
			<p> copyright &copy; {fullYear} by 333 </p>
		</FooterSection>
	);
}

export default Footer