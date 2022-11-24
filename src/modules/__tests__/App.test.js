import { renderState } from '../../utils/test-utils';
import App from '../../App';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('App', () => {
  test('App renders as expected', () => {
    const app = renderState(<App />);

    expect(app).toMatchSnapshot();
  });
});
