

import React,{useState, useEffect} from 'react'
import {
	ProfileSkills,
	ProfileSection,
	UlList,
	LiItem,
	ItemSpan,
	Skills,
	SkillsDesc,
	Bar,
	BarTitle,
	BarPerc,
	BarParent,
	BarParentSpan,
	Title,
  TitleSpan
} from "./style.js";
import GetData from '../../Hooks/getData'

function Profile() {


//   const skills = GetData();	
//   console.log(skills.Profile)
  const [skills, setSkills] = useState([]);



  useEffect(() => {

    fetch('js/data.json')
    .then(response => response.json())
    .then(data => setSkills(data.Profile))
    .catch(err => console.log(err.message))
  },[skills])

  const skillsList = skills?.map(skill => {
    return (
			<Bar key={skill.id}>
				<BarTitle>{skill.title}</BarTitle>
				<BarPerc>{skill.percentage}</BarPerc>
				<BarParent>
					<BarParentSpan sp={skill.percentage} sp1></BarParentSpan>
				</BarParent>
			</Bar>
		);
  })
  return (
		<ProfileSkills>
			<div className="container">
				<ProfileSection>
					<Title>
						<TitleSpan>My </TitleSpan>Profile
					</Title>
					<UlList>
						<LiItem>
							<ItemSpan>Name</ItemSpan>
							Omar Al-Owaini
						</LiItem>
						<LiItem>
							<ItemSpan>Birthday</ItemSpan>
							02/01/1985
						</LiItem>
						<LiItem>
							<ItemSpan>Address</ItemSpan>
							Riyadh
						</LiItem>
						<LiItem>
							<ItemSpan>Phone</ItemSpan>
							053 338 3604
						</LiItem>
						<LiItem>
							<ItemSpan>Email</ItemSpan>
							owainiomar@gmial.com
						</LiItem>
						<LiItem>
							<ItemSpan>Website</ItemSpan>
							<ItemSpan web>www.google.com</ItemSpan>
						</LiItem>
					</UlList>
				</ProfileSection>

				<Skills>
					<Title>
						Some <TitleSpan>skills</TitleSpan>
					</Title>
					<SkillsDesc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						praesentium blanditiis esse cupiditate, omnis similique.
					</SkillsDesc>
            {skillsList}
				</Skills>
			</div>
		</ProfileSkills>
	);
}

export default Profile