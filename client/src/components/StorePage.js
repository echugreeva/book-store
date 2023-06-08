import books from '../books.json'
import {useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App'
import styled from 'styled-components'
import {Container} from '../App'


const StorePage = () => {
    const {book, setBook, cart, setCart,storeId}=useContext(AppContext)
    const navigate = useNavigate()
    console.log(storeId)
    
    return (
        
        <Container>
            
            {
                books.books.filter(e=>e.store_id == storeId).map((el) => {
                    return (
                        <BookCard key={el.id}>
                            <BookCardRow>
                                <img 
                                style={{height: '100px'}}
                                src='https://www.frontlist.in/storage/post/1653642722_photo-1630343710506-89f8b9f21d31.jpg'
                                onClick={()=>{
                                    setBook(el)
                                    navigate('/book')
                                }}
                                
                                ></img>
                                <p>{el.name}</p>
                                
                                
                                
                            </BookCardRow>
                            <BookCardRow>
                            <button
                                onClick={()=>{
                                console.log(cart.filter(e=>e.id===el.id))
                                if (cart.filter(e=>e.id===el.id).length > 0) {
                                    const id = el.id
                                    console.log(id)
                                    // const newCart = cart.map(e=> {
                                    //         if (e=>e.id===id) {
                                    //             console.log(e.id)
                                    //             console.log(e.quantity)
                                    //             return {...e, quantity: e.quantity+1}
                                    //         }  return e
                                    //     })
                                        const newCart = [...cart]
                                        const objIndex = newCart.findIndex(obj=>obj.id == id)
                                        newCart[objIndex].quantity ++

                                    setCart(newCart)
                                    console.log(cart)
                                } else {
                                    console.log(book)
                                    setCart([...cart, {...el, quantity: 1}])
                                    
                                }
                            
                                console.log(cart)
                            }} 
                            >
                                <img 
                                style={{height: '25px'}}
                                src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                                   >
                                </img>
                            </button>
                            
                            <p>price: ${el.price}</p>
                            </BookCardRow>
                            {/* <button
                            onClick={()=>{
                                setBook(el)
                                navigate('/book')
                            }}
                            >Info</button>
                             */}
                        </BookCard>
                        
                    )
                })
                    
            }  
        </Container>
        
    ) 
}

export default StorePage

export const BookCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center
`;

export const BookCardRow = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
text-align: center
`;