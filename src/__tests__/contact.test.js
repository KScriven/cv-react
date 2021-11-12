import Contact from '../components/contact';
import "@testing-library/jest-dom/extend-expect";
const { screen, cleanup, render } = require('@testing-library/react')

test('should render see component', () => {

  render(<Contact data={"data"} />);
  const element = screen.getByTestId('contact-testid');

  expect(element).toHaveTextContent('Component Communications')
})