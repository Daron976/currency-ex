/*eslint-disable*/
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from '../homepage';

describe('Homepage', () => {
  test('Homepage items renders as expected', async () => {
    const snapHomepage = renderer.create(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    )
      .toJSON();
    expect(snapHomepage).toMatchSnapshot();
  });
  test('Proceed is present', async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );

    const btn = screen.getAllByText('Proceed');

    expect(btn).toBeInTheDocument;
  });
  test('Proceed button works', async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );

    const btn = screen.getByText('Proceed');

    fireEvent.click(btn);

    expect(btn).not.toBeInTheDocument;
  });
});
