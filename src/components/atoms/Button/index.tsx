interface ButtonProps {
  className: string;
  content: string;
}

function Button({ className, content }: ButtonProps) {
  return <button className={className}>{content}</button>;
}

export default Button;
