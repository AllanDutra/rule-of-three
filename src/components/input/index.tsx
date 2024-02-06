import { StyledInput } from "./styles";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export function Input({...rest}: IInputProps) {
  return <StyledInput type="text" {...rest} />;
}
