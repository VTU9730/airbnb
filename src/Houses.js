const Houses=(props)=>{
    let {houses,houseType,handleHouseSelected}=props
    if(houseType){
        houses=houses.filter(house=>house.type===houseType)
    }
    return(
        <div id="houses-component" className='container center'>
            <div className='row'>
                {houses.map(house=>{
                        return(
                            <div key={house.id} className="col-md-4 col col-sm-6 col-lg" onClick={()=>handleHouseSelected(house.type)}>
                                <img src={require(`./images/${house.img}.webp`)} height="100px" width="100px" alt={house.id}/>
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