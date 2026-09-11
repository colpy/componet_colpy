import { createRoot } from "react-dom/client";
import { Button } from "../src/components/Button";
import { Card } from "../src/components/Card";
import { Input } from "../src/components/Input";
import { ChatBubble } from "../src/components/ChatBubble";
import {StreamingText} from "../src/components/StreamingText";
import "../src/tokens/tokens.css";

createRoot(document.getElementById("root")!).render(
  <Card title="Demo" footer={<Button variant="primary">Confirmar</Button>}>
    <Input label="Nombre" placeholder="Escribe algo..." />
     <ChatBubble role="assistant" content="Hola, soy tu asistente" />
     <StreamingText text="Hola, este texto aparece como IA escribiendo en vivo." />
  </Card>
);

