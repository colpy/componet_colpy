import { ButtonHTMLAttributes, forwardRef } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

/** Botón base de la librería. Extiende <button> nativo: acepta cualquier prop HTML. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading, className, children, disabled, ...rest }, ref) => {
    const classes = ["uikit-btn", `uikit-btn--${variant}`, `uikit-btn--${size}`, className]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} disabled={disabled || isLoading} {...rest}>
        {isLoading ? <span className="uikit-btn__spinner" aria-hidden /> : null}
        <span className={isLoading ? "uikit-btn__label--loading" : undefined}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
