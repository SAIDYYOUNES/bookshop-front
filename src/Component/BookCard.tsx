import { IbookProp } from '../types'
import { useNavigate } from 'react-router-dom';
import bookpic from '../assets/bookpic.jpg'

export default function BookCard(props: IbookProp) {
    const {book}  = props;
    const navigate = useNavigate();
    function redirection() {
        navigate(`/book/${book.id}`)
    }
    return (
        <>
            <div onClick={()=>redirection()} className="book-card capitalize">
                <img className="mb-2 rounded overflow-hidden w-full h-full object-cover" src={bookpic} />
                    <h4 className="font-semibold text-lg" data-cy={"book-title"}>{book.title}</h4>
                    <p className="text-xs text-gray-400" data-cy={'author-name'}>{ book.author.firstName} { book.author.lastName}</p>
            </div>
        </>
    )
}
