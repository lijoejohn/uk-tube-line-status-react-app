import { DOM_ELEMENT_IDS } from '../../constans';
import { SingleLineStatus } from '../../Interface/tubeStatus';

function TubeStatus({ status }: { status: SingleLineStatus }): JSX.Element {
  return (
    <div
      className="expanded-content"
      data-testid={`${DOM_ELEMENT_IDS.tube_status_details}-${status.id}`}
      id={`${DOM_ELEMENT_IDS.tube_status_details}-${status.id}`}
      role="region"
      aria-label={`"Deatils of delay ${status.name}"`}>
      <div className="section">
        <p>{status.statusSeverityDescription}</p>
        {status.reason ? <p>{status.reason}</p> : null}
      </div>
    </div>
  );
}
export default TubeStatus;
