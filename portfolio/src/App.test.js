import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders navigation and switches to contact page', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText(/hi, i'm hugh/i)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /contact/i }));

  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
  expect(screen.getByText(/you@example.com/i)).toBeInTheDocument();
});
