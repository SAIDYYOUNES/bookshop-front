import BookCard from '../Component/BookCard'
import { BrowserRouter } from 'react-router-dom'

describe('<BookCard /> ', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <BookCard book={{
          id: 1,
          title: 'The Great Gatsby',
          author: {
            id: 1,
            firstName: 'F. Scott',
            lastName: 'Fitzgerald',
            bibliography: 'frjehthtbherbvthbh'
          }, description: 'The Great',
          genre: 'Fiction',
          publicationDate: '1925-04-10',
        }} />
      </BrowserRouter>
    )

    cy.get('[data-cy=book-title]').should('have.text', 'The Great Gatsby')
    cy.get('.book-card').should('exist')
    cy.get('[data-cy=author-name]').should('have.text', 'F. Scott Fitzgerald')
    cy.get('.book-card').click()
    cy.url().should('include', '/book/1')



  })
})