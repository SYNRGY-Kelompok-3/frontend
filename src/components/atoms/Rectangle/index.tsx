interface RectangleProps {
  bgColor: string;
  priceTag: number;
}

const Rectangle = ({ bgColor, priceTag }: RectangleProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-[41px] h-[41px] ${bgColor} rounded-lg`} />
      <p className="text-[10px] text-black font-medium">Rp.{priceTag.toLocaleString()}</p>
    </div>
  );
};

export default Rectangle;
