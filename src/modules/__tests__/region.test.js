/*eslint-disable*/
import { screen } from '@testing-library/react';
import { renderState } from '../../utils/test-utils';
import Region from '../region';

describe('Region', () => {
  test('Region items renders as expected', async () => {
    const snapRegion = renderState(<Region />);

    expect(snapRegion).toMatchSnapshot();
  });
  test('loading tile is present', async () => {
    renderState(<Region />);

    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument;
  });
});
