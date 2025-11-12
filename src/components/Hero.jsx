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
          backgroundImage: `url(/img/hero-bg.webp)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '90vh',
        }}
      >
        {/* Overlay for darkening the background image */}
        <div className="overlay"></div>

        {/* Centered container for text content, vertically and horizontally aligned */}
        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="text-center">
              {/* Main headline with animation */}
              <h3 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                Residential Construction Company in Location
              </h3>

              {/* Subheadline with animation */}
              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto">
                We Don't Just Build Homes, We Shape Your Future.
              </p>

              {/* Call-to-action button with slide-in animation */}
              <div className="d-inline link animate__animated animate__slideInUp animate__delay-3s position-relative z-2">
                <NextLink
                  title="Know More"
                  href="/about-us"
                  className="btn btn-sm primary-bg text-white rounded d-inline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
