import { useRef} from "react";
const Navbar=(props)=>{
    const {handleClick}=props
    let inputRef=useRef(null)
    return(
        <div id="navbar">
            <div className="btn-group">
                <input className="btn btn-outline-light" type="text" ref={inputRef} ></input>
                <i className="bi bi-search btn btn-secondary" onClick={()=>{handleClick(inputRef.current.value);inputRef=null;}}></i>
            </div>
            {/* <div className="navbar-ele">
                <a href="#"><ion-icon name="balloon-outline"></ion-icon></a>
                <a href="#">airbnb</a>
            </div>
            <div className="btn-group">
                <button type="button" class="btn btn-outline-secondary"><a href="#">any where</a></button>
                <button type="button" class="btn btn-outline-secondary"><a href="#">any week</a></button> 
                <button type="button" class="btn btn-outline-secondary"><a href="#">add guest</a></button>
                <button type="button" class="btn btn-outline-secondary"><a href="#"><ion-icon name="search-outline"></ion-icon></a></button>
                
            </div>
            <div className="navbar-ele">
                    <a href="#">Airbnb your home</a>
                    <a href="#"><ion-icon name="globe-outline"></ion-icon></a>
                <div className="navbar-ele btn-group">
                    <button type="button" class="btn btn-outline-secondary"><a href="#"><ion-icon name="menu-outline"></ion-icon></a></button>
                    <button type="button" class="btn btn-outline-secondary"><a href="#"><ion-icon name="person-circle-outline"></ion-icon></a></button>
                </div>
            </div> */}
        </div>
    )
}
export default Navbar;