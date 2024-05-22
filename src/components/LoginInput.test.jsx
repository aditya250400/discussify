/**
 * testing scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call handleSubmit function when button type submit is clicked
 */
import { cleanup, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import {
  afterEach,
  describe, expect, it, vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    function WrapperComponent() {
      const [values, setValues] = useState({ email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <LoginInput
            handleSubmit={() => {}}
            handleChange={handleChange}
            touched={{ email: false, password: false }}
            errors={{ email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }

    render(<WrapperComponent />);
    const emailInput = await screen.getByPlaceholderText('Insert your email');

    await userEvent.type(emailInput, 'kazuma@gmail.com');

    expect(emailInput).toHaveValue('kazuma@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    function WrapperComponent() {
      const [values, setValues] = useState({ email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <LoginInput
            handleSubmit={() => {}}
            handleChange={handleChange}
            touched={{ email: false, password: false }}
            errors={{ email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }

    render(<WrapperComponent />);
    const passwordInput = await screen.getByPlaceholderText('Insert your password');

    await userEvent.type(passwordInput, '123456');

    expect(passwordInput).toHaveValue('123456');
  });

  it('should call handleSubmit function when button type submit is clicked', async () => {
    const mockhandleSubmit = vi.fn();
    function WrapperComponent() {
      const [values, setValues] = useState({ email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <LoginInput
            handleSubmit={mockhandleSubmit}
            handleChange={handleChange}
            touched={{ email: false, password: false }}
            errors={{ email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }
    render(<WrapperComponent />);

    const emailInput = await screen.getByPlaceholderText('Insert your email');
    await userEvent.type(emailInput, 'kazuma@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Insert your password');
    await userEvent.type(passwordInput, '123456');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.click(loginButton);

    expect(mockhandleSubmit).toBeCalledWith({
      email: 'kazuma@gmail.com',
      password: '123456',
    });
  });
});
