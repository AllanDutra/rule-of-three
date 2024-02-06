import { Button } from "../button";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageOne() {
  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual a unidade de origem?" />
          <Input autoFocus placeholder="Ex: Kg..." />
        </InputContainer>

        <InputContainer>
          <Label title="Qual a unidade de destino?" />
          <Input placeholder="Ex: g..." />
        </InputContainer>

        <InputContainer>
          <Label title="A regra de três será:" />
          <RuleOfThreeExample valueOne="Kg" valueTwo="g" />
        </InputContainer>
      </Content>

      <Button title="Avançar" />
    </>
  );
}
