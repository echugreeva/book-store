import {useContext,useState } from 'react'
import { AppContext } from '../App' 
import { useNavigate } from 'react-router-dom'

const Form =()=> {
    const {setForm}=useContext(AppContext)
    const [input, setInput]=useState({})
    const navigate=useNavigate()

    return  (
        <div>
            <form>
                <input type='text' placeholder='full name'
                onChange={
                    (e)=>setInput({...input, name:e.target.value})
                }
                >
                    
                </input>
                <input type='text' placeholder='address'
                onChange={
                    (e)=>setInput({...input, address:e.target.value})
                }
                >

                </input>
                <input type='phone' placeholder='phone'
                onChange={
                    (e)=>setInput({...input, phone:e.target.value})
                }
                >

                </input>
                <button
                onClick={()=>{
                    setForm(input)
                    navigate('/thankyou')
                }
                }
                >Buy</button>
            </form>
        </div>

    )
}

export default Form