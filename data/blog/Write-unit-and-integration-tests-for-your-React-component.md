# Write unit and integration tests for your React component

![React and Testing/Library](https://miro.medium.com/v2/resize:fit:875/1*sv-LTdcuXGM0O37yUAbPSw.png)

To write unit and integration tests for your React component that includes two controlled inputs managed with `useState`, you can follow these general steps:

1.  Set up your testing environment: You can use popular testing libraries like Jest and React Testing Library. You can also install Enzyme to test React components with a jQuery-like API.
2.  Identify the component: You need to identify the React component you want to test. In this case, it would be the form component that includes two controlled inputs.
3.  Write unit tests: You can write unit tests for the controlled inputs by testing the behavior of the `useState` hook. For example, you can test if the value of the input changes when the `onChange` event is triggered or if the input value is set to an initial value.
4.  Write integrated tests: You can write integrated tests to test the behavior of the form component when it is rendered in the context of a larger application. For example, you can test if the form submission works correctly or if the form validation works as expected.

Here’s an example of how you could write unit tests for a form component that includes two controlled inputs:

    import React, { useState } from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import Form from './Form';

    describe('Form component', () => {
     it('should render the inputs with an initial value', () => {
     const { getByTestId } = render(<Form />);
     expect(getByTestId('input-1')).toHaveValue('');
     expect(getByTestId('input-2')).toHaveValue('');
     });
    it('should update the input value when onChange event is triggered', () => {
     const { getByTestId } = render(<Form />);
     const input1 = getByTestId('input-1');
     const input2 = getByTestId('input-2');
     fireEvent.change(input1, { target: { value: 'new value' } });
     fireEvent.change(input2, { target: { value: 'other value' } });
     expect(input1).toHaveValue('new value');
     expect(input2).toHaveValue('other value');
     });
    });

And here’s an example of how you could write integrated tests for the same form component:

    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import App from './App';

    describe('App', () => {
     it('should submit the form with the correct values', () => {
     const { getByTestId } = render(<App />);
     const input1 = getByTestId('input-1');
     const input2 = getByTestId('input-2');
     const form = getByTestId('form');
     fireEvent.change(input1, { target: { value: 'new value' } });
     fireEvent.change(input2, { target: { value: 'other value' } });
     fireEvent.submit(form);
     // Add your assertions here to test if the form submission works correctly
     });


    it('should show an error message if the input values are invalid', () => {
     const { getByTestId } = render(<App />);
     const input1 = getByTestId('input-1');
     const input2 = getByTestId('input-2');
     const form = getByTestId('form');
     fireEvent.change(input1, { target: { value: '' } });
     fireEvent.change(input2, { target: { value: '' } });
     fireEvent.submit(form);
     // Add your assertions here to test if the form validation works as expected
     });
    });

Note that in the integrated tests, we render the `App` the component that includes the `Form` component with the `render` function from `@testing-library/react`. We then use `fireEvent`.
