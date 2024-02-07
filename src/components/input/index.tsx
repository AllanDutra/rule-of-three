import { forwardRef } from "react";
import { StyledInput } from "./styles";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ setValue, ...rest }, ref) => {
    return (
      <StyledInput
        ref={ref}
        type="text"
        onChange={(e) => setValue?.(e.target.value)}
        {...rest}
      />
    );
  }
);
