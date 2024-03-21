import { render, screen } from '@testing-library/react'
import { Pets } from './index'

function renderPets() {
  render(<Pets />)
}

describe('Home Page should', () => {
  it('render Pet Petting string', () => {
    renderPets()
    expect(screen.getByText('Our Pets')).toBeInTheDocument()
  })
})
