import React from 'react';
import Blog from '../components/blog';
const { render } = require('@testing-library/react')

test('should render see component', () => {
  const { getByTestId } = render(< Blog />)
  const element = getByTestId('blog-testid');

  expect(element).toHaveTextContent('Notes to Self')
  expect(element).toHaveTextContent('ToDo: GraphQL Get some blogs setup here for reading')
})