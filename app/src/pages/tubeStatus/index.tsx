import { useEffect, useState } from 'react';
import TubeDetails from './tubeDetails';
import useFetch from '../../services/fetch';
import { parseData, getChunks } from '../../services/helper';
import { SingleLineStatus } from '../../Interface/tubeStatus';
import { DOM_ELEMENT_IDS, LABELS, NO_OF_LIST_ITEM_IN_CARD } from '../../constans';

import './style.scss';

function TubeStatusList(): JSX.Element {
  const [result, setResult] = useState<SingleLineStatus[][]>();

  const { isLoading, apiData } = useFetch({
    method: 'GET',
    url: 'Line/Mode/Tube/Status'
  });

  useEffect(() => {
    if (isLoading === false && apiData) {
      /* 
      parsing the api data with helper function and split it in to chunks
      */
      const response = getChunks(parseData(apiData), NO_OF_LIST_ITEM_IN_CARD);
      setResult(response);
    }
  }, [apiData]);

  return (
    <>
      <h1
        data-testid={DOM_ELEMENT_IDS.tube_list_page_title}
        id={DOM_ELEMENT_IDS.tube_list_page_title}
        className="govuk-heading-xl text">
        {LABELS.STATUS_PAGE_HEADING}
      </h1>
      {!isLoading ? (
        <div
          className="govuk-grid-row tube-list-wrapper"
          data-testid={DOM_ELEMENT_IDS.tube_list_wrapper}
          id={DOM_ELEMENT_IDS.tube_list_wrapper}>
          {result?.length ? (
            /*
            first level iteration with array of chunks
            */
            result.map((subSet, index) => {
              return (
                <div key={`key-${index}`} className="govuk-grid-column-one-half">
                  <ul
                    data-testid={DOM_ELEMENT_IDS.tube_list_block}
                    id={`${DOM_ELEMENT_IDS.tube_list_block}-${index}`}
                    className="tube-list">
                    {
                      /*
                      second level iteration with results in each chunks of array
                      */
                      subSet.map((item) => {
                        return (
                          <li
                            key={item.id}
                            data-testid={`${DOM_ELEMENT_IDS.tube_list_row}-${item.id}`}
                            id={`${DOM_ELEMENT_IDS.tube_list_row}-${item.id}`}
                            aria-level={2}>
                            <TubeDetails data={item} />
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              );
            })
          ) : (
            <h2>{LABELS.NO_DATA_FOUND}</h2>
          )}
        </div>
      ) : (
        <h2>{LABELS.LOADING_TEXT}</h2>
      )}
    </>
  );
}
export default TubeStatusList;
