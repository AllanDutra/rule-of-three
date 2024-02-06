import { StyledLabel } from "./styles";

interface ILabelProps {
  title: string;
}

export function Label({ title }: ILabelProps) {
  return <StyledLabel>{title}</StyledLabel>;
}
