
import React, { useState, useEffect } from 'react';
import { Book } from './types';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import BooksTable from './components/BooksTable';
import Button from './components/Button';
import CustomForm from './components/CustomForm';
import Spinner from './components/Spinner';



const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [pageSize, setPageSize] = useState(10)
  const [loadingMore, setLoadingMore] = useState(false);


  const getBooks = async () => {
    if (loadingMore) setLoading(false);
    else setLoading(true);
    axios
      .get(`https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        setBooks(response.data);
        if (!loadingMore)
          setTotalPages(Math.ceil(12 / pageSize));
        setLoading(false);
        setLoadingMore(false)
      })
      .catch((error) => console.log(error));
  };

  // const getBooks = async()=>{
  //   if(loadingMore)
  //   setLoading(false);
  //   else
  //   setLoading(true);
  //   axios.get(`https://www.anapioficeandfire.com/api/books?pageSize=${pageSize}`)
  //   .then(response => {
  //     // setBooks(prevBooks => [...prevBooks, ...response.data]);
  //     setBooks(response.data)
  //     if(!loadingMore)
  //     setCount(Math.ceil(response.data.length / 10))

  //     setLoadingMore(false)

  //     // setPageCount(Math.ceil(books.length / 10));


  //     setLoading(false);
  //   })
  //   .catch(error => console.log(error));
  // }
  useEffect(() => {
    getBooks();
  }, [page, pageSize]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get('https://www.anapioficeandfire.com/api/books', {
  //       params: {
  //         ...searchParams,
  //         page: page + 1, // add 1 to convert from zero-indexed to one-indexed page numbers
  //       },
  //     });
  //     setBooks(response.data);
  //     setTotalPages(Math.ceil(response.headers['x-total-count'] / 10)); // assume 10 items per page
  //   };
  //   fetchData();
  // }, [searchParams, page]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    // setCurrentPage(selectedItem.selected);

    setPage(selectedItem.selected > 0 ? selectedItem.selected + 1 : selectedItem.selected);

    // setPage(selectedItem.selected)
    // axios.get(`https://www.anapioficeandfire.com/api/books?page=${selectedItem.selected + 1}&pageSize=${pageSize}`)
    // .then(response => {
    //     // setBooks(prevBooks => [...prevBooks, ...response.data]);
    //     setBooks(response.data)
    //     console.log(response.data.length)

    //     // setPageCount(Math.ceil(books.length / 10));


    //     // setLoading(false);
    //   })
    //   .catch(error => console.log(error));
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPageSize((prevPage) => prevPage + 10);
  };





  return (
    <div>
      <CustomForm setBooks={setBooks} />
      {loading ?
        <div className='d-flex justify-content-center align-items-center'>
          <div data-testid="loading-spinner" className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        : <BooksTable dataTestid="bookStable" page={page} setPage={setPage} books={books} setBooks={setBooks} />}
      <div className='d-flex justify-content-between align-items-center my-2 mx-4'>
        <div>
          {!loading && (
            <Button onClick={handleLoadMore}>{loadingMore ? 'Loading...' : 'Load more'}</Button>
          )}
        </div>
        {!loading &&

          <div className="pagination-container d-flex justify-content-end ">
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              pageCount={totalPages}
              pageRangeDisplayed={10}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              activeClassName="active"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
            />
          </div>}
      </div>

    </div>
  );
};

export default App;

