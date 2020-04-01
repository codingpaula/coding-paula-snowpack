import React from "/web_modules/react.js";
import styled from "/web_modules/styled-components.js";
import SyntaxHighlighter from "/web_modules/react-syntax-highlighter.js";
import { ocean } from "./ocean.js";
const code = "# properly introduce yourself\ndef goodManners():\n    print('my name is Paula.')";
const customStyles = {
  padding: "1rem 1.5rem",
  borderRadius: "1rem"
};
const AppDiv = styled.div`
	padding: 20vh 20vw 10vh 15vw;
	font-family: 'Nunito', sans-serif;

	@media(max-width: 600px) {
		padding: 10vh 10vw 8vh 10vw;
	}
`;
const Container = styled.div`
	position: relative;
	width: 40vw;

	@media(max-width: 1000px) {
		width: 60vw;
	}
	@media(max-width: 600px) {
		width: 75vw;
	}
`;
const H1 = styled.h1`
	font-weight: 800;
`;
const P = styled.p`
	font-size: 1.6em;
	font-weight: 300;
	line-height: 1.4;
	max-width: 63vw;
`;
const Link = styled.a`
	color: #000;
	position: relative;
	border: none;
	text-decoration: none;
	transition: height 2s;
	&:after {
		content: "";
		opacity: 0.5;
		position: absolute;
		bottom: 0;
		top: 60%;
		left: -0.15rem;
		right: -0.15rem;
		background-color: #896279;
		z-index: -1;
		transition: all 0.5s;
		-webkit-transition: all 0.5s;
	}
	&:hover:after {
		top: 0px;
	}
`;

const App = () => {
  return /*#__PURE__*/React.createElement(AppDiv, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(H1, null, "Hello."), /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: "python",
    style: ocean,
    customStyle: customStyles
  }, code), /*#__PURE__*/React.createElement(P, null, "I am a cognitive scientist and software developer based in Osnabr\xFCck, Germany. Currently, I work as a frontend web developer."), /*#__PURE__*/React.createElement(P, null, "Here at ", /*#__PURE__*/React.createElement(Link, {
    href: "https://www.github.com/munapaula"
  }, "Github"), " you can check out some of my work or add me at ", /*#__PURE__*/React.createElement(Link, {
    href: "https://www.linkedin.com/m-paula-ritter"
  }, "LinkedIn"), ".")));
};

export default App;