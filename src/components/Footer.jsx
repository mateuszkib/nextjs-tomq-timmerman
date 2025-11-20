import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title }) => (
        <li key={id} className="roboto">
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top footer-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-2 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src="/img/logo.png"
                  alt="Logo | Tomq Timmerman"
                  width={100}
                  height={100}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-16 roboto">
                Tomq Timmerman to zaufana firma specjalizująca się w montażu i wymianie okien, drzwi oraz schodów.
                Oferujemy nowoczesne, trwałe i wysokiej jakości rozwiązania, które podnoszą komfort oraz bezpieczeństwo
                Twojego domu.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Linki" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Kontakt</h4>

              {/* Address */}
              <div className="d-flex gap-2 mb-3 align-items-center">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <p className="mb-0 roboto">Pijnacker</p>
              </div>

              {/* Email */}
              <div className="d-flex gap-2 mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:tomqtimmerman@gmail.com" className="link-body roboto">
                  loremipsum@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="d-flex gap-2">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 fs-18 d-flex flex-column roboto">
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Google Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78587.60164329741!2d4.349728492468634!3d52.00938247302669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ca3bc61e6c2b%3A0x11a2b3b894a121f1!2sPijnacker%2C%20Holandia!5e0!3m2!1spl!2spl!4v1763247274075!5m2!1spl!2spl"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">© {currentYear} Tomq Timmerman. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
