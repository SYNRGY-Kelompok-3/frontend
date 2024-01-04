interface Image {
    className: string;
    src: string;
    alt: string;
};

function Image({className, src, alt}: Image) {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
        />
    );
};

export default Image;