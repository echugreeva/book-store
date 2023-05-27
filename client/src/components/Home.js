import stores from '../stores.json'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {
                stores.stores.map((store, i) => {
                    return (
                        <div key={i}>
                            <p>{store.name}</p>
                            <p>{store.address}</p>
                            <Link to ='/store'><button>Go to store</button></Link>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home 