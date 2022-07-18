describe("Portfolio page tests", () => {
    context("From the homepage", () => {
        it("should render the correct window when its link is clicked from the homepage", () => {
            const windows = [
                {
                    linkText: "About",
                    expectedUrl: "/about",
                    headingText: "Who am I?",
                },
                {
                    linkText: "Contact",
                    expectedUrl: "/contact",
                    headingText: "Contact Me",
                },
                {
                    linkText: "Work",
                    expectedUrl: "/work",
                    headingText: "Work Experience",
                },
                {
                    linkText: "Projects",
                    expectedUrl: "/projects",
                    headingText: "Main Projects",
                },
            ];

            cy.wrap(windows).each((windowData: any) => {
                cy.visit("/");

                // Click into the link from the homepage.
                cy.contains(windowData.linkText).click();

                // The window should be visible and the URL should change.
                cy.url().should("include", windowData.expectedUrl);
                cy.getTestElement("portfolio-window");
                cy.contains(windowData.headingText);
            });
        });

        it("should close the window when the close button is clicked.", () => {
            cy.visit("/about");
            cy.getTestElement("portfolio-window").should("be.visible");
            cy.get('[aria-label="Close"]').click();
            cy.getTestElement("portfolio-window").should("not.be.visible");
        });
    });

    context("From the project window", () => {
        beforeEach(() => {
            cy.visit("/projects");
        });

        it("should navigate to the blog page when 'Read More' is clicked on a featured project card", () => {
            cy.getTestElement("featured-project-card")
                .first()
                .each((card) => {
                    cy.wrap(card)
                        .contains("Read more", { timeout: 4000 })
                        .click();
                    cy.url().should("include", "/blog");
                });
        });
    });
});

export {};
