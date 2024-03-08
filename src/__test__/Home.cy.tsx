import Home from '../Component/Home'
import { BrowserRouter } from 'react-router-dom'

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(
      <BrowserRouter>
        <Home />
      </BrowserRouter>)
    cy.get('[data-cy=quote]').should('exist')
    cy.get('.search-box').should('exist')
    cy.get('[data-cy=books-cards]').should('exist')
    cy.get('[data-cy=search-box]').should('exist')
    cy.get('[data-cy=books-cards]').children().should('have.length', 30)}
  )

})