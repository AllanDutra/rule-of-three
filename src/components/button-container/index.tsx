import { ReactNode } from "react"
import { StyledButtonContainer } from "./styles";

interface IButtonContainerProps {
    children: ReactNode;
}

export function ButtonContainer({children}: IButtonContainerProps){
    return <StyledButtonContainer>
        {children}
    </StyledButtonContainer>
}