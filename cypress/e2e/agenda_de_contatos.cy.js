/// <reference types="cypress" />

describe('Teste para o site agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('Vinicius')
        cy.get('input[type="email"]').type('Vini@vini.com')
        cy.get('input[type="tel"]').type('999966666')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)
    })

    it('Deve editar primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Vinicius')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Vinicius')
    })

    it('Deve remover primeiro contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.contato').should('have.length', 3)

    })
})