import Image from "next/image";
export default function Mascot() {
    return <Image src="/Mascot.svg"
        alt="Mascot"
        width={80}
        height={91}
        className="absolute bottom-12 left-20 h-auto"
    /> 
}
