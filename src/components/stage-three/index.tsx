import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { Button } from "../button";
import { ButtonContainer } from "../button-container";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageThree() {
  const { setActiveStage, handleFinish } = useRuleOfThree();

  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual valor você deseja converter?" />
          <Input autoFocus placeholder="Ex: 5..." />
        </InputContainer>

        <InputContainer>
          <Label title="Confira:" />
          <RuleOfThreeExample valueOne="1 Kg" valueTwo="1000 g" />
          <RuleOfThreeExample valueOne="5 Kg" valueTwo="5000 g" highlighted />
        </InputContainer>
      </Content>

      <ButtonContainer>
        <Button title="Voltar" onClick={() => setActiveStage(2)} />
        <Button title="Finalizar" onClick={() => handleFinish()} />
      </ButtonContainer>
    </>
  );
}
