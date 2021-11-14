import React from 'react';
import Me from '../components/me';
import GET_MY_DATA from '../queries';
import { MockedProvider } from '@apollo/client/testing';
const { render, waitFor } = require('@testing-library/react');

const mockData = [{
  request: {
    query: GET_MY_DATA
  },
  result: {
    data: {
      intro: "software engineer, analogue women in a complex digital world, working and learning to code",
      emailAddress: "kerryn.lloyd@gmail.com",
      linkedIn: "https://www.linkedin.com/in/kerrynscriven/"
    }
  }
}];


test('should render see component', async () => {
  const { getByTestId } = render(<MockedProvider mocks={mockData}>
    < Me />
  </MockedProvider>)

  await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  const element = getByTestId('me-testid');

  expect(element).toHaveTextContent('Component Specifications')
})