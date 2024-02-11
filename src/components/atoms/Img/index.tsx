interface Image {
  className?: string;
  require?: boolean;
  src: string;
  alt: string;
  id?: string;
}

function Image({ className, src, alt, id, require }: Image) {
  return <img className={className} src={src} alt={alt} id={id} {...(require && { required: true })} />;
}

export default Image;
