/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { firstName, phoneNumber, cidade, endereço, estado, cep, email, password } = require('../fixtures/data.json')
const newAdress = require("../support/pages/newadress.page")

describe('Fazer checkout e adcionar produtos ao carrinho', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
        cy.clearCookies()
        cy.getCookies().should('be.empty')
    });

    it('Deve adcionar produtos ao carrinho', () => {
        homePage.openMenu('Account')
        loginPage.login(email, password)
        cy.get('[data-testid="see-all-new"]').click()
        cy.get(':nth-child(2) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="addNewAddress"]').click()
        newAdress.InformaçõesDeEntrega(firstName, phoneNumber, endereço, cidade, estado, cep)
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
        cy.get('[data-testid="completeCheckout"]').click()
        homePage.openMenu('Home')
    });
});