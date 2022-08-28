import Button from './Button';

function ErrorPage(): JSX.Element {
  return (
    <div className="error-heading">
      <h3 className="">Something went wrong</h3>
      <Button className="govuk-button" type="button" onClick={() => window.location.reload()}>
        Click to reload!
      </Button>
    </div>
  );
}
export default ErrorPage;
