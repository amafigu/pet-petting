import { render, screen } from '@testing-library/react'
import { Home } from './Home'

function renderHome() {
  render(<Home />)
}

describe('Home Page should', () => {
  it('render Pet Petting string', () => {
    renderHome()
    expect(screen.getByText('Pet Petting')).toBeInTheDocument()
  })
})
