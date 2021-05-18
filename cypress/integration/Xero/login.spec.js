describe("User login to website", () => {
  const url = "https://www.xero.com/";
  const email = "waranyamaew@gmail.com";
  const password = "12345678";
  beforeEach("Go to xero's login page", () => {
    cy.visit(url);
    cy.get(":nth-child(3) > .Button__Element-lxf8rm-0").click({ force: true });
  });
  it("Log in page validation", () => {
    cy.get(".xl-logo--svg").should("be.visible");
    cy.get(".xui-panel-title").contains("Log in to Xero");
    cy.get(".xl-mainwrapper").within(() => {
      cy.get("#xl-form-email").should(
        "have.attr",
        "placeholder",
        "Email address"
      );
      cy.get("#xl-form-password").should(
        "have.attr",
        "placeholder",
        "Password"
      );
      cy.get("#xl-form-submit").should("be.enabled").contains("Log in");
      cy.get(
        "#xl-form > .xl-linklist > :nth-child(1) > .xl-linklist--link"
      ).contains("Forgot password?");
      cy.get(
        "#xl-form > .xl-linklist > :nth-child(2) > .xl-linklist--link"
      ).contains("Can't log in?");
    });
    cy.get(
      ".xl-footerwrapper > .xl-linklist > :nth-child(1) > .xl-linklist--link"
    ).contains("Security noticeboard");
    cy.get(
      ".xl-footerwrapper > .xl-linklist > :nth-child(2) > .xl-linklist--link"
    ).contains("Terms of use");
    cy.get(":nth-child(3) > .xl-linklist--link").contains("Privacy");
    cy.get(":nth-child(4) > .xl-linklist--link").contains("Help Center");
    cy.get(":nth-child(5) > .xl-linklist--link").contains("Sign up");
  });
  it("Email is not exist", () => {
    cy.get("#xl-form-email").type("asadfg@gmail.com");
    cy.get("#xl-form-password").type("wrong_password");
    cy.get("#xl-form-submit").click({ force: true });
    cy.get("#xl-validation-message > ul > li").contains(
      "Your email or password is incorrect"
    );
  });
  it("Password is incorrect", () => {
    cy.get("#xl-form-email").type("waranyamaew@gmail.com");
    cy.get("#xl-form-password").type("wrong_password");
    cy.get("#xl-form-submit").click({ force: true });
    cy.get("#xl-validation-message > ul > li").contains(
      "Your email or password is incorrect"
    );
  });
  it("Login with correct account", () => {
    cy.get("#xl-form-email").type(email).should("have.value", email);
    cy.get("#xl-form-password").type(password).should("have.value", password);
    cy.get("#xl-form-submit").click();
  });
});
