// Array of social link objects containing id, icon class, and URL
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/'
  },
  {
    id: 2,
    icon: 'uil uil-linkedin',
    url: 'https://www.linkedin.com/'
  }
];

/**
 * SocialLinks component renders a list of social media icons with links.
 *
 * @param {object} props
 * @param {string} [props.className='nav social mt-4'] - Additional class names for the nav container.
 * @returns JSX.Element
 */
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a
          key={id}
          href={url}
          className="shadow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${icon.split(' ')[1].replace('uil-', '')} page`}
        >
          {/* Icon element with styling */}
          <i className={`${icon} fs-30 rounded bg-white shadow-lg p-1`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
