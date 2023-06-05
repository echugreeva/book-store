import books from '../books.json'
import {useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App'


const StorePage = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const navigate = useNavigate()
    const handleCart = (id) => {
        console.log(cart.filter(e=>e.id===id))
                                if (cart.filter(e=>e.id===id).length > 0) {
                                   
                                    console.log(id)
                                    const newCart = cart.map(e=> {
                                            if (e=>e.id===id) {
                                                console.log(e.id)
                                                console.log(e.quantity)
                                                return {...e, quantity: e.quantity+1}
                                            }  return e
                                        })

                                    setCart(newCart)
                                    console.log(cart)
                                } else {
                                    setCart([...cart, {...book, quantity: 1}])
                                    console.log(cart)
                                }
    }
    
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
                            <button
                                onClick={()=>{
                                console.log(cart.filter(e=>e.id===book.id))
                                if (cart.filter(e=>e.id===book.id).length > 0) {
                                    const id = book.id
                                    console.log(id)
                                    const newCart = cart.map(e=> {
                                            if (e=>e.id===id) {
                                                console.log(e.id)
                                                console.log(e.quantity)
                                                return {...e, quantity: e.quantity+1}
                                            }  return e
                                        })

                                    setCart(newCart)
                                    console.log(cart)
                                } else {
                                    setCart([...cart, {...book, quantity: 1}])
                                    console.log(cart)
                                }
                            
                    
                            }} 
                            >
                                <img 
                                style={{height: '25px'}}
                                src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                                   >
                                </img>
                            </button>
                            
                        </div>
                        
                    )
                })
            }
        </div>
    ) 
}

export default StorePage