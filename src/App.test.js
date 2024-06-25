import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello! how are you?/i);
  expect(linkElement).toBeInTheDocument();
});
