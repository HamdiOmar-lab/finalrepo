import { render, screen } from '@testing-library/react';
import App from '../App';

test('Smoke Test: App se charge sans erreur', () => {
  render(<App />);
  // Vérifie qu’un élément clé de ton app est affiché
  expect(screen.getByText(/tâches/i)).toBeInTheDocument();
});
