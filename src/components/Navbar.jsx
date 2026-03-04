import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image.js';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { getTranslations } from 'i18n/translations';

/**
 * Navbar component with sticky behavior, offcanvas menu, and responsive layout.
 *
 * @param {Object} props
 * @param {string} [props.navClassName] - Default navbar class names.
 * @param {string} [props.navOtherClass] - Class names for the offcanvas hamburger container.
 * @param {boolean} [props.fancy] - If true, wraps navbar content in a fancier container.
 * @param {boolean} [props.stickyBox] - If true, adds padding top equal to navbar height when sticky.
 */
const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const router = useRouter();
  const { locale, asPath, pathname } = router;
  const t = getTranslations(locale);
  const languageOptions = ['pl', 'en', 'nl'];
  const navItems = [
    { href: '/#start', title: t.nav.home },
    { href: '/#about', title: t.nav.about },
    { href: '/#why-us', title: t.nav.whyChoose },
    { href: '/realization', title: t.nav.realizations },
    { href: '/#contact', title: t.nav.contact }
  ];
  const languageFlags = {
    pl: '/img/flags/pl.svg',
    en: '/img/flags/gb.svg',
    nl: '/img/flags/nl.svg'
  };

  const changeLanguage = (nextLocale) => {
    if (nextLocale === locale) return;
    router.push(pathname, asPath, { locale: nextLocale });
  };

  // Class name for fixed sticky navbar version
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // Navbar main content: logo, offcanvas menu, hamburger button
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={<Image unoptimized={true} alt="Logo | Tomq Timmerman" src="/img/logo.png" width={125} height={125} />}
        />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | Tomq Timmerman"
                src="/img/logo.png"
                width={90}
                height={90}
                unoptimized={true}
                data-bs-dismiss="offcanvas"
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-dark ms-2"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav align-items-lg-center">
            {navItems.map(({ href, title }) => (
              <li key={href} className="nav-item" data-bs-dismiss="offcanvas">
                <NextLink href={href} title={title} className="nav-link" />
              </li>
            ))}

            <li className="nav-item dropdown language-select mt-2 mt-lg-0">
              <button
                type="button"
                className="nav-link dropdown-toggle border-0 bg-transparent p-0 d-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label={t.nav.languageLabel}
              >
                <span className="ms-3 d-flex align-items-center text-uppercase">
                  <Image
                    src={languageFlags[locale || 'pl']}
                    alt={`${t.languageSwitcher[locale || 'pl']} flag`}
                    width={18}
                    height={12}
                    unoptimized={true}
                  />
                  <span className="ms-2">{t.languageSwitcher[locale || 'pl']}</span>
                </span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow mt-2">
                {languageOptions.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => changeLanguage(lang)}
                      className={`dropdown-item d-flex align-items-center gap-2 text-uppercase ${
                        locale === lang ? 'active fw-bold' : 'text-dark'
                      }`}
                      data-bs-dismiss="offcanvas"
                    >
                      <Image
                        src={languageFlags[lang]}
                        alt={`${t.languageSwitcher[lang]} flag`}
                        width={18}
                        height={12}
                        unoptimized={true}
                        className="me-2"
                      />
                      {t.languageSwitcher[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <div className="d-flex align-items-center mb-5">
                <i className="uil uil-envelope fs-32 text-main bg-white rounded-circle me-2" />
                <p className="fs-16 text-center m-0">
                  <a href="mailto:tomqtimmerman@gmail.com">tomqtimmerman@gmail.com</a>
                </p>
              </div>
              <div className="d-flex mb-5">
                <i className="uil uil-phone-volume fs-32 text-main bg-white rounded-circle me-2" />
                <p className="fs-18 text-center m-0 d-flex flex-column">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger menu button for toggling offcanvas on small screens */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Spacer div to prevent layout jump when navbar becomes sticky */}
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      {/* Main navbar element with sticky or normal className */}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          // Fancy container with background and layout tweaks
          <div className="container">
            <div className="navbar-collapse-wrapper d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          // Default container for navbar content
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
