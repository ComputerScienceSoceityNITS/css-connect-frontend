import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/style-guide/page-components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSS Connect</title>
        <meta
          name="description"
          content="The frontend GitHub Repository for CSS Connect"
        />
        <meta name="keywords" content="css, connect, interview, college" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5f5eaa" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
