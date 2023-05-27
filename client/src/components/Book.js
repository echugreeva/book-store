import {useContext } from 'react'
import { AppContext } from '../App' 

const Book = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    return (
        <div>
            <h2>{book.name}</h2>
            <p>by: {book.author}</p>
            <p> {book.stars} by {book.ratings}</p>
            <p>{book.description}</p>
            <h3>product details</h3>
            <p>{book.language}</p>
            <p>{book.publisher}</p>
            <p>{book.paperback}</p>
        <div>
            <h4>Add to cart</h4>
            <p>{book.name}</p>
            <p>{book.price}</p>
            <button
            onClick={()=>{
                setCart([...cart, book])
            }}
            >add to cart</button>
        </div>
        </div>
    )
}
export default Book