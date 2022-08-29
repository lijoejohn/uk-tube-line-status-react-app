import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TubeStatus from '../../pages/tubeStatus/tubeStatus';
import { DOM_ELEMENT_IDS } from '../../constans';

import { processedData, processedData1 } from '../mockData';

describe('TubeStatus Component', function () {
  test('Should display the status details without reason', async () => {
    render(<TubeStatus status={processedData[0]} />);
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData[0].id}`)
        .getAttribute('aria-label')
    ).toBe(`"Deatils of delay ${processedData[0].name}"`);

    expect(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData[0].id}`)
    ).toHaveTextContent(processedData[0].statusSeverityDescription);
    expect(screen.getAllByRole('paragraph')).toHaveLength(1);
  });

  test('Should display the status details reason', async () => {
    render(<TubeStatus status={processedData1[0]} />);
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData1[0].id}`)
        .getAttribute('aria-label')
    ).toBe(`"Deatils of delay ${processedData1[0].name}"`);

    expect(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData1[0].id}`)
    ).toHaveTextContent(processedData1[0].statusSeverityDescription);
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
    expect(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData1[0].id}`)
    ).toHaveTextContent(processedData1[0].reason);
  });
});
