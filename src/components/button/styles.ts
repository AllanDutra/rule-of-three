import styled from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;

  background: #a35dff;
  box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.25);

  font-size: 1.25em;
  color: white;
  font-weight: 800;
  font-family: "Sono";
  letter-spacing: -0.5px;
  text-transform: uppercase;
  padding-top: 1.25em;
  padding-bottom: 1.4375em;

  &:active {
    transition: all 0.2s;
    box-shadow: none;
    background: #7a46bf;
    padding-top: 1.4375em;
    padding-bottom: 1.25em;
  }
`;
