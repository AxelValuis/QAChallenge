# qaAutomationChallenge

Proyecto de automatizacion creado para el `Reto 2` del `QA Challenge`.

## Stack utilizado

- `Playwright`
- `TypeScript`
- `playwright-bdd`
- `Gherkin`
- `POM`

## Cobertura implementada

- pruebas `UI` con `BDD`
- pruebas `API`
- prueba `non-functional` ligera
- escenarios basados en riesgo y datos

## Estructura

```text
qaAutomationChallenge/
- features/
- src/
  - data/
  - fixtures/
  - pages/
  - steps/
- tests/
  - api/
  - non-functional/
- package.json
- playwright.config.ts
- tsconfig.json
```

## Requisitos

Con el proyecto base levantado:

- `back` en `http://127.0.0.1:3000`
- `front` en `http://127.0.0.1:4000`

## Instalacion

```powershell
cd qaAutomationChallenge
npm install
npx playwright install chromium
```

## Ejecucion

Suite completa:

```powershell
npm test
```

Solo UI:

```powershell
npm run test:ui
```

Solo API:

```powershell
npm run test:api
```

Solo no funcional:

```powershell
npm run test:non-functional
```

Reporte HTML:

```powershell
npm run report
```

## Notas de diseno

- La suite `UI` usa `BDD + Gherkin` para expresar escenarios de negocio.
- Los archivos `.feature` fueron redactados en espanol para alinearse con el idioma de la consigna y del dominio funcional.
- La capa `pages/` implementa `POM` para mejorar mantenibilidad.
- La suite `API` valida reglas criticas de `register` y `login`.
- Algunos escenarios reflejan defectos conocidos del sistema para evidenciar incumplimientos respecto a la historia de usuario.
