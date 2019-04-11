import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import ReactDOM from 'react-dom';
import App from './App';
import API from './api';

jest.mock('./api');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App api={new API()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match App Snapshot', async () => {
  const { container, getByText } = await render(<App api={new API()} />);
  await waitForElement(() => getByText('Polo Shirt'));
  expect(container.firstChild).toMatchSnapshot();
});
