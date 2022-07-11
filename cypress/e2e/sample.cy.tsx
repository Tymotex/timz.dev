describe("Portfolio page tests", () => {
    it("should render the about page after the 'about' link is clicked", () => {
        // Arrange.
        cy.visit("http://localhost:3000");
        cy.wait(1000);

        // Act.
        cy.contains("About").click(); // The homepage should show
        cy.wait(1000);

        // Assert.
        cy.url().should("include", "/about");
        cy.contains("Who am I?");
    });
});
