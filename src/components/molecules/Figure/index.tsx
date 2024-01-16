import Image from "src/components/atoms/Img";

interface FigureProps {
  src: string;
  className?: string;
  alt: string;
  caption?: string;
}

function Figure({ src, className, alt, caption }: FigureProps) {
  return (
    <>
      <figure>
        <Image src={src} alt={alt} className={className} />
        <figcaption className="text-lg py-3 text-center">{caption}</figcaption>
      </figure>
    </>
  );
}

export default Figure;
