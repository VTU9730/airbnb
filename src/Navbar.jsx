import "./Navbar.style.css";
const Navbar = () => {
  return (
    <>
      <div className="container navbar-l align-items-center">
        <div className="row ">
          <div className="col logo ">
            <p>
              <h1 className="fa-brands fa-airbnb marging"></h1>
            </p>
            <p className="marging">
              <strong>airbnb</strong>
            </p>
          </div>
          <div className="col flex align-items-center hide">
            <p className="marging thin-dark">
              <strong>Stays</strong>
            </p>
            <p className="thin margin">Experiences</p>
          </div>
          <div className="col-auto flex align-items-center">
            <p className="marging thin-dark hide">
              <strong>Airbnb your home</strong>
            </p>
            <p className="marging hide">
              <i className="fa-solid fa-globe thin-dark"></i>
            </p>
            <p className="button float">
              <i className="fa-solid fa-bars marging-right"></i>
              <i className="fa-solid fa-user"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
