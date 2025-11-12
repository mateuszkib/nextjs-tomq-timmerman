import React, { useRef } from 'react';
import Navbar from './Navbar';
import useSticky from 'hooks/useSticky';

/**
 * Header component that wraps the Navbar.
 * Adds sticky behavior based on scroll position using the useSticky hook.
 */
const Header = () => {
  // Ref for the sticky wrapper div (can be used for measuring or DOM access if needed)
  const stickyRef = useRef(null);

  // Custom hook returns true when page is scrolled beyond 350px, enabling sticky state
  const isSticky = useSticky(350);

  return (
    <div
      // Add 'is-sticky' class when sticky state is active
      className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}
      ref={stickyRef}
    >
      {/* Navigation bar component */}
      <Navbar />
    </div>
  );
};

export default Header;
