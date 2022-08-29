import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import TubeStatusList from './pages/tubeStatus';
import { DOM_ELEMENT_IDS } from './constans';
import ErrorBoundary from './components/ErrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Header />
      <div className="govuk-!-margin-left-9 govuk-!-margin-right-9">
        <main
          className="govuk-main-wrapper"
          data-testid={DOM_ELEMENT_IDS.main_content}
          id={DOM_ELEMENT_IDS.main_content}
          role="main">
          <TubeStatusList />
        </main>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
