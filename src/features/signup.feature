Feature: SpiceClub Signup

  Scenario: New user signs up with valid details
    Given I navigate to the SpiceClub signup page
    When I enter signup details:
      | FirstName | TestFirst |
      | LastName  | TestLast  |
      | Mobile    | 9876543210 |
      | Email     | testuser@example.com |
      | Password  | Test@1234 |
    And I submit the signup form
    Then I should see a confirmation or next step in signup