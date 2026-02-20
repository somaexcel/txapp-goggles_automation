describe('Tax Application website navigation', () => {
  it('Navigated to tax quarterly website', () => {
    cy.visit('https://taxquarterly.com/')

  })
})

describe('Form Interaction Test', () => {
  it('Fill out quarterly tax form and submit', () => {
    cy.visit('https://taxquarterly.com/')

    cy.get('#filingStatus').select('mfj')
    cy.get('#state').select('AR')
    cy.get('#prevTax').clear().type('150000')
    cy.get('#w2Income').clear().type('60000')
    cy.get('#w2FedWithheld').clear().type('5000')
    cy.get('#w2StateWithheld').clear().type('2000')
    cy.get('#quarter').select('2')
    cy.get('#period1Income').clear().type('4000')
    cy.get('#paidPeriod1').clear().type('1000')
    cy.get('#period2Income').clear().type('5000')
    cy.get('#calculate-btn').click()


  })
})
