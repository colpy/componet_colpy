import { InputHTMLAttributes, forwardRef } from "react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    return (
      <div className="uikit-input-wrapper">
        {label ? <label className="uikit-input-label" htmlFor={id}>{label}</label> : null}
        <input
          ref={ref}
          id={id}
          className={["uikit-input", error ? "uikit-input--error" : "", className].filter(Boolean).join(" ")}
          {...rest}
        />
        {error ? <span className="uikit-input-error">{error}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";