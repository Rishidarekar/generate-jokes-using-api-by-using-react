import { useEffect, useState } from "react";

export default function Counter(){
  let[countx,setCountx]= useState(0);
  let[county,setCounty]= useState(0);
  let inccountx=()=>{
    setCountx((currVal)=>currVal+= 1);
  };
  let inccounty=()=>{
    setCounty((currVal)=>currVal+= 1);
  };
  useEffect(function sideEffect(){
    console.log("this is side effect");
  },[])
    return(
        <div>
         <button onClick={inccountx}>countx:{countx}</button>
         <button onClick={inccounty}>county:{county}</button>
        </div>
    );
}