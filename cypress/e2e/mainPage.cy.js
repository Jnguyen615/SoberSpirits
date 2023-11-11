describe("display main page", () => {
  it("should show main page", () => {
    cy.visit("http://localhost:3000/main")
      .get('img[alt="logo"]')
      .should("be.visible")
      .get("h3")
      .should("contain", "Welcome to SoberSpirits")
      .get("p")
      .should(
        "contain",
        "A place for non drinkers to experiment with creating exciting mocktails!",
      )
      .get("form")
      .get('input[name="search"]')
      .should("have.attr", "placeholder", "Search for a drink")
      .get('input[name="search"]')
      .get('input[placeholder="Search for a drink"]')
      .get(".single-drink-card")
      .first()
      .contains("h3", "Afterglow")
      .get(".single-drink-card")
      .first()
      .find('img[alt="Afterglow"]')
      .get(".single-drink-card")
      .last()
      .contains("h3", "Yoghurt Cooler")
      .get(".single-drink-card")
      .last()
      .find('img[alt="Yoghurt Cooler"]')
      .get(".all-drink-cards")
      .children()
      .should("have.length", "58")
      .get(".single-drink-card")
      .first()
      .click();
  });
});
