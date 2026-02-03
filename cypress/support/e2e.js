import 'cypress-mochawesome-reporter/register'
import './commands'

// Screenshot for passed tests only
afterEach(function () {
    if (this.currentTest.state === 'passed') {
        const name = this.currentTest.title.replace(/ /g, '_')
        cy.screenshot(`${name} (passed)`)
    }
})
