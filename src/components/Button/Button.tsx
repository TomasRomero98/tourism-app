import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="p-1 bg-blue-500">
      {children}
    </button>
  );
};
