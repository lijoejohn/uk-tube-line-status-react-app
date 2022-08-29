import * as renderer from 'react-test-renderer';
import Header from '../../components/Header';

describe('Header Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
