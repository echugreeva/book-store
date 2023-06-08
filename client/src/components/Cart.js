import {useContext,useState, useEffect } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {PurpleButton} from '../App'

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
        <Table>
            <tbody>
            {
                cart.map(el=>{
             
                    return(
                        <TableRow key={el.id}>
                            <TableCell>{el.name} </TableCell>
                            
                            
                            <TableCell>price: ${el.price}</TableCell>
                            <TableCell>
                                {el.quantity}
                                
                             </TableCell>  

                            <TableCell>
                            <button
                                onClick={()=> {
                                        if (el.quantity === 1){
                                            setCart(cart.filter(e=>e.id !== el.id)) 
                                        }
                                        
                                        else {

                                            const newCart = [...cart]
                                            const objIndex = newCart.findIndex(obj=>obj.id == el.id)
                                            newCart[objIndex].quantity --
                                        setCart(newCart)
                                        }
                                    }
                                }
                            ><img style={{height: '35px'}} src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                            </button>
                            </TableCell>
                            
                        </TableRow>
                        
                    )
                })
                
            }
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total: {sum}</TableCell>
                <TableCell><PurpleButton 
            onClick={()=>
            navigate('/form')
            }
            >Buy Now</PurpleButton></TableCell>
            </TableRow>
            
            </tbody>
        </Table>

    )
}
}

export default Cart

const CartRow =styled.div`
display: flex;
flex-direction: row;
width: 75%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center
`;

const Table = styled.table`
  margin:  0 auto;
  width: 75%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;