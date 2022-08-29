import { Component, ReactNode } from 'react';
import Button from './Button';
import { LABELS } from '../constans';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="error-heading">
          <h3 className="">{LABELS.ERROR_TEXT}</h3>
          <Button className="govuk-button" type="button" onClick={() => window.location.reload()}>
            Click to reload!
          </Button>
        </div>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
