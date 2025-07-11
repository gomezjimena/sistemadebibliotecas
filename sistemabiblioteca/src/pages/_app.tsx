import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Organisms/Layout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayoutPages = ['/'];
  const isNoLayout = noLayoutPages.includes(router.pathname);

  return isNoLayout
    ? <Component {...pageProps} />
    : <Layout><Component {...pageProps} /></Layout>;
}
