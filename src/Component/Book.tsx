import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Ibook } from "../types"
import bookpic from '../assets/bookpic.jpg'
export default function Book() {
    const { id } = useParams()
    const [book, setBook] = useState<Ibook>(
        {
            id: 0, title: '', description: '', genre: '', publicationDate: '',
            author: { id: 0, firstName: '', lastName: '', bibliography: '' }, reviews: []
        }
    )
    useEffect(() => {
        console.log(book.reviews)
    }, [book])

    useEffect(() => {
        fetch(`http://localhost:8000/api/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div className="flex justify-center">
            <div className="w-10/12">


                <header className="flex items-center justify-between">
                    <div className="w-1/2" >
                        <h1 className="book-title text-5xl mb-6">
                            {book.title} <span className="text-lg text-gray-500 align-middle">- {book.publicationDate.slice(0, 4)}</span>
                        </h1>
                    </div>

                </header>
                <section className="book-details flex gap-8">
                    <div className="cover rounded overflow-hidden" >
                        <img src={bookpic} alt="No One Can Know" />
                    </div>
                    <div className="details" >

                        <div className="categories" >
                            <span className="category">{book.genre}</span>
                        </div>
                        <div className="description my-10" >
                            <p>
                                {book.description}
                            </p>
                        </div>
                        <div className="more-details">
                            <div className="language font-bold" >
                                Author : <span className="font-normal">{book.author.firstName} {book.author.lastName}</span>
                            </div>
                            <div className="length font-bold" >
                                Publicaion Date : <span className="font-normal">{book.publicationDate.slice(0, 10)}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="antialiased  my-10">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Reviews</h3>
                    <div className="grid  grid-cols-2 gap-4">


                        {
                            book.reviews.length > 0 ?
                                book.reviews.map((review) => {
                                    return (
                                        <div className="">
                                            <div className="flex">

                                                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                    <div className="flex justify-between">
                                                        <strong>{review.fullName}</strong>
                                                        <p className="text-xs text-gray-400">{review.creationDate.slice(0, 10)}</p>
                                                    </div>
                                                    <p className="text-sm">
                                                        {review.comment}
                                                    </p>

                                                </div>
                                            </div>


                                        </div>
                                    )
                                }) :
                                <div className="flex justify-center ">
                                    <p>No reviews yet</p>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
