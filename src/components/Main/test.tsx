import { render } from '@testing-library/react'

import Main from '.'

describe('Main', (): void => {
  it('should have the right background color', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
