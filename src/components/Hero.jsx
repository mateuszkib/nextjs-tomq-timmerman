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
          backgroundPosition: '0% 100%',
          backgroundSize: 'cover',
          height: '90vh'
        }}
      >
        {/* Overlay for darkening the background image */}
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
