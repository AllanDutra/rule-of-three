import { useMemo } from "react";
import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { Button } from "../button";
import { ButtonContainer } from "../button-container";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageThree() {
  const {
    valueToConvert,
    setValueToConvert,
    firstValue,
    secondValue,
    sourceUnit,
    destinyUnit,
    setActiveStage,
    finish,
  } = useRuleOfThree();

  const result = useMemo(() => {
    if (!valueToConvert.trim()) return "";

    const firstValueAsNumber = Number.parseFloat(firstValue);
    const secondValueAsNumber = Number.parseFloat(secondValue);
    const valueToConvertAsNumber = Number.parseFloat(valueToConvert);

    return (
      "" + (valueToConvertAsNumber * secondValueAsNumber) / firstValueAsNumber
    );
  }, [valueToConvert, firstValue, secondValue]);

  function handleFinish() {
    const confirmedFinish = window.confirm(
      `Finalizar conversões de "${sourceUnit}" para "${destinyUnit}"?`
    );

    if (confirmedFinish) return finish();
  }

  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual valor você deseja converter?" />
          <Input
            type="number"
            autoFocus
            placeholder="Ex: 5..."
            value={valueToConvert}
            setValue={setValueToConvert}
          />
        </InputContainer>

        <InputContainer>
          <Label title="Confira:" />
          <RuleOfThreeExample
            valueOne={`${firstValue} ${sourceUnit}`}
            valueTwo={`${secondValue} ${destinyUnit}`}
          />
          <RuleOfThreeExample
            valueOne={`${valueToConvert || "x"} ${sourceUnit}`}
            valueTwo={`${result || "y"} ${destinyUnit}`}
            highlighted
          />
        </InputContainer>
      </Content>

      <ButtonContainer>
        <Button title="Voltar" onClick={() => setActiveStage(2)} />
        <Button title="Finalizar" onClick={() => handleFinish()} />
      </ButtonContainer>
    </>
  );
}
