import { useState } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import TubeStatus from './tubeStatus';
import { getColorClass } from '../../services/helper';
import { SingleLineStatus } from '../../Interface/tubeStatus';
import { DOM_ELEMENT_IDS } from '../../constans';

function TubeDetails({ data }: { data: SingleLineStatus }): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShow(!show);
        }}
        type="button"
        aria-label={`"Status of ${data.name}"`}
        aria-expanded={show}
        aria-controls={`expanded-content-${data.id}`}
        className="button-element"
        data-testid={`${DOM_ELEMENT_IDS.tube_list_button}-${data.id}`}
        id={`${DOM_ELEMENT_IDS.tube_list_button}-${data.id}`}>
        <span className={`${getColorClass(data.id)} color-code`} />
        <span className="tube-name text">{data.name}</span>
        <Icon
          aria-label={show ? 'Click to collapse the details' : 'Click to expand the details'}
          data-expanded={show}
          data-testid={`${DOM_ELEMENT_IDS.tube_list_button_svg}-${data.id}`}
          path={!show ? 'M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z' : 'M0 12v1h23v-1h-23z'}
        />
      </Button>
      {show === true ? <TubeStatus status={data} /> : null}
    </>
  );
}
export default TubeDetails;
