import Navbar from "./Navbar";
import HouseTypes from "./HouseTypes";
import Houses from "./Houses";
import { useEffect, useState} from 'react';
import data from './housesData';
import House from './House';
import Cart from "./Cart";
import { useSelector,useDispatch } from 'react-redux';
import {add} from './cartSlice'
import { Route,Routes } from "react-router-dom";
const App=()=> {
  const houses=data
  const [houseType,setHouseType]=useState(null)
  const [isHouseSelected,setIsHouseSelected]=useState(null)
  const [isReserve,setIsReserve]=useState(false)
  const cart=useSelector(store=>store.cartSlice.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    localStorage.clear()
  },[])
  const handleClick=(type)=>{
    setHouseType(type)
    handleStorage(type)
    console.log(type);
  }
  const handleHouseSelected=(type)=>{
    setIsHouseSelected(type)
    handleStorage(type)
  }
  function handleStorage(type){
    if(!localStorage){
      localStorage.setItem(type,type)
    }
    else if(localStorage){
        localStorage.clear()
        localStorage.setItem(type,type)
    }
  }
  function handleAddToCart(house){
    setIsReserve(!isReserve)
    dispatch(add(house))
    alert(`${house.des} is added to Cart`)
  }
  return (
    <div>
      <Navbar handleClick={handleClick} />
      <hr />
      <HouseTypes handleClick={handleClick} />
      <br />
      <hr />
      {(isHouseSelected&& !isReserve) &&<House handleAddToCart={handleAddToCart} />}
      {(!isHouseSelected && !isReserve)&&<Houses houses={houses} houseType={houseType} handleHouseSelected={handleHouseSelected} />}
      <Routes>
        {/* <Route path="/" element={<Houses houses={houses} houseType={houseType} handleHouseSelected={handleHouseSelected} />} /> */}
        <Route path="/cart" element={<Cart isHouseSelected={isHouseSelected} />} >Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
