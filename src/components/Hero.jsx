import { useRouter } from 'next/router';
import { getTranslations } from 'i18n/translations';

/**
 * Hero component - displays a fullscreen hero section with background image,
 * headline, subheadline, and a call-to-action button.
 */
const Hero = () => {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <section id="start">
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
        <div className="hero-content">
          <div>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
          </div>
          <div>
            <a href="#contact" className="hero-cta">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
