import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />);
  });

})

describe('header text is visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('testId-contact-h1')).toHaveTextContent('Contact me');
    expect(getByTestId('testId-contact-button')).toHaveTextContent('Submit');
  });
})