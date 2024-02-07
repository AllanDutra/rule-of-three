import { StyledInput } from "./styles";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({setValue, ...rest}: IInputProps) {
  return <StyledInput type="text" onChange={e => setValue?.(e.target.value)} {...rest} />;
}
