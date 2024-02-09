interface Image {
  className?: string;
  src: string;
  alt: string;
  id?: string;
}

function Image({ className, src, alt, id }: Image) {
  return <img className={className} src={src} alt={alt} id={id} />;
}

export default Image;
