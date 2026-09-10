import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza el contenido", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByText("Guardar")).toBeInTheDocument();
  });

  it("dispara onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("se deshabilita cuando isLoading es true", () => {
    render(<Button isLoading>Enviar</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
