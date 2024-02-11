interface RectangleProps {
  bgColor: string;
  priceTag: number | string;
}

const Rectangle = ({ bgColor, priceTag }: RectangleProps) => {
  const dataTag = typeof priceTag === "number" ? `Rp.${priceTag.toLocaleString()}` : priceTag;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-[41px] h-[41px] ${bgColor} rounded-lg border-[2px]`} />
      <p className="text-[10px] text-black font-medium">{dataTag}</p>
    </div>
  );
};

export default Rectangle;
