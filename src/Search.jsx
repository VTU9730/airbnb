import "./Search.style.css";
function Search() {
  return (
    <>
      <div className="container border hide-first align-items-center">
        <div className="row">
          <div className="col border-end background">
            <p className="thin-dark">Where</p>
            <p className="thin">Search destinations</p>
          </div>
          <div className="col border-end background">
            <p className="thin-dark">Check in</p>
            <p className="thin">Add dates</p>
          </div>
          <div className="col border-end background">
            <p className="thin-dark">Check out</p>
            <p className="thin">Add dates</p>
          </div>
          <div className="col background">
            <p className="thin-dark">Who</p>
            <p className="thin">Add guests</p>
          </div>
          <div className="col background">
            <p>
              <i className="fa-solid fa-magnifying-glass search"></i>
            </p>
            {/* <p>Search</p> */}
          </div>
        </div>
      </div>
      <div className="container hide-second align-items-center">
        <div className="row align-items-center">
          <div className="col-10">
            <div className="row border align-items-center">
              <div className="col-2">
                <p>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </p>
              </div>
              <div className="col-10">
                <p>
                  <strong>Where to?</strong>
                </p>
                <p>Anywhere.Any week.Add guest</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <i className="fa-solid fa-filter filter"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
