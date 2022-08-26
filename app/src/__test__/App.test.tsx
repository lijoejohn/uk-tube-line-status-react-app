import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import App from '../App';

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', async function () {
    expect.extend(toHaveNoViolations);
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();

    expect(screen.getByTestId('count-button').textContent).toEqual('count is 0');

    fireEvent.click(screen.getByTestId('count-button'));
    expect(screen.getByTestId('count-button').textContent).toEqual('count is 1');
  });
});
