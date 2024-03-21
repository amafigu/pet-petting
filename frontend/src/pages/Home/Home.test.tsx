import { render, screen } from '@testing-library/react'
import { HomePageWrapper } from './HomePageWrapper'
import { Home } from './index'

function renderHome() {
  render(
    <HomePageWrapper>
      <Home />
    </HomePageWrapper>
  )
}

describe('Home Page should', () => {
  it('render Pet Petting string', () => {
    renderHome()
    expect(screen.getByText('Let us help homeless animals')).toBeInTheDocument()
  })
})
