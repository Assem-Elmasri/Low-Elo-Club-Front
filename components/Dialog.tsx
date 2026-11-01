

type PixelDialogProps = {
  x: number | string;   
  y: number | string;
  children: React.ReactNode;
};

export default function Dialog({ x, y, children }: PixelDialogProps) {
  return (
    <div className="absolute" style={{ left: x, bottom: y }}>
      <div
        className="relative rounded-3xl border-[6px] border-neutral-800 bg-white px-6 py-4 text-center text-xl leading-tight text-neutral-800"
      >
        {children}

        {/* tail: dark triangle (outline) */}
        <span
          className="absolute -bottom-[36px] left-6 h-8 w-9 bg-neutral-800"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        {/* tail: white triangle (fill) */}
        <span
          className="absolute -bottom-[28px] left-[30px] h-8 w-[22px] bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      </div>
    </div>
  );
}