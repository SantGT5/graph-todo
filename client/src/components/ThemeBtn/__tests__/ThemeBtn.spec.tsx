import { render, screen, fireEvent } from '../../../utils/test-utils'
import { ThemeBtn } from '../ThemeBtn'

describe('ThemeBtn component', () => {
  beforeAll(() => render(<ThemeBtn />))

  it('', async () => {
    const rendered: HTMLElement = screen.getByTestId('theme-btn-wrapper')
    const btn: Element | null = rendered.querySelector('.text-btn-color')

    expect(rendered).toBeDefined()
    expect(btn).toBeDefined()

    expect(btn?.textContent).toBe('light mode')

    fireEvent.click(btn!)

    expect(btn?.textContent).toBe('dark mode')
  })
})
