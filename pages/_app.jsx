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

          {/* TODO: Replace 'Location' and 'Construction' with your actual business info */}
          <title>Buildify – Free Next.js Website Template for Contractors, Builders & Construction Companies</title>
          <meta
            name="description"
            content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
          />

          {/* Open Graph tags for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Buildify – Free Next.js Website Template for Contractors, Builders & Construction Companies" />
          <meta
            property="og:description"
            content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
          />
          {/* TODO: Replace with your actual website URL */}
          <meta property="og:url" content="https://themixly.com/preview/192/construction-company-react-nextjs-template" />
          {/* TODO: Replace with your actual image URL */}
          <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/06/Buildify-Product-Detail-1-scaled.png" />
          <meta property="og:image:secure_url" content="https://themixly.com/wp-content/uploads/2025/06/Buildify-Product-Detail-1-scaled.png" />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Buildify – Free Next.js Website Template for Contractors, Builders & Construction Companies" />
          <meta
            name="twitter:description"
            content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
          />
          {/* TODO: Replace with your actual image URL */}
          <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/06/Buildify-Product-Detail-1-scaled.png" />
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
