import { ButtonHTMLAttributes } from "react";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className="mt-6 bg-rose-400 text-white w-full rounded p-3"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
