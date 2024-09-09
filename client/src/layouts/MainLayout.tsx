import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const hideComponent = router.pathname === '/login' ? false : true;
  return (
    <>
      <Head>
        <title>Granite and Marble</title>
        <meta name="description" content="Granite and Marble" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hideComponent && <Header />}
      <main>{children}</main>
      {hideComponent && <Footer />}
    </>
  );
};

export default MainLayout;
