
import React, {useState, useEffect} from 'react'


import {
	ServicesDiv,
	ServicesTitle,
	ServicesSpan,
	ServicesSection,
	ServicesPart,
	PartTitle,
	PartDesc,
    Line,
    Icon
} from "./style";
function Services() {

const [services, setServices] = useState([]);

let test = 'test'
useEffect(() => {
    fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        setServices(data.Services)
    })
}, [test])

    const servicesList = services?.map((service) => {
			return (
				<ServicesPart key={service.id}>
					<Icon className={service.icon}></Icon>
					<PartTitle>{service.title}</PartTitle>
					<Line />
					<PartDesc>{service.desc}</PartDesc>
				</ServicesPart>
			);
});

  return (
		<ServicesDiv>
			<div className="container">
				<ServicesTitle>
					<ServicesSpan>My</ServicesSpan> Work
				</ServicesTitle>
				<ServicesSection>{servicesList}</ServicesSection>
			</div>
		</ServicesDiv>
	);
}

export default Services