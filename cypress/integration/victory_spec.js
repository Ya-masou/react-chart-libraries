describe("Victory chart Test", function () {
  before(() => {
    cy.visit("/victory");
  });

  it(`Should match image snapshot`, function () {
    //  cy.get('.header').invoke('css', 'position', 'absolute')
    cy.matchImageSnapshot(`victory`, { capture: "fullPage" });
  });
});
