import books from '../books.json'
import {useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App'


const StorePage = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const navigate = useNavigate()
    
    return (
        <div>
            {
                books.books.map((book) => {
                    return (
                        <div>
                            <div key={book.id} onClick={()=>{
                            setBook(book)
                            navigate('/book')
                        }}>
                            <p>{book.name}</p>
                            <p>{book.author}</p>
                            
                            <p>price: ${book.price}</p>
                        </div>
                        <img 
                            style={{height: '25px'}}
                            src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                            onClick={()=>{
                                setCart([...cart, book])
                            }}    >
                            </img>
                        </div>
                        
                    )
                })
            }
        </div>
    ) 
}

export default StorePage