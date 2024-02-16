import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type Prop = {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<Prop> = ({
  loading = false,
  disabled = false,
  children,
  ...otherProp
}) => {
  return (
    <button
      disabled={loading || disabled}
      {...otherProp}
      
    >
      {loading && (
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full mr-3"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {children}
    </button>
  );
};
