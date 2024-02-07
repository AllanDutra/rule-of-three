import { StyledButton } from "./styles";

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
  return <StyledButton {...rest}>{title}</StyledButton>;
}
