//Components

import React, { useState, FormEvent, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { TokenContext } from '../contexts/Token'

//Api

import api from '../services/api';

import ErrorMessage from '../components/ErrorMessage';


export default function Login() {





// Page Functions

  const { setToken } = useContext(TokenContext)

  const [errorString, setErrorString] = useState('');
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState('');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState(false);
  const [height2, setHeight2] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (value) {
      setHeight(true);
    } else {
      setHeight(false);
    }

  }
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value2 = event.target.value;
    setPassword(value2);


    if (value2) {
        setHeight2(true);
      } else {
        setHeight2(false);
      }
  };

  // Api Functions

  const navigate = useNavigate();

  async function handleSubmitLogin(e: FormEvent) {
    e.preventDefault();
    
        try {
          const response = await api.post('/login', {
            email,
            password,
          })
          
          if (response === undefined || response === null || response.data === 'Email or Password are incorrect') {
            setErrorString('Email or Password are incorrect')
            setAnimation('enterAnimation')
            setShow(true)
            setTimeout(() => {
            setAnimation('exitAnimation')
            setTimeout(() => {
            setShow(false)
        },1000)
      },2500)
          }else if (response.data === 'Email and Password are correct') {
             try {
                const response = await api.post('/allUsers', {
                  email,
                  password
                })
                console.log(response.data)
                localStorage.setItem('token', response.data)
                setToken(response.data);
             }catch (error) {
               console.log(error)
             }
            
            
            navigate('/home')
          }
        } catch (error) {
          console.log(error)
        }
      }
    

  return (
    <>
    <form className="flex flex-col justify-center p-5 items-center rounded-2xl shadow-2xl bg-gray-800">
      <h1 className="poppins text-3xl pr-5 mt-5 font-bold text-white"> &gt;Login</h1>

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
      </section>

     
        
        <Link className='text-slate-300 hover:text-blue-800 text-sm transition-all' to="/createAccount">Don't have an account yet?</Link>
        
        
     
      

      <button
        onClick={handleSubmitLogin}
        className={`transition-all roboto hover:bg-slate-500 text-base rounded-xl primaryColor p-1 pr-16 pl-16 mt-5 font-bold text-black`}>
        Login
      </button>
    </form>
    
    <ErrorMessage animation={animation} show={show} errorMessage={errorString}/>
    </>

    
  );
}
