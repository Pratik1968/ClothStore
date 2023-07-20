import Image from "next/image"
export default function ProductCards(props:any){
    return(
        <div className=" flex flex-col flex-shrink-0">
            <Image className="rounded w-[6.25rem] h-[6rem]" width={props.width} height={props.height} alt={props.alt} src={props.src}/>
        <div className="ml-2">
        <p className="font-bold text-xs">{props.title}</p>
        <p className="font-bold text-[0.62rem]">{props.price}</p>
        </div>
        </div>
    )
}