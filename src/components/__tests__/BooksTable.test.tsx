/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom'

import { render, screen,fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import BooksTable from '../BooksTable';
import { Book } from '../../types';

describe('BooksTable', () => {
  const mockBooks :any = [
    {
      publisher: 'Publisher 1',
      name: 'Book 1',
      isbn: '1234567890',
      authors: ['Author 1'],
      characters: [],
      released: '2021-01-01',
    },
    {
      publisher: 'Publisher 2',
      name: 'Book 2',
      isbn: '0987654321',
      authors: ['Author 2', 'Author 3'],
      characters: ['Character 1', 'Character 2'],
      released: '2021-02-01',
    },
  ];
  const mockSetBooks = jest.fn();
  const mockSetPage = jest.fn();
  const mockHandleSearchSubmit = jest.fn();

  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockBooks }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the table with book data', async () => {
    render(<BooksTable  books={mockBooks} setBooks={mockSetBooks} setPage={mockSetPage} page={1}  />);

    const publisherHeaders = screen.getByText('Publisher 1');
    const nameHeaders = screen.getByText(/name/i);
    const isbnHeaders = screen.getByText(/isbn/i);
    const authorHeaders = screen.getByText(/authors/i);
    const characterHeaders = screen.getByText(/character/i);
    const endDateHeaders = screen.getByText(/end date/i);

    expect(publisherHeaders).toBeInTheDocument();
    expect(nameHeaders).toBeInTheDocument();
    expect(isbnHeaders).toBeInTheDocument();
    expect(authorHeaders).toBeInTheDocument();
    expect(characterHeaders).toBeInTheDocument();
    expect(endDateHeaders).toBeInTheDocument();
     
    const publisherCells = screen.getByText('Publisher 1');
    const nameCells = screen.getByText('Book 1');
    const isbnCells = screen.getByText('1234567890');
    const authorCells = screen.getByText('Author 1');
 
    const endDateCells = screen.getByText('2021-01-01');

    expect(publisherCells).toBeInTheDocument();
    expect(nameCells).toBeInTheDocument();
    expect(isbnCells).toBeInTheDocument();
    expect(authorCells).toBeInTheDocument();
 
    expect(endDateCells).toBeInTheDocument();
  });

})
