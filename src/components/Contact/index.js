
import React from 'react'
import { ContactSection, ContactTitle, Form, FormInput , FormInputChild, FormInputDiv, FormTextarea, Span} from "./style";


function Contact() {
  return (
		<ContactSection>
			<div className="container">
				<ContactTitle>
					<Span>Drop </Span>Me A line
				</ContactTitle>
				<Form action="">
					<FormInputDiv>
						<FormInputChild text type="text" placeholder="Your Name" />
						<FormInputChild email type="email" placeholder="Your Email" />
					</FormInputDiv>
					<FormInput sub type="text" className="sub" placeholder="Your Subject" />
					<FormTextarea
						cols="30"
						rows="10"
						placeholder="Your Message"
					></FormTextarea>
					<FormInput submit="1" type="submit" value="Send Message" />
				</Form>
			</div>
		</ContactSection>
	);
}

export default Contact