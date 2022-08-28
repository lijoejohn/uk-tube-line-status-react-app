import { DOM_ELEMENT_IDS, LABELS } from '../constans';

function Header(): JSX.Element {
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container">
        <div className="govuk-header__logo govuk-!-margin-left-9 govuk-!-margin-right-9">
          <a href="/" className="govuk-header__link govuk-header__link--homepage">
            <span className="govuk-header__logotype">
              <span
                data-testid={DOM_ELEMENT_IDS.header_link_text}
                id={DOM_ELEMENT_IDS.header_link_text}
                className="govuk-header__logotype-text">
                {LABELS.APP_TITLE}
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
