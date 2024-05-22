/**
 * testing scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
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
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    function WrapperComponent() {
      const [values, setValues] = useState({ name: '', email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <RegisterInput
            handleSubmit={() => {}}
            handleChange={handleChange}
            touched={{ name: false, email: false, password: false }}
            errors={{ name: '', email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }

    render(<WrapperComponent />);
    const nameInput = await screen.getByPlaceholderText('Insert your name');

    await userEvent.type(nameInput, 'megumin');

    expect(nameInput).toHaveValue('megumin');
  });

  it('should handle email typing correctly', async () => {
    function WrapperComponent() {
      const [values, setValues] = useState({ name: '', email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <RegisterInput
            handleSubmit={() => {}}
            handleChange={handleChange}
            touched={{ name: false, email: false, password: false }}
            errors={{ name: '', email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }

    render(<WrapperComponent />);
    const emailInput = await screen.getByPlaceholderText('Insert your email');

    await userEvent.type(emailInput, 'megumin@gmail.com');

    expect(emailInput).toHaveValue('megumin@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    function WrapperComponent() {
      const [values, setValues] = useState({ name: '', email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <RegisterInput
            handleSubmit={() => {}}
            handleChange={handleChange}
            touched={{ name: false, email: false, password: false }}
            errors={{ name: '', email: '', password: '' }}
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
      const [values, setValues] = useState({ name: '', email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      return (
        <BrowserRouter>
          <RegisterInput
            handleSubmit={mockhandleSubmit}
            handleChange={handleChange}
            touched={{ name: false, email: false, password: false }}
            errors={{ name: '', email: '', password: '' }}
            values={values}
          />
        </BrowserRouter>
      );
    }
    render(<WrapperComponent />);

    const nameInput = await screen.getByPlaceholderText('Insert your name');
    await userEvent.type(nameInput, 'megumin');
    const emailInput = await screen.getByPlaceholderText('Insert your email');
    await userEvent.type(emailInput, 'megumin@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Insert your password');
    await userEvent.type(passwordInput, '123456');
    const loginButton = await screen.getByRole('button', { name: 'Register' });

    await userEvent.click(loginButton);

    expect(mockhandleSubmit).toBeCalledWith({
      name: 'megumin',
      email: 'megumin@gmail.com',
      password: '123456',
    });
  });
});
