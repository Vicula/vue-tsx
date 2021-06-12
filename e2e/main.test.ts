describe("Main", () => {
  it("should display header text", () => {
    cy.visit("/");
    cy.contains("p", "TEST 3");
  });
});
