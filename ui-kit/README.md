# UI Kit — librería de componentes en React + TypeScript

Componentes accesibles, con sistema de tokens de diseño propio (color, tipografía, espaciado) en `src/tokens/tokens.css`.

## Uso

```bash
npm install
npm run dev      # entorno de desarrollo
npm run build    # genera dist/ listo para publicar en npm
npm run test     # corre los tests con Vitest
```

```tsx
import { Button, Card } from "@uikit/core";
import "@uikit/core/dist/tokens.css";

<Card title="Ejemplo" footer={<Button variant="primary">Confirmar</Button>}>
  Contenido de la card.
</Card>
```

## Arquitectura

```
src/
  tokens/        variables CSS (color, tipografía, espaciado, forma)
  components/    un folder por componente: Componente.tsx, .css, .test.tsx, index.ts
  index.ts       exporta la API pública
```

Cada componente sigue el mismo contrato: props tipadas que extienden el elemento HTML nativo (`ButtonHTMLAttributes`, etc.), estilos con prefijo `uikit-` para evitar colisiones, y un test mínimo.

## Roadmap (issues abiertas a la comunidad)

- [ ] `Input` con validación y estado de error
- [ ] `Modal` con manejo de foco (a11y)
- [ ] `Tooltip`
- [ ] Modo oscuro vía tokens
- [ ] Storybook para documentación visual

## Cómo contribuir

Ver [CONTRIBUTING.md](./CONTRIBUTING.md). Hay issues etiquetadas `good first issue` pensadas para una primera contribución.

## Licencia

MIT
