import Image from "next/image";
export default function Cloud({ Title, Body, x, y, size } : { Title: string; Body: string; x: number | string; y: number | string; size?: number }) {
    return <div style={{ left: x, bottom: y }} className="absolute">
        <h3>{Title}</h3>
        <p>{Body}</p>
        <Image src="/Cloud.svg"
            alt=""
            width={size || 400}
            height={size || 600}
            className="absolute bottom-0 left-0 h-auto w-full -z-10"
        />
    </div>
}