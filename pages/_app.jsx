import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Import global styles and third-party CSS
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

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

  return (
    <Fragment>
      <Head>
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          Professional installation and replacement of windows, doors, and stairs. Experienced team, modern solutions,
          and a customer-focused approach. Enhance the comfort and safety of your home with Tomq Timmerman.
        </title>
        <meta
          name="description"
          content="Professional installation and replacement of windows, doors, and stairs. Experienced team, modern solutions, and a customer-focused approach. Enhance the comfort and safety of your home with Tomq Timmerman."
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tomq Timmerman – Professional installation and replacement of windows, doors, and stairs. Experienced team, modern solutions, and a customer-focused approach. Enhance the comfort and safety of your home with Tomq Timmerman."
        />
        <meta property="og:description" content="" />
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
