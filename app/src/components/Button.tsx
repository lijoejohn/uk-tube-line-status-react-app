type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function Button(props: ButtonProps): JSX.Element {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
}

export default Button;
