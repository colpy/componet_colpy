import { createRoot } from "react-dom/client";
import { Button } from "../src/components/Button";
import { Card } from "../src/components/Card";
import "../src/tokens/tokens.css";

createRoot(document.getElementById("root")!).render(
  <Card title="Demo" footer={<Button variant="primary">Confirmar</Button>}>
    Hola, este es el UI Kit funcionando.
  </Card>
);