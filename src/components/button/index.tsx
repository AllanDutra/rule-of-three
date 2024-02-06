import { StyledButton } from "./styles";

interface IButtonProps {
  title: string;
}

export function Button({ title }: IButtonProps) {
  return <StyledButton>{title}</StyledButton>;
}
