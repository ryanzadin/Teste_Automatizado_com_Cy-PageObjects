/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { email, password } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('Fazer checkout e adcionar produtos ao carrinho', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    });
    it('login test intercept', () => {
        cy.intercept('POST', '**/public/authUser', { fixture: 'users.json' }).as('usuarioLog')
        homePage.openMenu('Account')
        loginPage.login(email, password)
        homePage.openMenu('Account')
        profilePage.customerName().should('have.text', 'Dulko Ryan')

    });

    it('login test intercept nome do usuario', () => {
        cy.intercept('POST', '**/public/authUser', {fixture:'noUserName.json'}).as('noNameUsuarioLog')
        homePage.openMenu('Account')
        loginPage.login(email, password)
        homePage.openMenu('Account')
        profilePage.customerName()

    });

});