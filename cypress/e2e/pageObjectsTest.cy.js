/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { email, password } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('deve fazer o login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email,password)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text','Dulko Ryan')
  })
})
