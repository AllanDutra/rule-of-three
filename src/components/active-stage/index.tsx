import { useRuleOfThree } from "../../shared/hooks/useRuleOfThree";
import { StageOne } from "../stage-one";
import { StageThree } from "../stage-three";
import { StageTwo } from "../stage-two";

export function ActiveStage() {
    const {activeStage} = useRuleOfThree();

    if (activeStage === 1) return <StageOne />

    if (activeStage === 2) return <StageTwo />

    if (activeStage === 3) return <StageThree />

    return <></>
}