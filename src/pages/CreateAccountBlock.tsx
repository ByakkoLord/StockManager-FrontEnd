import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

import api from '../services/api'


export default function Login() {

  //Api Functions

  const navigate = useNavigate();
  async function handleSubmitSingUp(e: React.FormEvent) {
    e.preventDefault();
    await api.post('/createAccount', {
      email,
      password,   
    })

    navigate('/')

    
  }

  // Page Function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [height, setHeight] = useState(false);
  const [height2, setHeight2] = useState(false);
  const [height3, setHeight3] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (value) {
      setHeight(true);
      console.log('Input contém texto:', value);
    } else {
      setHeight(false);
      console.log('Input está vazio');
    }

  }
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value2 = event.target.value;
    setPassword(value2);


    if (value2) {
        setHeight2(true);
        console.log('Input contém texto:', value2);
      } else {
        setHeight2(false);
        console.log('Input está vazio');
      }
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value3 = event.target.value;
    setInputValue3(value3);


    if (value3) {
        setHeight3(true);
        console.log('Input contém texto:', value3);
      } else {
        setHeight3(false);
        console.log('Input está vazio');
      }
  };

  return (
    <form className="flex flex-col justify-center p-5 items-center rounded-2xl shadow-2xl bg-gray-800">
      <h1 className="text-3xl pr-5 mt-5 font-bold text-white"> &gt;Login</h1>

      <section className="flex flex-col mb-5">
        <label className="hover:cursor-pointer hover:text-white mt-5 text-gray-300 font-semibold" htmlFor="email">
          E-mail
        </label>
        <input
          value={email}
          onChange={handleInputChange}
          className={`transition-all pb-1 text-gray-300 font-semibold focus:outline-none outline-none bg-transparent border-b-2 border-gray-400 ${height ? 'h-8' : 'h-0'}`}
          type="text"
          name="email"
          id="email"
          required
        />
        <label className="hover:cursor-pointer hover:text-white mt-5 text-gray-300 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={handleInputChange2}
          className={`transition-all pb-1 text-gray-300 font-semibold focus:outline-none outline-none bg-transparent border-b-2 border-gray-400 ${height2 ? 'h-8' : 'h-0'}`}
          type="password"
          name="password"
          id="password"
          required
        />
        <label className="hover:cursor-pointer hover:text-white mt-5 text-gray-300 font-semibold" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          value={inputValue3}
          onChange={handleInputChange3}
          className={`transition-all pb-1 text-gray-300 font-semibold focus:outline-none outline-none bg-transparent border-b-2 border-gray-400 ${height3 ? 'h-8' : 'h-0'}`}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
        />
      </section>
      
      <Link className='text-slate-300 hover:text-blue-800 text-sm transition-all' to="/">I have an account</Link>

      <button onClick={handleSubmitSingUp }
        className={`transition-all roboto hover:bg-slate-500 text-base rounded-xl primaryColor p-1 pr-16 pl-16 mt-5 font-bold text-black`}
      >
        Create
      </button>
    </form>

    
  );
}
