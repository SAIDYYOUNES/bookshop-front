import React from 'react'
import Nav from '../Component/Navcmp'

describe('<Nav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Nav />)
    cy.get('[data-cy=home]').click()
    cy.url().should('include', '/')
  })
})