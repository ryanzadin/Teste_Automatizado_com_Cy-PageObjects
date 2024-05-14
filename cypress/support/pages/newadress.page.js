/// <reference types="cypress" />

class newAdress {
    get #firstName() { return cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz')}
    get #phoneNumber() { return cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz') }
    get #endereço() { return cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz') }
    get #cidade() { return cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz') }
    get #estado() { return cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz') }
    get #cep() { return cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz') }
    get #save() { return cy.get('[data-testid="save"]') }

    InformaçõesDeEntrega(firstName, phoneNumber, endereço, cidade, estado, cep ) {
        
        this.#firstName.type(firstName)
        this.#phoneNumber.type(phoneNumber)
        this.#endereço.type(endereço)
        this.#cidade.type(cidade)
        this.#estado.type(estado)
        this.#cep.type(cep)
        this.#save.click()

    }
}

module.exports = new newAdress();