describe("react-chartjs-2 Test", function () {
  before(() => {
    cy.visit("/react-chartjs-2");
  });

  // Make the snapshot and compare it with baseline
  // for each of the defined screen sizes

  // sizes.forEach((size) => {
  //   it(`Should match  ${size} image snapshot`, function () {
  //     //  cy.get('.header').invoke('css', 'position', 'absolute')
  //     cy.matchImageSnapshot(`react-chartjs-2-${size}`, { capture: "fullPage" });
  //   });
  // });

  it(`Should match image snapshot`, function () {
    //  cy.get('.header').invoke('css', 'position', 'absolute')
    cy.wait(5000);
    cy.matchImageSnapshot(`react-chartjs-2`, { capture: "fullPage" });
  });
});
