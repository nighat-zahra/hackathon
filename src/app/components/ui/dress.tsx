import Image from "next/image"
export default function Dress() {
    return(
        <div className="w-full  h-full mt-8 sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center p-8">
             {/* top div   */}
            <div className="mt-2">
        <h1 className="text-3xl font-bold justify-center pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
        </div>
        {/* bottom div  */}
        <div className="w-[90%]  h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
        <div className="w-[400px] h-[200px] m-1  relative">  
            <Image src={"/dress1.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dressstyle" ></Image>
           {/* <span className="absolute top-10 left-5 font-bold text-1xl">Casual</span> */}
        </div>
        <div className="w-[600px] h-[200px] m-1 relative"> 
            <Image src={"/dress2.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dressstyle"></Image>
            {/* <span className="absolute top-10 left-5 font-bold text-1xl">Formal</span> */}
        </div>
        <div className="w-[600px] h-[200px] m-1 relative"> 
            <Image src={"/dress3.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dressstyle"></Image>
            {/* <span className="absolute top-10 left-5 font-bold text-1xl">Party</span> */}
        </div>
        <div className="w-[400px] h-[200px] m-1 relative"> 
            <Image src={"/dress4.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dressstyle"></Image>
            {/* <span className="absolute top-10 left-5 font-bold text-1xl">Gym</span> */}
        </div>
        </div>
        </div>
        
    )
}