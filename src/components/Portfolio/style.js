
import styled from 'styled-components'

export const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 35px
`

export const Span  = styled.span`
    font-weight: normal
`

export const UlList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const LiList = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ? "#eb5424": ''};
    color: ${props => props.active ? "#fff": '#000'};

@media (max-width:575px) {
          display: block;
        margin: auto
      }

`


export const ImageWrapper = styled.div`
	width: 25%;
	float: left;
	font-size: 0;
	position: relative;
	overflow: hidden;
	&:hover > img {
		/* width: 115%; */
		transform: scale(1.2);
	}
	&:hover > div {
		opacity: 1;
	}

	&:hover > div > span {
		top: 50%;
        border-radius: 5px;
        
	}

	@media (max-width: 575px) {
		width: 100%;
	}

	@media (min-width: 576px) and (max-width: 768px) {
		width: 50%;
	}
`;

export const Img = styled.img`
    width: 100%;
    transition: transform .4s;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    	transition: transform 0.4s;

`;

export const OverlaySpan = styled.span`
    
	position: absolute;
	top: -100%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	display: block;
	padding: 10px 20px;
	cursor: pointer;
	border: 2px solid #eb5424;
	transition:  0.4s ease;
`;



