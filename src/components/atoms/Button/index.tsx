
interface ButtonProps {
    className?: string;
    content?: string;
    type?: string;
    onClick?: () => void;
    onSubmit?: () => void;
}

function Button({ onClick, onSubmit, className, content, type }: ButtonProps) {
    return (
        <button onClick={onClick} onSubmit={onSubmit} type={type} className={className}>
            {content}
        </button>
    );
};

export default Button;