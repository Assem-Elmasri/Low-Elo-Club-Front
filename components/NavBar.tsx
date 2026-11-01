import Image from "next/image";
export default function NavBar() {
    return (
        <nav className="flex items-center justify-center h-17.5 gap-1 border-b border-[#c4c4c4]" >
            <Image src="/NavMascot.svg"
                alt="Low Elo Club Mascot"
                width={50}
                height={50}
            />
            <p className="text-xl">Low Elo Club</p>
        </nav>
    );
}