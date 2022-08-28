import { DOM_ELEMENT_IDS, LABELS } from '../constans';

function Footer(): JSX.Element {
  return (
    <footer className="govuk-footer " role="contentinfo">
      <div className="govuk-!-margin-left-9 govuk-!-margin-right-9">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <span
              data-testid={DOM_ELEMENT_IDS.footer_text}
              id={DOM_ELEMENT_IDS.footer_text}
              className="govuk-footer__licence-description">
              {LABELS.FOOTER_TEXT}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
