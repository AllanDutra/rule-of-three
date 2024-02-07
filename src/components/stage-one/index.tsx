import { useRef } from "react";
import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { Button } from "../button";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageOne() {
  const {
    sourceUnit,
    setSourceUnit,
    destinyUnit,
    setDestinyUnit,
    setActiveStage,
  } = useRuleOfThree();

  const sourceUnitInputRef = useRef<HTMLInputElement>(null);
  const destinyUnitInputRef = useRef<HTMLInputElement>(null);

  function handleAdvance() {
    if (!sourceUnit.trim()) {
      window.alert("A unidade de origem deve ser informada!");
      sourceUnitInputRef.current?.select();
      return;
    }

    if (!destinyUnit.trim()) {
      window.alert("A unidade de destino deve ser informada!");
      destinyUnitInputRef.current?.select();
      return;
    }

    setActiveStage(2);
  }

  return (
    <>
      <Content>
        <InputContainer>
          <Label title="Qual a unidade de origem?" />
          <Input
            autoFocus
            placeholder="Ex: Kg..."
            value={sourceUnit}
            setValue={setSourceUnit}
            ref={sourceUnitInputRef}
          />
        </InputContainer>

        <InputContainer>
          <Label title="Qual a unidade de destino?" />
          <Input
            placeholder="Ex: g..."
            value={destinyUnit}
            setValue={setDestinyUnit}
            ref={destinyUnitInputRef}
          />
        </InputContainer>

        <InputContainer>
          <Label title="A regra de três será:" />
          <RuleOfThreeExample valueOne={sourceUnit} valueTwo={destinyUnit} />
        </InputContainer>
      </Content>

      <Button title="Avançar" onClick={handleAdvance} />
    </>
  );
}
