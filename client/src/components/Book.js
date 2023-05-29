import {useContext } from 'react'
import { AppContext } from '../App' 

const Book = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    return (
        <div key = {book.id}>
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
                if (cart.filter(e=>e.id===book.id).length > 0) {
                    const newCart = cart.map(e=> {
                            if (e=>e.id===book.id) {
                                return {...e, quantity: e.quantity+1}
                            }  return e
                        })

                    setCart(newCart)
                } else {
                    setCart([...cart, {...book, quantity: 1}])
                }
               

            }}
            >add to cart</button>
        </div>
        </div>
    )
}
export default Book