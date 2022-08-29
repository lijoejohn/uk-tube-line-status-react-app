import * as renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <Button className="govuk-button" type="button">
          Test
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
