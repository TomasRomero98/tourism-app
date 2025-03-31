import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
      <button className={`p-1 bg-blue-500 ${className || ""}`} {...props}>
        {children}
      </button>
    );
  };
  