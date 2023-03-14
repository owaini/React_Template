import styled from 'styled-components';


export const ContactSection = styled.div`
	padding: 50px 0;
	text-align: center;
`;
export const ContactTitle = styled.h2`
	font-size: 60px;
	margin-bottom: 30px;

	@media (max-width: 575px) {
			font-size: 40px;
        }
        `;
        export const Form = styled.form`
            width: 100%;
   
        
            @media (max-width: 575px) {
                    width: 90%;
            }
        `;
export const FormInput = styled.input`
	box-sizing: border-box;
	outline: 0;
	padding: 8px 15px;
	margin: 10px 0;
	width: ${(props) => (props.submit === "1" ? "60%" : "100%")};
	background: ${(props) => (props.submit === "1" ? "#2e80dc" : "")};
	border: ${(props) => (props.submit === "1" ? "1px solid #ccc" : "")};
	color: ${(props) => (props.submit === "1" ? "#fff" : "")};
	cursor: ${(props) => (props.submit === "1" ? "pointer" : "")};
	box-sizing: border-box;
	border: 0.2px solid #ccc;
	box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
`;


export const FormTextarea = styled.textarea`
	width: 100%;
	resize: none;
	outline: 0;
	background: #eee;
	padding: 8px 15px;
`;
export const FormInputDiv = styled.div`
	overflow: hidden;
    width: 100%
	/* display: flex;
	justify-content: space-between;
	align-items: center; */
`;
export const FormInputChild = styled.input`
	box-sizing: border-box;
    border: 0.2px solid #ccc;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
	width: 49%;
	margin: 10px 0;
	padding: 8px 15px;
	float: ${(props) => (props.email ? "right" : "left")};
	/* @media (max-width: 575px) {
			width: 100%;

	} */
`;

export const Span = styled.span`
	font-weight: normal;
`;