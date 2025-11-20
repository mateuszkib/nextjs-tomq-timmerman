import NextLink from './NextLink';

/**
 * Hero component - displays a fullscreen hero section with background image,
 * headline, subheadline, and a call-to-action button.
 */
const Hero = () => {
  return (
    <section>
      {/* Hero container with background image and styling */}
      <div
        className="swiper-container hero"
        style={{
          backgroundImage: `url(/img/hero-bg.png)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '90vh'
        }}
      >
        {/* Overlay for darkening the background image */}
        <div className="overlay"></div>
        <div class="hero-content">
          <div>
            <h1>Okna. Drzwi. Schody.</h1>
            <p>Profesjonalny montaż oraz wymiana.</p>
          </div>
          <div>
            <a href="#kontakt" class="hero-cta">
              Umów wycenę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
