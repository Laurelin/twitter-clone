import { useState } from 'react';
import TwitterIcon from '../components/TwitterIcon';
import Link from 'next/link';

export default function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const isInvalid = password === '' || username === '';

  return (
    <form className="max-w-sm mt-5 w-full px-4 mx-auto flex flex-col" noValidate>
      <TwitterIcon className="text-blue-primary dark:text-gray-200 self-start h-10" />
      <h1 className="font-bold text-3xl mt-8 mb-6 leading-8">Log in to Twitter</h1>
      <div className="floating-input mb-7 relative">
        <input
          type="text"
          id="username"
          className="border border-gray-400 focus:outline-none rounded focus:border-blue-primary focus:border-2 w-full p-3 h-16 bg-transparent"
          placeholder="name@example.com"
          autoComplete="off"
        />
        <label
          htmlFor="username"
          className="absolute top-0 left-0 px-3 py-5 h-full text-gray-500 pointer-events-none transform origin-left transition-all duration-150 ease-in-out"
        >
          Phone, email or username
        </label>
      </div>
      <div className="floating-input mb-7 relative">
        <input
          type="password"
          id="password"
          className="border border-gray-400 focus:outline-none rounded focus:border-blue-primary focus:border-2 w-full p-3 h-16 bg-transparent"
          placeholder="password"
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
        />
        <label
          htmlFor="password"
          className="absolute top-0 left-0 px-3 py-5 h-full text-gray-500 pointer-events-none transform origin-left transition-all duration-150 ease-in-out"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        disabled={isInvalid}
        className={`rounded-full bg-blue-primary text-white p-3 mb-7 ${isInvalid && 'opacity-50'}`}
      >
        Log in
      </button>
      <div className="flex w-full space-x-2 justify-center items-center">
        <Link href="/help">
          <a className="text-blue-primary text-xs hover:underline">Forgot Password?</a>
        </Link>
        <span className="text-blue-primary">•</span>
        <Link href="/help">
          <a className="text-blue-primary text-xs hover:underline">Sign up for Twitterclone</a>
        </Link>
      </div>
    </form>
  );
}
