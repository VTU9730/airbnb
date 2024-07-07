import { houses } from './housesData';
import './Houses.style.css';
import { useContext, useEffect, useState } from 'react';
import { appContext } from './Context';
const Houses=()=>{
    const [data, setData] =useState(houses)
    const {appState,setAppState} = useContext(appContext)
    console.log(appState.houseType);

    function renderFilteredHouses(){
        setData(houses)
        console.log(data);
        const filteredHouses = data.filter((house)=>house.type === appState.houseType)
        setData(filteredHouses);
    }

    
    useEffect(()=>{
        if(appState.houseType) renderFilteredHouses()
        
    },[appState])
    
    return(
        <div className='container center'>
            <div className='row text-center justify-content-center'>
                {data.map(house=>{
                        return(
                            <div key={house.id} className="col-xs-6 col-md-4 card-container col-lg-3" >
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