import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { Button } from "../button";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageOne() {
  const {sourceUnit, setSourceUnit, destinyUnit, setDestinyUnit, setActiveStage} = useRuleOfThree();

  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual a unidade de origem?" />
          <Input autoFocus placeholder="Ex: Kg..." value={sourceUnit} setValue={setSourceUnit} />
        </InputContainer>

        <InputContainer>
          <Label title="Qual a unidade de destino?" />
          <Input placeholder="Ex: g..." value={destinyUnit} setValue={setDestinyUnit} />
        </InputContainer>

        <InputContainer>
          <Label title="A regra de três será:" />
          <RuleOfThreeExample valueOne={sourceUnit} valueTwo={destinyUnit} />
        </InputContainer>
      </Content>

      <Button title="Avançar" onClick={() => setActiveStage(2)} />
    </>
  );
}
