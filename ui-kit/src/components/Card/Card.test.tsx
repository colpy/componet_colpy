import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renderiza título, contenido y footer", () => {
    render(<Card title="Título" footer="Pie">Contenido</Card>);
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
    expect(screen.getByText("Pie")).toBeInTheDocument();
  });
});
