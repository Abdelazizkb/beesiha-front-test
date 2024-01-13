import { forwardRef } from "react";
import { BaseButton } from "./styles";
import classNames from "classnames";

interface Props extends React.ComponentPropsWithRef<"button"> {
  color?: "none" | "primary" | "secondary";
  variant?: "default" | "link" | "outlined";
  size?: "default" | "small" | "medium";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color,
      variant = "default",
      size = "small",
      className,
      disabled = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={classNames(
          `color--${color} variant--${variant} size--${size} ${
            disabled ? "disabled" : ""
          }`,
          className
        )}
        {...props}
      >
        <div>
          {!!startIcon && <span>{startIcon}</span>}
          <span>{children}</span>
          {!!endIcon && <span>{endIcon}</span>}
        </div>
      </BaseButton>
    );
  }
);

export default Button;
