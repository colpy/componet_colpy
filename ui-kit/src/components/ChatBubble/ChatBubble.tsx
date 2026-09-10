import { HTMLAttributes } from "react";
import "./ChatBubble.css";

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  role: "user" | "assistant";
  content: string;
}

export function ChatBubble({ role, content, className, ...rest }: ChatBubbleProps) {
  const classes = ["uikit-bubble", `uikit-bubble--${role}`, className].filter(Boolean).join(" ");
  return <div className={classes} {...rest}><span className="uikit-bubble__content">{content}</span></div>;
}