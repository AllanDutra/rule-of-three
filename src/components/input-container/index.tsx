import { ReactNode } from "react";
import { StyledInputContainer } from "./styles";

interface IInputContainerProps {
  children: ReactNode;
}

export function InputContainer({ children }: IInputContainerProps) {
  return <StyledInputContainer>{children}</StyledInputContainer>;
}
