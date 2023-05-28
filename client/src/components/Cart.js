import {useContext,useState, useEffect } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const [sum, setSum] = useState(0)
    const [localCart, setLocal] = useState( [...new Set(cart)])
    const [quantity,setQuantity] = useState([])
    const navigate =useNavigate()
    
    useEffect(()=>{
        const total=cart.reduce((acc,curr)=>acc + curr.price,0)
        setSum(total)
        const bookquantity = localCart.map(value => [value.id, cart.filter(str => str === value).length]);
        setQuantity(bookquantity)
    },[cart])

   

    if (cart.length < 1) {
        return (
            <>
            the cart is empty
            </>
        )
    }
        
     else {
    return (
        <div>
            {
                localCart.map(book=>{
                   console.log(quantity)
                    // 
                    return(
                        <div key={book.id}>
                            {book.name}
                            <p>price: ${book.price}</p>
                            <p>quantity: {quantity.filter(e=>e[0] === book.id
            
                            )}</p>
                            <button
                                onClick={()=> {
                                        setCart(cart.filter(e=>e.id !== book.id))
                                    }
                                }
                            >delete</button>
                        </div>
                        
                    )
                })
                
            }
            <p>Total: {sum}</p>
            <button
            onClick={()=>
            navigate('/form')
            }
            >Buy Now</button>
        </div>

    )
}
}

export default Cart