# language: es

@ui @functional @regression @risk-high
Característica: Registro de usuario
  Como usuario nuevo
  Quiero registrarme en la aplicación web
  Para poder usar el flujo de autenticación

  Antecedentes:
    Dado que el usuario abre la página de registro

  @smoke @positive
  Escenario: Visualizar el formulario de registro
    Entonces el formulario de registro debe ser visible

  @positive
  Escenario: Registrar usuario con datos válidos
    Cuando el usuario se registra con email "ok@test.com" y password "123456"
    Entonces el mensaje de respuesta del registro debe ser "SAVED"

  @negative
  Escenario: Aceptar password de exactamente 5 caracteres
    Cuando el usuario se registra con email "ok@test.com" y password "12345"
    Entonces el mensaje de respuesta del registro debe ser "SAVED"

  @negative @data-driven
  Esquema del escenario: Validar entradas inválidas de registro
    Cuando el usuario se registra con email "<email>" y password "<password>"
    Entonces el mensaje de respuesta del registro debe ser "<message>"

    Ejemplos:
      | email   | password | message  |
      | invalid | 123456   | INVALID  |
      |         |          | REQUIRED |
