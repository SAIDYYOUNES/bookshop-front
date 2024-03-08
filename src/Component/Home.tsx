import { useEffect } from "react";
import { useState } from "react";
import { IBooks, Ibook } from "../types";
import BookCard from "./BookCard";

export default function Home() {
  const [books, setBooks] = useState<IBooks>({ books: [] });
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/api/books?title=${search}`)
      .then(response => response.json())
      .then(data => setBooks({ books: data["hydra:member"] }))
      .then(() => setLoading(false))
  }, [search])

  return (
    <>
      <div className="pt-24 pb-[2rem] text-center flex justify-center flex-col gap-10 items-center visible">
        <header className="flex relative justify-center">
          <h1 data-cy={'quote'} className="text-gray-800 relative text-7xl md:w-2/3 w-full z-10 font-bosca">
            A Reader Lives a Thousand Lives Before he Dies.
          </h1>
        </header>
        <div data-cy={'search-box'} >
          <div className="search-box flex relative items-center transition-all focus-within:w-[500px]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Search by book or author" className="input-search outline-none rounded-full border-gray-800 border-2 bg-transparent py-4 px-5 w-full" />
            <button type="submit" className="search-icon bg-[#54bab9] rounded-full inline-flex items-center justify-center p-2 w-12 h-12 absolute right-2">
              <svg className="" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0648 20C18.6337 20 23.1481 15.9706 23.1481 11C23.1481 6.02944 18.6337 2 13.0648 2C7.49591 2 2.98145 6.02944 2.98145 11C2.98145 15.9706 7.49591 20 13.0648 20Z" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M21.9493 20.6898C22.5431 22.2898 23.8988 22.4498 24.9407 21.0498C25.893 19.7698 25.2656 18.7198 23.5402 18.7198C22.263 18.7098 21.546 19.5998 21.9493 20.6898Z" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {!loading ?
        <div data-cy={'books-cards'} className="books-cards pt-10 mb-16">
          {books.books.map((book: Ibook) => {
            return (
              <BookCard key={book.id} book={book} />
            );
          })}
        </div>
        :
        (<div className="flex justify-center items-center mb-16">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </div>)
      }
    </>
  )
}
