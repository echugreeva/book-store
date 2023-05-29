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
                        <div key={book.id}>
                            <div  onClick={()=>{
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
                                    if (cart.filter(e=>e.id===book.id).length > 0) {
                                        const id = book.id
                                        const newCart = cart.map(e=> {
                                                if (e=>e.id===id) {
                                                    console.log(e.quantity)
                                                    return {...e, quantity: e.quantity+1}
                                                }  return e
                                            })

                                        setCart(newCart)
                                    } else {
                                        setCart([...cart, {...book, quantity: 1}])
                                    }
                                
                        
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