@ui @functional @regression @risk-high
Feature: User login
  As a registered user
  I want to access the application
  So that I can use protected functionality

  Background:
    Given the user opens the login page

  @smoke
  Scenario: Display the login form
    Then the login form should be visible

  @positive
  Scenario: Login with valid credentials
    When the user logs in with email "ok@test.com" and password "123456"
    Then the login response message should be "LOGIN VALID"

  @negative @fail @data-driven
  Scenario Outline: Reject invalid login data
    When the user logs in with email "<email>" and password "<password>"
    Then the login response message should be "<message>"

    Examples:
      | email   | password | message |
      | invalid | 123456   | INVALID |
      | ok@test.com | 123   | INVALID |

  @negative @data-driven
  Scenario Outline: Validate required login fields
    When the user logs in with email "<email>" and password "<password>"
    Then the login response message should be "<message>"

    Examples:
      | email | password | message  |
      |       |          | REQUIRED |
