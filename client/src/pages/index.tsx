import dynamic from 'next/dynamic';
import React from 'react';

const HomePage = dynamic(() => import('@views/HomePage').then((mod) => mod.HomePage));

export default function Home() {
  return <HomePage />;
}
