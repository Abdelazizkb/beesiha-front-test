import { forwardRef } from "react";
import { BaseInput, InputWrapper } from "./styles";

type HTMLInputProps = Omit<React.ComponentPropsWithRef<"input">, "size">;

export interface InputProps extends HTMLInputProps {
  state?: "default" | "success" | "error";
  size?: "default" | "medium";
  startIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ state = "default", size = "small", startIcon, ...props }, ref) => {
    return (
      <InputWrapper className={`--size-${size}`}>
        {startIcon}
        <BaseInput ref={ref} className={`--state-${state}`} {...props} />
      </InputWrapper>
    );
  }
);

export default Input;
export { Row, TexArea } from "./styles";
