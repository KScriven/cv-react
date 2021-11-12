import Me from '../components/me';
import "@testing-library/jest-dom/extend-expect";
import { Link, Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
const { screen, cleanup, render } = require('@testing-library/react')

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/me',
    search: '',
    hash: '',
    state: 'some relevant data',
    key: '5nvxpbdafa',
  }),
}));


test('Renders the Me component that utilises the react useLocation', () => {
  render(<Me />);
  const element = screen.getByTestId('me-testid')
  expect(element).toHaveTextContent('Component Type')
})