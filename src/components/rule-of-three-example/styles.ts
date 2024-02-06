import styled from "styled-components";

export const StyledRuleOfThreeExample = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: "Sono";
    font-weight: 800;
    text-align: center;
    line-height: 160%;
    color: white;
    font-size: 1.25em;
    letter-spacing: -2px;

    &.highlighted {
      color: #a35dff;
    }
  }

  span {
    background-color: #ffffff80;
    height: 0.25em;
    width: 2.5em;
    border-radius: 0.3125em;
  }
`;
