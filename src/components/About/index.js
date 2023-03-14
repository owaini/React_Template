
import React from 'react'
import { AboutSection , AboutInfo, AboutDesc, AboutTitle, AboutDir, AboutTitleSpan, Anchor} from "./style";


function About() {
  return (
    <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><AboutTitleSpan>This is</AboutTitleSpan> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor to="/contact">Contact</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                </AboutInfo>
            </div>
        </AboutSection>
        
  )
}

export default About