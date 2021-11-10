describe("Homepage Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('input[data-cy="search-input"]').type("Toy");

    cy.get('div[data-cy="search-container"]').within(() => {
      cy.get('div[data-cy="search-result-card"]').should("have.length", 10);
      cy.get('div[data-cy="search-result-card"]').first().click();
    });

    cy.url().should("equal", `${Cypress.config().baseUrl}/tt0114709`);
  });

  it("Should be able to render movie details", () => {
    // Movie details page should be rendered
    cy.contains("Movie Detail");
    cy.get('div[data-cy="movie-details-container"]').should("exist");

    // Image should be visible
    cy.get('[data-cy="movie-details-image"]').should("exist");

    // Metadata about movie details should exist
    cy.get('[data-cy="movie-details-title"]').contains("Toy Story");
    cy.get('[data-cy="movie-details-year"]').contains("1995");
    cy.get('[data-cy="movie-details-plot"]')
      .should("exist")
      .contains(
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
      );
    cy.get('[data-cy="movie-details-starring"]').contains(
      "Starring: Tom Hanks, Tim Allen, Don Rickles"
    );
    cy.get('[data-cy="movie-details-director"]').contains(
      "Director: John Lasseter"
    );
    cy.get('[data-cy="movie-details-writer"]').contains(
      "Written By: John Lasseter, Pete Docter, Andrew Stanton"
    );
    cy.get('[data-cy="movie-details-genre"]').contains(
      "Genre: Animation, Adventure, Comedy"
    );
    cy.get('[data-cy="movie-details-awards"]').contains(
      "Awards: Won 1 Oscar. 27 wins & 23 nominations total"
    );
  });

  it("Should be able to open image modal", () => {
    cy.get('[data-cy="movie-details-image"]').should("exist").click();

    cy.get('[data-cy="poster-modal"]').should("be.visible");
  });
});
