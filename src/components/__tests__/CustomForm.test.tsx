/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import '@testing-library/jest-dom'

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CustomForm from '../CustomForm';

describe('CustomForm', () => {
  const setBooksMock = jest.fn();
  const mockSearch = jest.fn()

  beforeEach(() => {
    setBooksMock.mockClear();
    
  });

  it('renders correctly', () => {
    const { container } = render(<CustomForm setBooks={setBooksMock} />);
    expect(container).toMatchSnapshot();
  });



  it('can clear search query', async () => {
    const { getByLabelText, getByRole } = render(<CustomForm setBooks={setBooksMock} />);

    const searchQueryInput = getByLabelText('Search term:') as HTMLInputElement;;
    const clearButton = getByRole('button', { name: 'Clear' });

    fireEvent.change(searchQueryInput, { target: { value: 'A Game of Thrones' } });
    fireEvent.click(clearButton);

    expect(searchQueryInput.value).toBe('');
  });
});
