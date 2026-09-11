import { useEffect, useState } from "react";
import "./StreamingText.css";

export interface StreamingTextProps {
  text: string;
  speedMs?: number;
}

export function StreamingText({ text, speedMs = 20 }: StreamingTextProps) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);

  return (
    <span className="uikit-streaming">
      {shown}
      <span className="uikit-streaming__cursor" />
    </span>
  );
}