import renderer from 'react-test-renderer';
import IndexPage from '../pages';

describe('Index page', () => {
  it('should match the snapshot', () => {
    const launch = {
      timestamp: 1605451340000,
      mission: 'Mission Name',
      site: 'Kennedy Space Center',
      rocket: 'Falcon 9',
    };
    const tree = renderer.create(<IndexPage launch={launch} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
