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
        <title>Buildify – Free Next.js Website Template for Contractors, Builders & Construction Companies</title>
        <meta name="description" content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap" />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Welcome to "
              span="Buildify"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati odit fuga, velit cum temporibus autem soluta mollitia saepe porro..."
              para2="Excepturi accusamus delectus velit consequuntur! Eum quod modi velit aut molestias, cum animi voluptates eaque!"
              imgPosition="left"
              src="/img/welcome-to-constructions.webp"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
