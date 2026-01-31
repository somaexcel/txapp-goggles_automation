describe('Tax Application', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})
// describe('TaxApp Smoke Test', () => {
//   it('Loads homepage', () => {
//     cy.visit('http://localhost:3000/')
//     cy.contains('Tax').should('be.visible')
//   })
// })

describe('Form Interaction Test', () => {
  it('Opens form page', () => {
    cy.visit('http://localhost:3000/'); // Make sure this URL has a form
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#filingStatus').select('mfj');
    cy.get('#state').select('AR');
    cy.get('#prevTax').clear('1');
    cy.get('#prevTax').type('150000');
    cy.get('#w2Income').clear('6');
    cy.get('#w2Income').type('60000');
    cy.get('#w2FedWithheld').clear();
    cy.get('#w2FedWithheld').type('5000');
    cy.get('#w2StateWithheld').clear();
    cy.get('#w2StateWithheld').type('2000');
    cy.get('#quarter').select('2');
    cy.get('#period1Income').clear('4');
    cy.get('#period1Income').type('4000');
    cy.get('#paidPeriod1').clear('1');
    cy.get('#paidPeriod1').type('1000');
    cy.get('#period2Income').clear('5');
    cy.get('#period2Income').type('5000');
    cy.get('#calculate-btn').click();
    cy.get('.md\\:grid-cols-2 > :nth-child(1) > .text-2xl').click();
    cy.get('.md\\:grid-cols-2 > :nth-child(2) > .text-2xl').click();
    cy.get('.md\\:grid-cols-3 > .bg-cyan-50').click();
    cy.get('.bg-emerald-50 > .text-2xl').click();
    cy.get('.bg-\\[\\#00acc1\\] > .text-2xl').click();
    /* ==== End Cypress Studio ==== */
  });
})