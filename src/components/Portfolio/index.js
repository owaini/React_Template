import React, { useState, useEffect } from "react";
import {
	PortfolioSection,
	PortfolioTitle,
	Span,
	ImageWrapper,
	UlList,
	LiList,
    Img,
	Overlay,
	OverlaySpan,
} from "./style.js";
function Portfolio() {
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		fetch("js/data.json")
			.then((response) => response.json())
			.then((data) => setPortfolio(data.Portfolio))
			.catch((err) => console.log(err.message));
	}, []);

	const listPortfolio = portfolio.map(
		(item) => {
			return (
				<ImageWrapper key={item.id}>
					<Img src={`images/Portfolio/portfolio-img${item.id}.jpg`} alt="" />
					<Overlay>
						<OverlaySpan>Show Image</OverlaySpan>
					</Overlay>
				</ImageWrapper>
			);
		},
		[portfolio]
	);
	return (
		<PortfolioSection>
			<PortfolioTitle>
				<Span>My</Span> Portfolio
			</PortfolioTitle>
			<UlList>
				<LiList active>All</LiList>
				<LiList >HTML</LiList>
				<LiList >Photoshop</LiList>
				<LiList >Wordpress</LiList>
				<LiList >Mobile</LiList>
			</UlList>

			<div className="box">{listPortfolio ? listPortfolio : "No Items"}</div>
		</PortfolioSection>
	);
}

export default Portfolio;
