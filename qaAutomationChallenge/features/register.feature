@ui @functional @regression @risk-high
Feature: User registration
  As a new user
  I want to register in the web application
  So that I can start using the authentication flow

  Background:
    Given the user opens the registration page

  @smoke @positive
  Scenario: Display the registration form
    Then the registration form should be visible

  @positive
  Scenario: Register with valid data
    When the user registers with email "ok@test.com" and password "123456"
    Then the register response message should be "SAVED"

  @negative @fail
  Scenario: Accept password with exactly 5 characters
    When the user registers with email "ok@test.com" and password "12345"
    Then the register response message should be "SAVED"

  @negative @data-driven
  Scenario Outline: Validate invalid registration inputs
    When the user registers with email "<email>" and password "<password>"
    Then the register response message should be "<message>"

    Examples:
      | email   | password | message  |
      | invalid | 123456   | INVALID  |
      |         |          | REQUIRED |
