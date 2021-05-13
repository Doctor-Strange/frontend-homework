import selector_creator from "../utils/selector_creator";

const base_url = "http://localhost:3000/";

beforeEach(() => {
  cy.visit(base_url);
  /**
   * create the @dropdown_link alias
   *  */
  cy.get(selector_creator("dropdown_link_wrapper")).as("dropdown_link");
});

context("Window", () => {
  it("cy.document() - get the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    cy.title().should("match", /eAgronom/);
  });
});

describe("testing the opening and closing the dropdown", () => {
  it("checking the click outside the dropdown box", () => {
    cy.get("@dropdown_link")
      .click()
      .get(selector_creator("dropdown-wrapper"))
      .as("dropdown")
      .should("exist")
      .get(selector_creator("nav"))
      .click(0, 0)
      .get("@dropdown")
      .should("not.exist");
  });
});

describe("selecting a company", () => {
  it("checking the accuracy of company selection", () => {
    cy.get("@dropdown_link")
      // checking the click on dropdown link to open the drop down
      .click()
      .get(selector_creator("dropdown-wrapper"))
      .as("dropdown")
      .should("exist")
      .get("@dropdown_link")
      .click()
      .get("@dropdown")
      .should("not.exist")
      // checking the click on a company name
      .get("@dropdown_link")
      .click()
      .get(`${selector_creator("companies_list")} li`)
      .eq(1)
      .click()
      // after click on a company the dropdown should be disappeared
      .get("@dropdown")
      .should("not.exist")
      // checking the values in the dropdown link
      .get(selector_creator("ceo"))
      .should("contain", "Jane Doe")
      .get(selector_creator("company_name"))
      .should("contain", "Tartu Agro OÜ")
      // click on another company, the values should be changed
      .get("@dropdown_link")
      .click()
      .get(`${selector_creator("companies_list")} li`)
      .eq(2)
      .click()
      .get(selector_creator("ceo"))
      .should("not.contain", "Jane Doe")
      .get(selector_creator("company_name"))
      .should("contain", "Tesla Corporation");
  });
});

describe("checking UI classes ", () => {
  it("checking the background on hovering on the drop down link", () => {
    cy.get("@dropdown_link")
      .click()
      .get(`${selector_creator("dropdown-wrapper")} li`)
      .eq(0)
      .should("not.have.class", " ")
      .should("have.css", "color", "rgb(21, 113, 35)")
      .get(selector_creator("logout"))
      .should("have.css", "color", "rgb(211, 54, 73)");
  });
});

describe("checking the responsive performance", () => {
  it("checking the background on hovering on each item in the list", () => {
    // it was just for fun because the drop down doesn't need to be responsive
    cy.viewport(360, 660).get("@dropdown_link").click();
  });
});
