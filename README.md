# QA Challenge - Axel Valuis

Repositorio de entrega del reto tecnico para la posicion de `QA Engineer`.

## Entregables incluidos

- Documento final: `qa-challenge-retoAxelValuis.docx`
- Proyecto de automatizacion: `qaAutomationChallenge/`

## Repositorio

- GitHub: `https://github.com/AxelValuis/QAChallenge`

## Alcance del reto

La solucion cubre:

- analisis funcional del flujo de `registro` y `login`
- validacion de `frontend` y `backend`
- identificacion de bugs y mejoras
- propuesta de certificacion QA
- automatizacion con `Playwright + TypeScript + BDD + POM`
- escenarios BDD redactados en espanol para alinearse con la consigna
- respuesta a los retos conceptuales de ambientes, priorizacion y agile testing

## Estructura principal

```text
back/
front/
qaAutomationChallenge/
qa-challenge-retoAxelValuis.docx
```

## Ejecucion del sistema base

Backend:

```powershell
cd back
npm install
npm run start
```

Frontend:

```powershell
cd front
npm install
npm run start
```

## Ejecucion de la automatizacion

```powershell
cd qaAutomationChallenge
npm install
npx playwright install chromium
```

Pruebas disponibles:

```powershell
npm test
npm run test:ui
npm run test:api
npm run test:non-functional
```

## Nota

La carpeta `qaAutomationChallenge` fue creada como entregable especifico del `Reto 2`, tal como lo solicita la consigna.
