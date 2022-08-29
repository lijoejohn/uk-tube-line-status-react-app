import { DOM_ELEMENT_IDS } from '../../constans';
import { SingleLineStatus } from '../../Interface/tubeStatus';

function TubeStatus({ status }: { status: SingleLineStatus }): JSX.Element {
  return (
    <div
      className="expanded-content"
      data-testid={`${DOM_ELEMENT_IDS.tube_status_details}-${status.id}`}
      aria-labelledby={`${DOM_ELEMENT_IDS.tube_list_button}-${status.id}`}
      id={`expanded-content-${status.id}`}
      role="region"
      aria-label={`"Deatils of delay ${status.name}"`}>
      <div className="section">
        <p role="paragraph">{status.statusSeverityDescription}</p>
        {status.reason ? <p role="paragraph">{status.reason}</p> : null}
      </div>
    </div>
  );
}
export default TubeStatus;
