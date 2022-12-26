let movies;
let movieId; // Enola Holmes movie id

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });
  describe("From the home page to a movie's details", () => {
    it("navigates to the movie details page and change browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
    });
  });
  describe("The site header", () => {
    describe("when the viewport is desktop scale", () => {
      it("navigation via the links", () => {
        cy.get("button").contains("Favorites").click();
        cy.url().should("include", `/favorites`);
        cy.get("button").contains("Home").click();
        cy.url().should("include", `/`);
      });
    });
    describe(
      "when the viewport is a mobile scale",
      {
        viewportHeight: 896,
        viewportWidth: 414,
      },
      () => {
        it("navigation via the dropdown menu", () => {
          cy.get("header").find("button").click();
          cy.get("li").contains('Favorites').click();
          cy.url().should("include", `/favorites`);
          cy.get("li").contains('Home').click();
          cy.url().should("include", `/`);
        });
      }
    );
  });
  describe("From the favourites page to a movie's details", () => {
    beforeEach(() => {
        cy.get("button[aria-label='add to favorites']").eq(0).click();
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();
      });
      it("should navigate to the movies detail page and change the browser URL", () => {
        cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
        cy.url().should("include", `/movies/${movies[0].id}`);
        cy.get("h3").contains(movies[0].title);
      });
  });
  describe("The forward/backward links", () => {
    beforeEach(() => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
    });
    it("navigates between the movies detail page and the Home page.", () => {
      cy.get("svg[data-testid='ArrowBackIcon'").click();
      cy.url().should("not.include", `/movies/${movies[0].id}`);
      cy.get("svg[data-testid='ArrowForwardIcon'").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
    });
  });
});