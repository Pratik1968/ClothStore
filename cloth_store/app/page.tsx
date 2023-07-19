"use client"
import { Component,useState} from "react";

import AppBar from "./component/AppBar"
import {isMobile} from 'react-device-detect';
export default class Page extends Component {
  
  constructor(props:any){
  super(props)



  }
  render() {


    return (
      <App />
    );

  }


}
function Poster() {
  

  return (
    <div className="h-96 w-full bg-[url('http://192.168.29.58:5000/getPosterHomeScreen.png')] bg-cover mt-[4em] flex  flex-col items-center justify-center">
      <p className="text-4xl font-bold text-white text-center mb-[0.5em] "> Upgrade Your Style, Shop Now  </p>
      <button className="text-base font-bold bg-red text-white w-[29.2%] h-10 rounded-full">Buy</button>
    </div>
  )
}
function OrientationLandscapeWarning(){
  let Height = "40%"

  return(
    <div  className="h-[50%] w-[50%] bg-white absolute top-1/4 left-[30%] flex flex-col rounded p-5 border shadow-lg item-center justify-center">
      <p className="mb-4 font-semibold text-center">Website is not optimised for landscape</p>
    {/* <button className="rounded-full bg-red w-[29.2%] h-10 font-bold text-white self-end ">Ok</button> */}
    </div> 
  )
}
function App(props:any) {
  let portrait = window.matchMedia("(orientation: portrait)");
 const [landscape,setLandscape] = useState(!portrait.matches)
 


  portrait.addEventListener("change", function(e) {
      if(e.matches) {
         setLandscape(false)
      } else {
          setLandscape(true)
      }
  })

  return (
    <div>
      <AppBar />
      <Poster />
{landscape === true && isMobile ? <OrientationLandscapeWarning/>:null}

 </div>
  )
}
