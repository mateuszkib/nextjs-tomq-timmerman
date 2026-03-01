import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getTranslations } from 'i18n/translations';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';

const Home = () => {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>{t.app.metaTitle}</title>
        <meta name="description" content={t.app.metaDescription} />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1={`${t.home.aboutHeadingPrefix} `}
              span={t.home.companyName}
              para={t.home.aboutParagraph1}
              para2={t.home.aboutParagraph2}
              imgPosition="left"
              src="/img/welcome-to-tomq-timmerman.png"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="wrapper why-choose-wrapper">
          <div className="container py-7">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
