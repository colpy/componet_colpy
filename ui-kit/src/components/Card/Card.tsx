import { HTMLAttributes, ReactNode } from "react";
import "./Card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  footer?: ReactNode;
  elevated?: boolean;
}

/** Contenedor de contenido con cabecera y pie opcionales. */
export function Card({ title, footer, elevated = false, className, children, ...rest }: CardProps) {
  const classes = ["uikit-card", elevated ? "uikit-card--elevated" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {title ? <div className="uikit-card__header">{title}</div> : null}
      <div className="uikit-card__body">{children}</div>
      {footer ? <div className="uikit-card__footer">{footer}</div> : null}
    </div>
  );
}
