import React,{useState} from 'react'
import { Book, SearchParams } from '../../types';
import axios from 'axios';
interface Props{
    setBooks:any;
}
function CustomForm({setBooks}:Props) {
    
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useState<SearchParams>({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState<string>('name');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [pageCount, setPageCount] = useState(100);
    const [pageSize, setPageSize] = useState(10)
    const [loadingMore, setLoadingMore] = useState(false);
    const [count, setCount] = useState(0)

    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value);
      };
    
      const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
    
      const handleClearSearch = () => {
        setSearchParams({});
        setSearchType('name');
        setSearchQuery('');
        setPage(1);
    
      };
      const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const params: SearchParams = { page: 1 };
    
        if (searchType === 'name') {
          params.name = searchQuery;
        } else if (searchType === 'publisher') {
          params.publisher = searchQuery;
        } else if (searchType === 'isbn') {
          params.isbn = searchQuery;
        } else if (searchType === 'authors') {
          params.author = searchQuery;
        } else if (searchType === 'endDate') {
          params.released = searchQuery;
        } else if (searchType === 'characterName') {
          params.characters = searchQuery;
        } else if (searchType === 'characterCulture') {
          params.culture = searchQuery;
        }
        console.log(params);
        try {
          setLoading(true);
          const response = await axios.get('https://www.anapioficeandfire.com/api/books', {
            params,
          });
          console.log("got", response.data)
          setBooks(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
  return (
    <div className='row '>
      <div className='mx-4 my-2 '>
        <form onSubmit={handleSearchSubmit} className="mb-3">
          <div className="row col-12">
            <div className="col">
              <label htmlFor="searchType" className="form-label">Search by:</label>
              <select id="searchType" className="form-select" value={searchType} onChange={handleSearchTypeChange}>
                <option value="name">Name</option>
                <option value="publisher">Publisher</option>
                <option value="isbn">ISBN</option>
                <option value="authors">Authors</option>
                <option value="endDate">End Date</option>
                <option value="characterName">Character Name</option>
                <option value="characterCulture">Character Culture</option>
              </select>
            </div>
            <div className="col ">
              <label htmlFor="searchQuery" className="form-label">Search term:</label>
              <input type="text" id="searchQuery" className="form-control" value={searchQuery} onChange={handleSearchQueryChange} />
            </div>
            <div style={{ marginTop: 30 }} className="col ">
              <button  type="submit" className="btn btn-primary mx-2">Search</button>
              <button type="button" className="btn btn-secondary mx-2" onClick={handleClearSearch}>Clear</button>
            </div>
          </div>
        </form>

      </div>
      </div>
  )
}

export default CustomForm