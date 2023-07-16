import Image from "next/image"
export default function AppBar(){
    return(
<div style={styles.AppBar}>

    <Image alt="shop" src="/shop.png" width={100} height={100} style={styles.shop}/>
  

    <Image alt="search" src="/search.png" width={100} height={100} style={styles.search}/>

</div>
    )
}
const styles = {
    AppBar:{
        width:"100%",
        height:"5rem",
        background:"#FF304F",
       position:"absolute",
       top:"0px"
    
    },
  
   
    shop:{
        width:"1.88rem",
        height:" 2.18rem",
position:"absolute",
left:"3.19rem",
top:"1.37rem"
    },
    search:{
        width: "1.54rem",
        height: "1.56rem",
        position:"absolute",
    right:"3.19rem",
        top:"1.69rem"
    }
}