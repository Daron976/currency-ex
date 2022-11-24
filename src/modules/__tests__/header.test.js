import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../header';

describe('Header', () => {
  test('Header items renders as expected', async () => {
    const snapNavigation = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
      .toJSON();
    expect(snapNavigation).toMatchSnapshot();
  });
});
