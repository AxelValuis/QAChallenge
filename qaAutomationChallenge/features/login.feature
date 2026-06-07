# language: es

@ui @functional @regression @risk-high
Característica: Inicio de sesión de usuario
  Como usuario registrado
  Quiero acceder a la aplicación
  Para poder usar funcionalidades protegidas

  Antecedentes:
    Dado que el usuario abre la página de login

  @smoke
  Escenario: Visualizar el formulario de login
    Entonces el formulario de login debe ser visible

  @positive
  Escenario: Iniciar sesión con credenciales válidas
    Cuando el usuario inicia sesión con email "ok@test.com" y password "123456"
    Entonces el mensaje de respuesta del login debe ser "LOGIN VALID"

  @negative @fail @data-driven
  Esquema del escenario: Rechazar datos inválidos de login
    Cuando el usuario inicia sesión con email "<email>" y password "<password>"
    Entonces el mensaje de respuesta del login debe ser "<message>"

    Ejemplos:
      | email       | password | message |
      | invalid     | 123456   | INVALID |
      | ok@test.com | 123      | INVALID |

  @negative @data-driven
  Esquema del escenario: Validar campos requeridos en login
    Cuando el usuario inicia sesión con email "<email>" y password "<password>"
    Entonces el mensaje de respuesta del login debe ser "<message>"

    Ejemplos:
      | email | password | message  |
      |       |          | REQUIRED |
