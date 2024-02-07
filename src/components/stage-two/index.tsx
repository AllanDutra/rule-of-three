import { useRef } from "react";
import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { Button } from "../button";
import { ButtonContainer } from "../button-container";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageTwo() {
  const {
    firstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    sourceUnit,
    destinyUnit,
    setActiveStage,
  } = useRuleOfThree();

  const firstValueInputRef = useRef<HTMLInputElement>(null);
  const secondValueInputRef = useRef<HTMLInputElement>(null);

  function handleAdvance() {
    if (!firstValue.trim()) {
      window.alert("O primeiro valor deve ser informado!");
      firstValueInputRef.current?.select();
      return;
    }

    if (!secondValue.trim()) {
      window.alert("O segundo valor deve ser informado!");
      secondValueInputRef.current?.select();
      return;
    }

    setActiveStage(3);
  }

  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual é o primeiro valor?" />
          <Input
            type="number"
            autoFocus
            placeholder="Ex: 1..."
            value={firstValue}
            setValue={setFirstValue}
            ref={firstValueInputRef}
          />
        </InputContainer>

        <InputContainer>
          <Label title="Qual é o segundo valor?" />
          <Input
            type="number"
            placeholder="Ex: 1000..."
            value={secondValue}
            setValue={setSecondValue}
            ref={secondValueInputRef}
          />
        </InputContainer>

        <InputContainer>
          <Label title="Confira:" />
          <RuleOfThreeExample
            valueOne={`${firstValue || "x"} ${sourceUnit}`}
            valueTwo={`${secondValue || "y"} ${destinyUnit}`}
          />
        </InputContainer>
      </Content>

      <ButtonContainer>
        <Button title="Voltar" onClick={() => setActiveStage(1)} />
        <Button title="Avançar" onClick={handleAdvance} />
      </ButtonContainer>
    </>
  );
}
