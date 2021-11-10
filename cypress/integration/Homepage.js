describe("Homepage Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to render homepage", () => {
    cy.contains("Search Movie").should("exist");

    // Search Input Exist
    cy.get('input[data-cy="search-input"]')
      .should("exist")
      .should("not.have.value");

    // Search result is empty

    cy.get('div[data-cy="empty-content"]').should("exist");
  });

  it("Should be able to search movies and show search metada", () => {
    cy.get('input[data-cy="search-input"]').type("Toy");

    // Search result container will visible
    cy.get('div[data-cy="search-container"]').within(() => {
      cy.get('div[data-cy="search-result-card"]').should("have.length", 10);

      // Check search result card
      cy.get('div[data-cy="search-result-card"]')
        .first()
        .within(() => {
          cy.get('h2[data-cy="search-result-title"]').contains("Toy Story");
          cy.get('p[data-cy="search-result-year"]').contains("1995");
          cy.get('p[data-cy="search-result-type"]').contains("movie");
        });
    });

    // Check metadata
    cy.get('div[data-cy="search-metadata"]')
      .should("exist")
      .contains("Page: 1 out of 42. 412 result(s) found.");
  });

  it("Should be able to scroll through movies", () => {
    cy.get('input[data-cy="search-input"]').type("Toy");

    // Search result container will visible
    cy.get('div[data-cy="search-container"]').within(() => {
      cy.get('div[data-cy="search-result-card"]').should("have.length", 10);
    });

    cy.get('div[data-cy="search-container"]').scrollTo(0, 520, {
      duration: 350
    });

    cy.get('div[data-cy="search-container"]').scrollTo("bottom", {
      duration: 350
    });

    cy.get('div[data-cy="search-container"]').scrollTo(0, 1500, {
      duration: 350
    });

    // Search result will append new data
    cy.get('div[data-cy="search-container"]').within(() => {
      cy.get('div[data-cy="search-result-card"]').should("have.length", 20);
    });

    cy.get('div[data-cy="search-container"]').scrollTo("bottom", {
      duration: 350
    });

    cy.get('div[data-cy="search-container"]').within(() => {
      cy.get('div[data-cy="search-result-card"]').should("have.length", 30);

      cy.contains("Toy Story 3: The Video Game");
    });
  });

  it("Should be able to show error when search result is not found", () => {
    cy.get('input[data-cy="search-input"]').type("??? null");

    cy.contains("Movie not found");
    cy.contains("Please try antoher keyword");
  });
});
