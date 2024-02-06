import { StyledRuleOfThreeExample } from "./styles";

interface RuleOfThreeExampleProps {
  valueOne: string;
  valueTwo: string;
  highlighted?: boolean;
}

export function RuleOfThreeExample({
  valueOne,
  valueTwo,
  highlighted = false
}: RuleOfThreeExampleProps) {
  return (
    <StyledRuleOfThreeExample>
      <p>{valueOne || "x"}</p>
      <span />
      <p className={highlighted ? "highlighted" : ""}>{valueTwo || "y"}</p>
    </StyledRuleOfThreeExample>
  );
}
