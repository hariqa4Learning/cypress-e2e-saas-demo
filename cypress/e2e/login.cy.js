describe("Sauce Demo Login", () => {
  it("logs in with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
      cy.url().should("include", "/inventory.html");
    });
  });

  it("shows error for locked user", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.locked_user.username, users.locked_user.password);
      cy.get('[data-test="error"]').should("be.visible");
    });
  });
});
