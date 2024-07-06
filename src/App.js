import Filter from "./Filter";
import Navbar from "./Navbar";
import Search from "./Search";

const App=()=> {
   
  return (
    <div>
      <Navbar />
      <Search />
      <Filter />
      {/* <hr />
      <HouseTypes handleClick={handleClick} />
      <br />
      <hr />
      {(isHouseSelected&& !isReserve) &&<House handleAddToCart={handleAddToCart} />}
      {(!isHouseSelected && !isReserve)&&<Houses houses={houses} houseType={houseType} handleHouseSelected={handleHouseSelected} />}
      <Routes> */}
        {/* <Route path="/" element={<Houses houses={houses} houseType={houseType} handleHouseSelected={handleHouseSelected} />} /> */}
        {/* <Route path="/cart" element={<Cart isHouseSelected={isHouseSelected} />} >Cart</Route>
      </Routes> */}
    </div>
  );
}

export default App;
