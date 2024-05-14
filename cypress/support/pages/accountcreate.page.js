/// <reference types="cypress" />

class CreateAccount {

    
    get #firstName() { return cy.get('[data-testid="firstName"]').click()}
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #phoneNumber() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #rePassword() { return cy.get('[data-testid="repassword"]') }
    get #create() { return cy.get('[data-testid="create"]') }


    Create(firstName, lastName, phoneNumber, email, password, rePassword) {

        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phoneNumber.type(phoneNumber)
        this.#email.type(email)
        this.#password.type(password)
        this.#rePassword.type(rePassword)
        this.#create.click()
    }

}

module.exports = new CreateAccount();