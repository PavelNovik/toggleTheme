import React from 'react';
import styled, { keyframes } from "styled-components";
import { withTheme } from "styled-components";
import logo from "./assets/theme-provider-logo.png"

type HeaderPropsType = {
  logo: string
}

const Header = (props: HeaderPropsType) => {
  return (
    <Container >
      <div>
        <Logo src={props.logo} />
      </div>
    </Container>
  );
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 10rem;
  animation: ${props => (props.theme.rotate ? rotate360 : "none")} 2s linear infinite;
`;


const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export default Header;