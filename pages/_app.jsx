import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';
import { getTranslations } from 'i18n/translations';

// Import global styles and third-party CSS
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname, locale } = useRouter();
  const [loading, setLoading] = useState(true);
  const t = getTranslations(locale);

  // Dynamically import Bootstrap JS on client-side only (to avoid SSR issues)
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // Initialize scrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Disable loading state once component mounts
  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale || 'pl';
    }
  }, [locale]);

  return (
    <Fragment>
      <Head>
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{t.app.metaTitle}</title>
        <meta name="description" content={t.app.metaDescription} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.app.ogTitle} />
        <meta property="og:description" content={t.app.metaDescription} />
        {/* TODO: Replace with your actual website URL */}
        <meta property="og:url" content="https://themixly.com/preview/192/construction-company-react-nextjs-template" />
        {/* TODO: Replace with your actual image URL */}
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
      </Head>
      <Layout>
        <ThemeProvider>
          {/* Show loader while app is loading */}
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
