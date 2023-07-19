import Image from "next/image"
export default function AppBar(){
    return(
<div className="w-full h-16 fixed top-0 left-0 right-0 bg-red">

    <Image alt="shop" src="/shop.png" width={100} height={100} className="w-[1.8rem] h-[2.1rem] absolute left-[3.19em] top-[0.94em]"/>
  

    <Image alt="search" src="/search.png" width={100} height={100} className="w-[1.54rem] h-[1.56rem] absolute right-[3.19em] top-[1.25em]"/>

</div>
    )
}
