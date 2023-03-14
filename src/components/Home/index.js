
import React from 'react'
import About from '../About';
import Portfolio from '../Portfolio'
import Profile from '../profile'
import Services from '../Services'
import SocialMedia from '../SocialMedia';

import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeBtn } from "./style";

function Home() {
  return (
    <div>
     <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Omar Al-Owaini</HomeTitle>
                    <HomeInfo>Full Stack Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
     <Services />
     <Portfolio />
     <Profile />
     <About />
    <SocialMedia />
    
    </div>
  )
}

export default Home