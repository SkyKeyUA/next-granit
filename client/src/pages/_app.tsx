import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import MainLayout from '@layouts/MainLayout';
import { wrapper } from '@redux/store';

import '@styles/index.scss';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MainLayout>
          <Component {...props.pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
}
