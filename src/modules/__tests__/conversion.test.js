import { BrowserRouter } from 'react-router-dom';
import { renderState } from '../../utils/test-utils';
import Conversion from '../conversion';

describe('Conversion', () => {
  test('Conversion items renders as expected', async () => {
    const snapConversion = renderState(
      <BrowserRouter>
        <Conversion />
      </BrowserRouter>,
    );

    expect(snapConversion).toMatchSnapshot();
  });
});
