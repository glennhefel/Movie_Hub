import React, { useState } from 'react';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // <-- Place this here

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submit logic here
    // If signup is successful:
    navigate('/home'); // <-- Redirect to home page
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Full Name"
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;