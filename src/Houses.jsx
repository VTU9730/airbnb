import { houses } from './housesData';
import './Houses.style.css';

const Houses=(props)=>{
    return(
        <div className='container center'>
            <div className='row text-center'>
                {houses.map(house=>{
                        return(
                            <div key={house.id} className="col-3 card-container" >
                                <img src={house.img} alt={house.id} className='house'/>
                                <div >
                                    <p><strong>{house.country}</strong></p>
                                    <p><i className="bi bi-star-fill"></i> {house.rating}</p>
                                </div>
                                
                                <p><strong><i className="bi bi-currency-rupee"></i>{house.price}</strong> /night</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>   
    )
}
export default Houses;