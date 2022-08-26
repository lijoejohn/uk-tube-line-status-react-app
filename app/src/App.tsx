import { useState } from 'react';
import './scss/main.scss';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="govuk-header " role="banner" data-module="govuk-header">
        <div className="govuk-header__container">
          <div className="govuk-header__logo govuk-!-margin-left-9 govuk-!-margin-right-9">
            <a href="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <span className="govuk-header__logotype-text">Tube Status</span>
              </span>
            </a>
          </div>
        </div>
      </header>
      <div className="govuk-!-margin-left-9 govuk-!-margin-right-9">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <h1 className="govuk-heading-xl text">Current status of all tube lines.</h1>
          <div className="govuk-grid-row tube-list-wrapper">
            <div className="govuk-grid-column-one-half">
              <ul className="tube-list">
                <li>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    aria-expanded="false"
                    aria-controls="expanded-content-1"
                    className="button-elm"
                    role="button"
                    id="button-1">
                    <span className="bg-color-red color-cod" />
                    <span className="tube-name text">Mute</span>
                    {!show ? (
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <path d="M0 12v1h23v-1h-23z" />
                      </svg>
                    )}
                  </button>
                  {show ? (
                    <div
                      className="expanded-content"
                      id="expanded-content-1"
                      role="region"
                      aria-label="Deatils of delay - 1">
                      <div className="section">
                        <p>Part suspended</p>
                        <p>
                          Docklands Light Railway: No service between Mudchute and Canary Wharf due
                          a fault with the signalling system at Crossharbour. London Buses are
                          accepting DLR tickets. SEVERE DELAYS between Mudchute and Lewisham. GOOD
                          SERVICE on other DLR Routes.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li>
                  <button
                    onClick={() => {
                      alert('hello');
                    }}
                    className="button-elm"
                    role="button"
                    id="button-2">
                    <span className="bg-color-yellow color-cod" />
                    <span className="tube-name text">Mute</span>
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      fillRule="evenodd">
                      <path
                        fillRule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="govuk-grid-column-one-half">
              <ul className="tube-list">
                <li>
                  <button
                    onClick={() => {
                      alert('hello');
                    }}
                    className="button-elm"
                    role="button"
                    id="button-3">
                    <span className="bg-color-blue color-cod" />
                    <span className="tube-name text">Mute</span>
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                      fillRule="evenodd">
                      <path
                        fillRule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      alert('hello');
                    }}
                    className="button-elm"
                    role="button"
                    id="button-4">
                    <span className="bg-color-purple color-cod" />
                    <span className="tube-name text">Mute</span>
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="20px"
                      height="20px"
                      fillRule="evenodd">
                      <path
                        fillRule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <button
            data-testid="count-button"
            className="govuk-button"
            type="button"
            onClick={() => setCount(() => count + 1)}>
            count is {count}
          </button> */}
        </main>
      </div>
      <footer className="govuk-footer " role="contentinfo">
        <div className="govuk-!-margin-left-9 govuk-!-margin-right-9">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <span className="govuk-footer__licence-description">
                All content is available under the Sample Licence
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
