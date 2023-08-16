import { singleProduct } from '../../data'
import Single from '../single/Single'
import './product.scss'

// fetch data and sent to Single Component
const Product = () =>{
    return(
        <div className="product">
            <Single {...singleProduct}/>
        </div>
    )
}

export default Product