import smallRect from "../../../assets/small-rectangle.svg";

interface IconProps {
  className: string;
}
const SmallRectangle = ({ className }: IconProps) => {
  return <img src={smallRect} alt="Icon" width={12} className={className} />;
};

export default SmallRectangle;
