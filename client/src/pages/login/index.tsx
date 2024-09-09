import dynamic from 'next/dynamic';
import React from 'react';

const LoginPage = dynamic(() => import('@views/LoginPage').then((mod) => mod.LoginPage));

export default function Login() {
  return <LoginPage />;
}
