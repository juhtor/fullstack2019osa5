import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'
describe('<SimpleBlog />', () => {
  it('clicking the button calls event handler once', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'author'
    }
    const mockHandler = jest.fn()
    const component = render(
      < SimpleBlog blog={blog} onClick={mockHandler} />
    )
    const button = component.container.querySelector('button')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})