import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders the navbar with the correct title', () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/ICE AND FIRE/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the navbar with the correct navigation items', () => {
    render(<Navbar />);
    const homeNavItem = screen.getByText(/Home/i);
    expect(homeNavItem).toBeInTheDocument();
  });
});
