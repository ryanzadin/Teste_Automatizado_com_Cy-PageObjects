/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const { singUpPage } = require("../support/pages/singup")
const CreateAccount = require("../support/pages/accountcreate.page")
const { firstName, lastName, phoneNumber, email, password, rePassword } = require('../fixtures/data.json')

describe('Fluxo de criação de conta', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
        cy.getCookies().should('have.length', 1)
        cy.clearCookies()
        cy.getCookies().should('be.empty')
       
    })

    it('Deve criar a conta com sucesso', () => {

        homePage.openMenu('Account')
        singUpPage.signUp()
        CreateAccount.Create(firstName, lastName, phoneNumber, email, password, rePassword)
        homePage.openMenu('Account')

    });
});