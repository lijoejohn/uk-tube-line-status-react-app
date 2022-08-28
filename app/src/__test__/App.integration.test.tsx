import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as renderer from 'react-test-renderer';
import axios from 'axios';

import { mockData, SAMPLE_ID, SAMPLE_NAME } from './mockData';

import { DOM_ELEMENT_IDS, LABELS } from '../constans';
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

jest.mock('axios');
const mAxios = axios as jest.MockedFunction<typeof axios>;

describe('Test APP with API', function () {
  afterEach(() => {
    mAxios.mockClear();
  });

  test('API with valid response', async () => {
    const mockResponse = { data: mockData, status: 200, statusText: 'ok', headers: {}, config: {} };
    mAxios.mockResolvedValueOnce(mockResponse);
    render(<App />);
    await waitFor(() => {
      expect(axios).toHaveBeenCalledTimes(1);
      expect(screen.getAllByRole('listitem')).toHaveLength(11);
      expect(screen.getAllByTestId(DOM_ELEMENT_IDS.tube_list_block).length).toBe(2);
      expect(screen.getByTestId(DOM_ELEMENT_IDS.tube_list_page_title)).toHaveTextContent(
        LABELS.STATUS_PAGE_HEADING
      );
      expect(screen.getByTestId(`${DOM_ELEMENT_IDS.tube_list_row}-${SAMPLE_ID}`)).toHaveTextContent(
        SAMPLE_NAME
      );
    });
  });
  test('API with empty response', async () => {
    const mockResponse = { data: [], status: 200, statusText: 'ok', headers: {}, config: {} };
    mAxios.mockResolvedValueOnce(mockResponse);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(LABELS.NO_DATA_FOUND)).toBeInTheDocument();
      expect(axios).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Test App Semantic', function () {
  test('Should render app with Header,Main and Footer', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Header));
    expect(testInstance.findByType(Footer));
    expect(testInstance.findByType('main'));
  });
});

describe('Test App Accessibility', function () {
  it('Should render with Standard in Accessibility', async function () {
    const mockResponse = {
      data: mockData,
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {}
    };
    mAxios.mockResolvedValueOnce(mockResponse);
    expect.extend(toHaveNoViolations);
    const { container } = render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading Data'));
    expect(await axe(container)).toHaveNoViolations();
  });
});
