import { useDispatch, useSelector } from "react-redux";
import {sub} from './cartSlice'
const Cart=(props)=>{
    const houses=useSelector(store=>store.cartSlice.cart)
    const dispatch=useDispatch()
    console.log(houses);
    return(
        <>
            <h2>Spaces in your cart</h2>
            {houses.map((house)=>{
                return(
                    <div>
                        <p>{house.country}</p>
                        <p>{house.host}</p>
                        <p>{house.price}</p>
                        <button className="btn btn-primary" onClick={()=>dispatch(sub(house.id))}>Remove</button>
                    </div>
                )
            })}
        </>
    )
}
export default Cart;