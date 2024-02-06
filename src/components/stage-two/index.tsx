import { Button } from "../button";
import { ButtonContainer } from "../button-container";
import { Content } from "../content";
import { Input } from "../input";
import { InputContainer } from "../input-container";
import { Label } from "../label";
import { RuleOfThreeExample } from "../rule-of-three-example";

export function StageTwo() {
    return (
        <>
            <Content>
                <InputContainer>
                    <Label title="Qual é o primeiro valor?" />
                    <Input autoFocus placeholder="Ex: 1..." />
                </InputContainer>

                <InputContainer>
                    <Label title="Qual é o segundo valor?" />
                    <Input placeholder="Ex: 1000..." />
                </InputContainer>

                <InputContainer>
                    <Label title="Confira:" />
                    <RuleOfThreeExample valueOne="1 Kg" valueTwo="1000 g" />
                </InputContainer>
            </Content>

            <ButtonContainer>
                <Button title="Voltar" />
                <Button title="Avançar" />
            </ButtonContainer>
        </>
    )
}