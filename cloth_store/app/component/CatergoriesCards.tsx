import Image from "next/image"

export default function CatergoriesCards(props:any){
    return(
        <div>
            <Image className="rounded-3xl w-[5.2rem] h-[5.1rem]" src={props.src} width ={props.width} height={props.height} alt={props} unoptimized/>
        
        <p className="text-center font-bold text-xs mt-[0.78rem]">{props.title}</p>
        </div>
    )
}