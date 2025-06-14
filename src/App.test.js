import { render, screen } from '@testing-library/react';
import FoodManagementSystem from './App';

test('renders FoodShare landing page', () => {
  render(<FoodManagementSystem />);
  const headingElement = screen.getByText(/End Food Waste/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders FoodShare brand name', () => {
  render(<FoodManagementSystem />);
  const brandElement = screen.getByText(/FoodShare/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders get started button', () => {
  render(<FoodManagementSystem />);
  const buttonElement = screen.getByText(/Get Started Now/i);
  expect(buttonElement).toBeInTheDocument();
});