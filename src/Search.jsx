import './Search.style.css';
function Search(){
    return(
        <div className="container border">
            <div className="row">
                <div className="col ">
                    <p>Where</p>
                    <p>Search destinations</p>
                </div>
                <div className="col">
                    <p>Check in</p>
                    <p>Add dates</p>
                </div>
                <div className="col">
                    <p>Check out</p>
                    <p>Add dates</p>
                </div>
                <div className="col">
                    <p>who</p>
                    <p>Add guests</p>
                </div>
                <div className="col">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <p>Search</p>
                </div>
            </div>
        </div>
    )
}
export default Search;