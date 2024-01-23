import Image from "src/components/atoms/Img";

interface FigureProps {
  src: string;
  className?: string;
  alt: string;
  captionClass?: string;
  caption?: string;
}

function Figure({ src, className, alt, caption, captionClass }: FigureProps) {
  return (
    <>
      <figure>
        <Image src={src} alt={alt} className={className} />
        <figcaption className={`text-sm sm:text-xl ${captionClass}`}>{caption}</figcaption>
      </figure>
    </>
  );
}

export default Figure;
