import Link from 'next/link';

/**
 * Wrapper around Next.js Link component to simplify usage.
 *
 * @param {Object} props
 * @param {string} props.href - URL to navigate to.
 * @param {string} [props.className] - Optional CSS class names.
 * @param {React.ReactNode} props.title - Content inside the link.
 */
const NextLink = ({ href, className, title }) => {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};

export default NextLink;
