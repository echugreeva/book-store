import {useContext,useState, useEffect } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const [sum, setSum] = useState(0)
    const navigate =useNavigate()

    useEffect(()=>{
        const total=cart.reduce((acc,curr)=>acc + curr.price,0)
        setSum(total)
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
                cart.map(book=>{
                    // 
                    return(
                        <div key={book.id}>
                            {book.name}
                            <p>price: ${book.price}</p>
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