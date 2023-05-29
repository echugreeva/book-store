import {useContext,useState, useEffect } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const [sum, setSum] = useState(0)
    // const [localCart, setLocal] = useState( [...new Set(cart)])
    // const [quantity,setQuantity] = useState([])
    const navigate =useNavigate()
    
    useEffect(()=>{
        const total=cart.reduce((acc,curr)=>acc + curr.price * curr.quantity,0)
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
             
                    return(
                        <div key={book.id}>
                            
                            {book.name} 
                            <p>price: ${book.price}</p>
                              <div>
                                {book.quantity}
                                
                             </div>  

                            
                            <button
                                onClick={()=> {
                                        // if (book.quantity = 1){
                                        //     setCart(cart.filter(e=>e.id !== book.id)) 
                                        // }
                                        
                                        // else {
                                            const newCart = cart.map(e=> {
                                                if (e=>e.id===book.id) {
                                                    return {...e, quantity: e.quantity-1}
                                                }  return e
                                            })
                    
                                        setCart(newCart)
                                        // }
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