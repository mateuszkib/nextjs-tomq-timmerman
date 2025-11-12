import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component wraps the page content with
 * a consistent Header and Footer on every page.
 * 
 * @param {React.ReactNode} children - The page content to render between header and footer.
 */
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* Site header */}
      <Header />

      {/* Main page content */}
      {children}

      {/* Site footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
