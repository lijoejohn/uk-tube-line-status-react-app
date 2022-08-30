type SVGProps = React.SVGProps<SVGSVGElement>;

function Icon({ path, ...props }: SVGProps): JSX.Element {
  return (
    <svg
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <path d={path} />
    </svg>
  );
}

export default Icon;
