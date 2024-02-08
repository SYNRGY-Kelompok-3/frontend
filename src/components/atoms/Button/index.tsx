interface ButtonProps {
  className?: string;
  content?: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  id?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

function Button({ onClick, onSubmit, className, content, type, id }: ButtonProps) {
  return (
    <button onClick={onClick} onSubmit={onSubmit} type={type} className={className} id={id}>
      {content}
    </button>
  );
}

export default Button;
