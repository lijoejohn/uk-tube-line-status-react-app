import * as renderer from 'react-test-renderer';
import Icon from '../../components/Icon';

describe('Icon Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
