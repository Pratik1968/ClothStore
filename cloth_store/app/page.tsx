"use client"
import {useState,useEffect} from "react";
import CatergoriesCards from "./component/CatergoriesCards";
import AppBar from "./component/AppBar"
import {isMobile} from 'react-device-detect';
import ProductCards from "./component/ProductCards";

export default function Page(){
  return <App/>
}
function Trending(){
 let prod =[1,2,3,4,5,6,7,8,9,10]
  return(
    <div className="f mt-14 w-full h-[100px]">
      <p className="ml-12 font-bold text-xl text-left mb-[1.58rem]">Trending</p>
     <div className="flex  overflow-x-auto space-x-8" >
     
      {
prod.map(p=>(<ProductCards key={p} title="Blue Shirt" price="$100" width="100" height="100" alt="trending" src="http://192.168.29.58:5000/CategoriesMenHomeScreen.png"/>))
      }
      </div>
      </div>
  )
}
function Category()
{
  return(
  <div className="flex flex-col items-center justify-center mt-14">
    <p className="font-bold text-xl">Categories</p> 
    <div className="w-full flex flex-row justify-evenly mt-5">
    <CatergoriesCards title="Men" width ={100} height={100} src="http://192.168.29.58:5000/CategoriesMenHomeScreen.png" alt="hello"/>
    <CatergoriesCards title="Women" width ={100} height={100} src="http://192.168.29.58:5000/CategoriesWomenHomeScreen.png" alt="hello"/>
    <CatergoriesCards title="Kids" width ={100} height={100} src="http://192.168.29.58:5000/CategoriesKidsHomeScreen.png" alt="hello"/>
  </div>
  </div>
  )
}
function Poster() {
  

  return (
    <div className="h-96 w-full bg-[url('http://192.168.29.58:5000/PosterHomeScreen.png')] bg-cover mt-[4em] flex  flex-col items-center justify-center">
      <p className="text-4xl font-bold text-white text-center mb-[0.5em] "> Upgrade Your Style, Shop Now  </p>
      <button className="text-base font-bold bg-red text-white w-[29.2%] h-10 rounded-full">Buy</button>
    </div>
  )
}
function OrientationLandscapeWarning(){


  return(
    <div  className="h-[50%] w-[50%] bg-white absolute top-1/4 left-[30%] flex flex-col rounded p-5 border shadow-lg item-center justify-center">
      <p className="mb-4 font-semibold text-center">Website is not optimised for landscape</p>
      </div> 
  )
}
function App(props:any) {
  const [landscape,setLandscape] = useState(false)
useEffect(()=>{
  let portrait = window.matchMedia("(orientation: portrait)");
setLandscape(!portrait.matches)
 


  portrait.addEventListener("change", function(e) {
      if(e.matches) {
         setLandscape(false)
      } else {
          setLandscape(true)
      }
  })
})

 
  return (
    <div>
      <AppBar />
      <Poster />
{landscape === true && isMobile ? <OrientationLandscapeWarning/>:null}
<Category/>
<Trending/>
 </div>
  )
  }
