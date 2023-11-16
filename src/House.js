 
import { useState } from "react"
import housesData from "./housesData"
import { Link } from "react-router-dom"
const House=(props)=>{
    const {handleAddToCart}=props
    const [counter,setCounter]=useState(0)
    let houses=housesData.filter((house)=>house.type==="Garden")
    const handleIncrement=()=>{
        setCounter(counter=>counter+1)
    }
    const handleDecrement=()=>{
        if(counter>0){
            setCounter(counter=>counter-1)
        }
    }
    return(
        <div className= "container center">
            <div className="row">
                {houses.map(house=>{
                    return(
                        <div className="col" key={house.id  }>
                            <h1>{house.des}</h1>
                            <div id="rating-div">
                                <div>
                                    <span><i class="bi bi-star-fill"></i> {house.rating} |</span>
                                    <span>  {house.reviews.length} Reviews |</span>
                                    <span>{house.country}</span>
                                </div>
                                <div>
                                    <span> <i class="bi bi-box-arrow-up"></i> Share </span>
                                    <span> <i class="bi bi-heart"></i> Save</span>
                                </div>
                            </div>
                            <div><img src={require('./images/garden.webp')} width="40%" height="40%" alt={house.img}/></div>
                            <div><h2>Room in a rental unit hosted by {house.host}</h2></div>
                            <div>
                                <span>Days: {counter} </span> 
                                <span> Total: {counter*house.price} /-</span><br />
                                <button className="btn btn-primary" onClick={handleDecrement}>-</button>
                                <button className="btn btn-primary" onClick={handleIncrement}>+</button>
                                <Link to="/cart"><button className="btn btn-secondary" onClick={()=>handleAddToCart(house)}>Add To Cart</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default House