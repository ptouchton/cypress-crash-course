/// <reference types="cypress" />

describe('locators', () => {
    beforeEach(() => {
      cy.visit('/elements')
    });

    it('locators should find', () => {
        // Get all elements by tag name
        cy.get("button")

        // Get all elements by className
        cy.get(".btn-with-class")

        // Get all elements by className
        cy.get("#btn-with-id")

        // Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // Get all elements by specific attribute
        cy.get("[type='submit']")

        // Get all elements by tag name AND class
        cy.get("button.btn-with-class")

        // Get all elements by tag name AND class and id 
        cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name AND class and type attribute
        cy.get("button.Elements-btn[type='submit']")

        // Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")

        // get with custom command
        cy.getByTestId('btn-id-1')

    });
});
  