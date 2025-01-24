describe('Navigation', () => {
  it('should display error message when searching for "pedro"', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find the input field and type "pedro"
    cy.get('input[type="text"]').type('pedro');

    // Simulate pressing the Enter key
    cy.get('input[type="text"]').type('{enter}');

    // Wait for the search results to load
    cy.wait(5000); // Adjust the wait time as needed

    // Verify that the error message is displayed
    cy.contains('Lo sentimos, no se encotraron pokemons con el nombre').should('be.visible');
  });
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find the input field and type "pikachu"
    cy.get('input[type="text"]').type('pikachu');

    // Simulate pressing the Enter key
    cy.get('input[type="text"]').type('{enter}');

    // Verify that the search results are displayed
    cy.contains('pikachu').should('be.visible');

    // Click on the PokemonCard with the name "pikachu"
    cy.contains('pikachu').click();
  });
});
