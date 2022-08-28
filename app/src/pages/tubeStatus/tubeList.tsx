import { useState } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import TubeStatus from './tubeStatus';
import { getColorClass } from '../../services/helper';
import { SingleLineStatus } from '../../Interface/tubeStatus';
import { DOM_ELEMENT_IDS } from '../../constans';

function TubeList({ data }: { data: SingleLineStatus }): JSX.Element {
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
        aria-controls="expanded-content-1"
        className="button-elm"
        data-testid={`${DOM_ELEMENT_IDS.tube_list_button}-${data.id}`}
        id={`${DOM_ELEMENT_IDS.tube_list_button}-${data.id}`}>
        <span className={`${getColorClass(data.id)} color-cod`} />
        <span className="tube-name text">{data.name}</span>
        <Icon
          data-expanded={show}
          path={!show ? 'M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z' : 'M0 12v1h23v-1h-23z'}
        />
      </Button>
      {show === true ? <TubeStatus status={data} /> : null}
    </>
  );
}
export default TubeList;
