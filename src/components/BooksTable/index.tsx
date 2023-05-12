
import React, { useState, useEffect } from 'react';
import { Book } from '../../types';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Button from '../Button';
 
interface Props {
  books: Book[]
  setBooks: any
  setPage: any,
  page: number,
 dataTestid?:any

}




const BooksTable: React.FC<Props> = ({ books,  setPage,dataTestid }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleLoadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  // const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSearching(true)
  //   try {
  //     // setLoading(true);
  //     const response = await axios.get('https://www.anapioficeandfire.com/api/books', {
  //       params: {
  //         ...searchParams,
  //         page: 1,
  //       },
  //     });
  //     console.log('s')
  //     setBooks(response.data);
  //     setTotalPages(Math.ceil(response.headers['x-total-count'] / 10)); // assume 10 items per page
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  return (
    <div className='mx-4'>

<h3>Books Table</h3>


      <table data-testid={dataTestid}>
        <thead>
          <tr>
            <th>Publisher</th>
            <th>Name</th>
            <th>ISBN</th>
            <th>Authors</th>
            <th>Character</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.isbn}>
              <td>{book.publisher}</td>
              <td>{book.name}</td>
              <td>{book.isbn}</td>
              <td>{book?.authors?.join(', ')}</td>
              <td>{book?.characters.length}</td>
              <td>{book.released}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default BooksTable;

