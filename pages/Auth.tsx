import Link from 'next/link';
import React from 'react';
import { useState } from "react";
import PrimaryButton from '../components/PrimaryButton';
import TextFormField from '../components/TextInputField';
import { supabase } from "../utils/supabaseClient";

type AuthUserType = {
  isLogin?: boolean,
}

const Auth = ({ isLogin=true } : AuthUserType) : JSX.Element => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    const { error, data, session, user } =
      isLogin
        ? await supabase.auth.signIn({ email, password })
        : await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message)
      setPassword("")
    }
    console.log(error, data, session, user)
  }

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAuth();
  }

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAuth();
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-black">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        </div>
        <div>
          <form>
            <TextFormField
              label="Email"
              inputType="email"
              inputName="userEmail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Your Email"
            />
            <TextFormField
              label="Password"
              inputType="password"
              inputName="userPassword"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Your password"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="pt-4">
              <PrimaryButton
                type="submit"
                onClick={isLogin ? handleSignIn : handleSignUp}
                buttonText={isLogin ? 'sign in' : 'sign up'}
              />
              <div className="py-2 text-sm text-center">
                <Link href={isLogin ? '/signup' : '/login'}>
                  <a className="capitalize">{isLogin ? 'or sign up for an account' : 'already have an account? login now.'}</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;