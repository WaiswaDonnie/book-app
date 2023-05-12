
import axios from 'axios'
interface Props{
    page:number;
    pageSize:number;
}
const mockGetBooks = async ({page,pageSize}:Props) => {
    axios
      .get(`https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
       return response.data;
      })
      .catch((error) => console.log(error));
};

export {mockGetBooks}