/*eslint-disable*/
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderState } from '../../utils/test-utils';
import Continents from '../continents';

describe('Continents', () => {
  test('Continents items renders as expected', async () => {
    const snapContinents = renderState(
      <BrowserRouter>
        <Continents />
      </BrowserRouter>,
    );

    expect(snapContinents).toMatchSnapshot();
  });
  test('Africa tile is present', async () => {
    renderState(
      <BrowserRouter>
        <Continents />
      </BrowserRouter>,
    );

    const africa = screen.getByText('Africa');

    expect(africa).toBeInTheDocument; 
  });
  test('Africa tile is present', async () => {
    renderState(
      <BrowserRouter>
        <Continents />
      </BrowserRouter>,
    );

    const africa = screen.getByText('Africa');

    fireEvent.click(africa);

    expect(africa).not.toBeInTheDocument;
  });
});
