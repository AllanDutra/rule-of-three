import { StyledRuleOfThreeExample } from "./styles";

interface RuleOfThreeExampleProps {
  valueOne: string;
  valueTwo: string;
}

export function RuleOfThreeExample({
  valueOne,
  valueTwo,
}: RuleOfThreeExampleProps) {
  return (
    <StyledRuleOfThreeExample>
      <p>{valueOne || "x"}</p>
      <span />
      <p>{valueTwo || "y"}</p>
    </StyledRuleOfThreeExample>
  );
}
