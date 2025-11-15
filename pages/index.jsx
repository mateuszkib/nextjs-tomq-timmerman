import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Tomq Timmerman – Free Next.js Website Template for Contractors, Builders & Construction Companies</title>
        <meta
          name="description"
          content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Witamy w "
              span="Tomq Timmerman"
              para="Od lat specjalizujemy się w profesjonalnym montażu oraz wymianie okien, drzwi i schodów. Nasza firma łączy doświadczenie z nowoczesnymi rozwiązaniami, zapewniając najwyższą jakość usług i trwałość na lata."
              para2="Stawiamy na indywidualne podejście do każdego klienta, oferując fachowe doradztwo, precyzyjny montaż oraz szeroki wybór produktów renomowanych producentów. Z nami Twój dom zyska nowy wymiar komfortu i bezpieczeństwa!"
              imgPosition="left"
              src="/img/welcome-to-tomq-timmerman.png"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper why-choose-wrapper">
          <div className="container py-7">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
