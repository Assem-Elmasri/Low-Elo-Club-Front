import Cloud from "@/components/Cloud";
import Dialog from "@/components/Dialog";
import Mascot from "@/components/Mascot";
import Image from "next/image";
export default function Home() {
  return <>
    <section className="relative flex flex-col items-center justify-center min-h-225 bg-linear-to-t from-[#d5eceb] to-[#ffffff] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-[10px]font-[poppins] font-normal">Free to join, So as losing.</p>
        <h1 className="text-[72px] h-22 font-bold">BLAME THE TEAM, ALWAYS.</h1>
        <p className="text-[16px] font-[poppins]">Now recruiting the tilted, the tactical, and the terminally hardstuck.</p> 
        <button className="font-[poppins] font-bold bg-[#E83E9F] py-2 px-4 text-white w-56.25 h-13.5 text-[20px]">GET IN LOSER</button>
      </div>
      <Image src="/HeroBG.svg"
        alt=""
        width={1920}
        height={600}
        sizes="100vw"
        className="absolute bottom-0 left-0 h-auto w-full"
      />
      <Mascot/>
      <Dialog x={150} y={180}> The grass is <br/>greener here </Dialog>
    </section>
    <section className="relative flex flex-col items-center min-h-225 z-10">
      <h2>OUR DAMAGE</h2>
      <Cloud Title="The Tilted" Body="The ones who " x={200} y={500} size={500}/>
    </section>

  </>;
}
