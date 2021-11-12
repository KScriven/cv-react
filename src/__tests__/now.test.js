import Now from '../components/now';
import "@testing-library/jest-dom/extend-expect";
const { screen, cleanup, render } = require('@testing-library/react')

test('should render see component', () => {
  render(<Now data={"data"} />);
  const element = screen.getByTestId('now-testid');

  expect(element).toHaveTextContent('Component Capabilities')
  expect(element).toHaveTextContent('This is a place where I share my interests')
})