describe("User login to website", () => {
  const url = "https://www.xero.com/";
  const email = "waranyamaew@gmail.com";
  const password = "12345678";
  beforeEach("Go to xero's login page", () => {
    cy.visit(url);
    cy.get(":nth-child(3) > .Button__Element-lxf8rm-0").click({ force: true });
    cy.getCookies().then((cookies) => {
        const namesOfCookies = cookies.map((c) => c.name);
        Cypress.Cookies.preserveOnce(...namesOfCookies);
      });
  });

  it("Create Quotation Seccess", () => {
    cy.get("#xl-form-email").type(email).should("have.value", email);
    cy.get("#xl-form-password").type(password).should("have.value", password);
    cy.get("#xl-form-submit").click();
    // cy.wait(20000);
    cy.get(":nth-child(2) > .xnav-focusable").click({ force: true });
    cy.get(
      "#header > header > div > ol.xnav-tabgroup.xnav-tabgroup-layout.xnav-navigation.xnav-header-background-color > li:nth-child(2) > div > div.xnav-dropdown--panel > div > ol > li:nth-child(5) > a"
    ).click({ force: true });
    // cy.wait(10000);
    // cy.reload(true);
    // cy.get('x-btn x-unselectable x-box-item x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon').click({force: true})
  });
});
