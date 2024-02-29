import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import MainLayout from '@layouts/MainLayout';
import { wrapper } from '@redux/store';

import '@styles/index.scss';
import { ThemeProvider } from 'next-themes';
import { Loader } from '@components/Common/Loader';

export default function App({ Component, router, ...rest }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  const { store, props } = wrapper.useWrappedStore(rest);
  React.useEffect(() => {
    const handleStartRouteChanging = () => setLoading(true);
    const handleCompleteRouteChanging = () => setLoading(false);

    router.events.on('routeChangeStart', handleStartRouteChanging);
    router.events.on('routeChangeComplete', handleCompleteRouteChanging);

    return () => {
      router.events.off('routeChangeStart', handleStartRouteChanging);
      router.events.off('routeChangeComplete', handleCompleteRouteChanging);
    };
  }, []);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MainLayout>
          <Component {...props.pageProps} />
        </MainLayout>
        <Loader loading={loading} />
      </Provider>
    </ThemeProvider>
  );
}
