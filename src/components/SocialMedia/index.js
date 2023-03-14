

import React, { useEffect, useState } from 'react'
import {
	SocialMediaSection,
	SocialWrapper,
	SocialIcon,
	Para,
	PSpan,
} from "./style";
function SocialMedia() {

  const [social, setSocial] = useState([])

  useEffect(()=> {

    fetch('js/data.json')
    .then(res => res.json())
    .then(data => setSocial(data.Social))
    .catch(err => console.log(err.message))
  })

  return (
     <SocialMediaSection>
            
            <SocialWrapper face>
                <SocialIcon className="icon fa fa-facebook fa-lg"></SocialIcon>
                <Para>
                    <PSpan info1>Follow Me on</PSpan>
                    <PSpan className="info2">Social Facebook</PSpan>
                </Para>
            </SocialWrapper>
            
            <SocialWrapper twitter>
                <SocialIcon className="icon fa fa-twitter fa-lg"></SocialIcon>
                <Para>
                    <PSpan info1>Tweet Me on</PSpan>
                    <PSpan className="info2">Social twitter</PSpan>
                </Para>
            </SocialWrapper>
            
            <SocialWrapper pin>
                <SocialIcon className="icon fa fa-pinterest fa-lg"></SocialIcon>
                <Para>
                    <PSpan info1>Pin Me on</PSpan>
                    <PSpan className="info2">Social Pinterest</PSpan>
                </Para>
            </SocialWrapper>
        </SocialMediaSection>
  )
}

export default SocialMedia