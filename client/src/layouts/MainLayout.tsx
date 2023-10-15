/** @format */

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import Head from 'next/head';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Granite and Marble</title>
        <meta name="description" content="Granite and Marble" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
