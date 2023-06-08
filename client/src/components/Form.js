import {useContext,useState } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {PurpleButton} from '../App' 

const Form =()=> {
    const {setForm, setCart}=useContext(AppContext)
    const [input, setInput]=useState({})
    const navigate=useNavigate()
    const generateOrderNumber = () => {
        const result = Math.random().toString(36).substring(2,7)
        return result
    }

    return  (
        <FormContainer>
            
                <FormField type='text' placeholder='full name'
                onChange={
                    (e)=>setInput({...input, name:e.target.value})
                }
                >
                    
                </FormField>
                <FormField type='text' placeholder='address'
                onChange={
                    (e)=>setInput({...input, address:e.target.value})
                }
                >

                </FormField>
                <FormField type='phone' placeholder='phone'
                onChange={
                    (e)=>setInput({...input, phone:e.target.value})
                }
                >

                </FormField>
                <PurpleButton
                onClick={()=>{
                    setCart([])
                    setForm({...input, order: generateOrderNumber() })
                    navigate('/thankyou')
                }
                }
                >Buy</PurpleButton>
           
        </FormContainer>

    )
}

export default Form

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
`;