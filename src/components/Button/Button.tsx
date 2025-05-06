import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`p-1 text-button hover:text-hover hover:scale-105 ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
