import { IBookCardProps } from '../types'
import { useNavigate } from 'react-router-dom';
import bookpic from '../assets/bookpic.jpg'

export default function BookCard(props: IBookCardProps) {
    const { book } = props;
    const navigate = useNavigate();
    function redirection() {
        // console.log('first')
        navigate(`/book/${book.id}`)
    }
    return (
        <>
            <div onClick={()=>redirection()} className="book-card capitalize">
                <img className="mb-2 rounded overflow-hidden w-full h-full object-cover" src={bookpic} />
                    <h4 className="font-semibold text-lg">{book.title}</h4>
                    <p className="text-xs text-gray-400">{ book.author.firstName} { book.author.lastName}</p>
            </div>
        </>
    )
}
