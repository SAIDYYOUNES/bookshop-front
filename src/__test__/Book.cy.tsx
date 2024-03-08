import Book from '../Component/Book'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Book />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Book />
      </Router>
    )
    cy.get('.book-title').should('exist')
  })
})