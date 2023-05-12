export interface Book {
    name: string;
    publisher: string;
    isbn: string;
    authors: string[];
    endDate: string;
    url:string;
    released:string;
    characters:[];
  }
  
  export interface Character {
    name: string;
    culture: string;
  }
  
  export interface ApiResponse<T> {
    data: T[];
    hasNext: boolean;
    nextPage: number | null;
  }
  
export interface SearchParams {
  name?: string;
  publisher?: string;
  isbn?: string;
  authors?: string;
  endDate?: string;
  characterName?: string;
  characterCulture?: string;
  author?: string;
  page?: number;
  released?: string;
  characters?: string;
  culture?: string;
}

