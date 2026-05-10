import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log('Form submitted');

    try {
      if (state === 'Admin Login') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', {
          email,
          password,
        });

        console.log('Backend response:', data);

        if (data.success) {

        setAToken(data.token);
          localStorage.setItem('aToken', data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.log('Login error:', err);
      toast.error('Invalid Credential');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">
        <p className="text-3xl font-semibold text-center text-primary mb-6">
          {state}
        </p>

        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-2">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
          />
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-2">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#037888] transition-all duration-300 text-white py-2 rounded-md"
        >
          Login
        </button>

        {state === 'Admin Login' && (
          <p
            onClick={() => setState('Doctor Login')}
            className="text-sm text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-800"
          >
            Are you a doctor? <span className="text-primary">Login here</span>
          </p>
        )}

        {state === 'Doctor Login' && (
          <p
            onClick={() => setState('Admin Login')}
            className="text-sm text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-800"
          >
            Are you an admin? <span className="text-primary">Login here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
