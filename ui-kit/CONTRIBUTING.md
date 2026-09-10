# Contribuir

1. Haz fork y clona el repo.
2. `npm install`
3. Crea una rama: `git checkout -b feat/nombre-componente`
4. Cada componente nuevo va en `src/components/NombreComponente/` con:
   - `NombreComponente.tsx`
   - `NombreComponente.css` (clases con prefijo `uikit-`)
   - `NombreComponente.test.tsx`
   - `index.ts` (re-exporta el componente)
5. Usa los tokens de `src/tokens/tokens.css` en lugar de valores hardcodeados.
6. Corre `npm run test` y `npm run lint` antes de abrir el PR.
7. Abre el Pull Request describiendo qué resuelve y agrega/actualiza tests.

Issues etiquetadas `good first issue` son ideales para empezar.
