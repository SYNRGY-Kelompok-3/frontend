interface ButtonProps {
  className: string;
  content: string;
  onClick?: () => void;
}

function Button({ className, content, onClick}: ButtonProps) {
  return <button className={className} onClick={onClick} > {content}</button>;
}

export default Button;
