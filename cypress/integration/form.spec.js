describe('Form page', () => {
  let project = {
    team: 0,
    activity: 'my activity',
    startDate: '07/31/2018',
    endDate: '08/01/2018',
    status: 0
  };

  beforeEach(() => {
    cy.visit('http://localhost:4200/form')
  });

  it('should be possible to save the form filled with valid data', () => {
    cy.get('#team').click();
    cy.get('mat-option').contains('Team 1').click();
    cy.get('#activity').type('content');
    cy.get('#startDate').type('07/31/2018');
    cy.get('#endDate').type('08/01/2018');
    cy.get('#status').click();
    cy.get('mat-option').contains('Green').click();
    cy.contains('Save').click();
    cy.url().should('eq', 'http://localhost:4200/result');
  });

  it('should be possible to reset the form when reset button is clicked', () => {
    cy.get('#team').click();
    cy.get('mat-option').contains('Team 1').click();
    cy.get('#activity').type('content');
    cy.get('#startDate').type('07/31/2018');
    cy.get('#endDate').type('08/01/2018');
    cy.get('#status').click();
    cy.get('mat-option').contains('Green').click();
    cy.contains('Cancel').click();
    cy.url().should('eq', 'http://localhost:4200/form');
    cy.get("#activity").should('be.empty');
  });

  it('should not be possible to save the form without valid data', () => {
    cy.get('#team').click();
    cy.get('mat-option').contains('Team 1').click();
    cy.get('#activity').type('content');
    cy.get('#startDate').type('31/07/2018');
    cy.get('#endDate').type('08/01/2018');
    cy.get('#status').click();
    cy.get('mat-option').contains('Green').click();
    cy.contains('Cancel').click();
    cy.url().should('eq', 'http://localhost:4200/form');
  });

  it('should not be possible to save an empty form', () => {
    cy.contains('Save').should('be.disabled');
    cy.url().should('eq', 'http://localhost:4200/form');
  });
});
