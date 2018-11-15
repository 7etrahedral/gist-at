Feature: CRUD Gist

Background:
  Given user is logged in to gist homepage

Scenario: As a user, I want to create a public gist
  When user add new gist
  Then user can see new gist added

Scenario: As a user, I want to see my list of gists.
  When user is at gist list page
  Then user will see list of gist

Scenario: As a user, I want to edit an existing gist
  When user is at gist list page
  When user edit an existing gist
  Then gist will be edited

  Scenario: As a user, I want to delete an existing gist
    When user is at gist list page
    When user delete an existing gist
    Then flash message success delete wil be appear
