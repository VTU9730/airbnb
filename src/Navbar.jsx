import './Navbar.style.css'
const Navbar=()=>{
    return(
        <div className="container navbar-l">
            <div className="row " style={{display:"flex",justifyContent:"space-around"}}>
                <div className="col logo align-items-center">
                    <p><h1 class="fa-brands fa-airbnb marging"></h1></p>
                    <p className='marging'><strong>airbnb</strong></p>
                </div>
                <div className="col flex align-items-center hide">
                    <p className='marging thin-dark'><strong>Stays</strong></p>
                    <p className='thin margin'>Experiences</p>
                </div>
                <div className="col flex align-items-center">
                    <p className='marging thin-dark hide'><strong>Airbnb your home</strong></p>
                    <p className='marging hide'><i class="fa-solid fa-globe thin-dark"></i></p>
                    <p className='button float'><i class="fa-solid fa-bars marging-right"></i><i class="fa-solid fa-user"></i></p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;