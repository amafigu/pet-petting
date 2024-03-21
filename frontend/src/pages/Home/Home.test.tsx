import { render, screen } from '@testing-library/react'
import { Home } from './index'

function renderHome() {
  render(<Home />)
}

describe('Home Page should', () => {
  it('render Pet Petting string', () => {
    renderHome()
    expect(
      screen.getByText('Let us take care of homeless pets')
    ).toBeInTheDocument()
  })
})
