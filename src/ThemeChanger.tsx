import React, { useState } from 'react';
import styled from "styled-components";
import { ThemeType } from './App';

type SwitchProps = {
    themes: string[]
    changeTheme: (themeName: string) => void
}
const Switch: React.FC<SwitchProps> = (props) => {

    return (
        <Container>
            <label>
                <select onChange={e => props.changeTheme(e.target.value)}>
                    {props.themes.map(themeName => (
                        <option key={themeName} value={themeName}>
                            {themeName}
                        </option>
                    ))}
                </select>
            </label>
        </Container>
    );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
`;

export default Switch;