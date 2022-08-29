import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import TubeDetails from '../../pages/tubeStatus/tubeDetails';
import { DOM_ELEMENT_IDS } from '../../constans';

import { processedData } from '../mockData';

describe('TubeDetails Component', function () {
  test('It should render with a button and text with its tube name', async () => {
    render(<TubeDetails data={processedData[0]} />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_list_button}-${processedData[0].id}`)
    ).toHaveTextContent(processedData[0].name);
  });
  test('By default need to render the details in collaps mode with a plus icon', async () => {
    render(<TubeDetails data={processedData[0]} />);
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_list_button}-${processedData[0].id}`)
        .getAttribute('aria-expanded')
    ).toBe('false');
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_list_button_svg}-${processedData[0].id}`)
        .getAttribute('data-expanded')
    ).toBe('false');
  });
  test('On clicking on the button need to expand the details', async () => {
    render(<TubeDetails data={processedData[0]} />);
    fireEvent.click(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_list_button}-${processedData[0].id}`)
    );
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_list_button}-${processedData[0].id}`)
        .getAttribute('aria-expanded')
    ).toBe('true');
    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_list_button_svg}-${processedData[0].id}`)
        .getAttribute('data-expanded')
    ).toBe('true');

    expect(
      screen
        .getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData[0].id}`)
        .getAttribute('aria-label')
    ).toBe(`"Deatils of delay ${processedData[0].name}"`);

    expect(
      screen.getByTestId(`${DOM_ELEMENT_IDS.tube_status_details}-${processedData[0].id}`)
    ).toHaveTextContent(processedData[0].statusSeverityDescription);
  });
});
