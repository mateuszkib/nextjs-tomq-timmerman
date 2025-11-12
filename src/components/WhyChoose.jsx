import Image from 'next/image';
import { whyChoose } from '../data';

/**
 * WhyChoose component - displays a section highlighting reasons to choose the company,
 * including an image and a list of key points.
 *
 * @returns JSX.Element
 */
const WhyChoose = () => {
  return (
    <div className="row gx-lg-8 align-items-center">
      {/* Image Section - shown on larger screens second */}
      <div className="order-lg-2 col-lg-6">
        <figure className="img-bg">
          <Image
            src="/img/transforming-residential-construction-in-gambias.webp"
            alt="Transforming Residential Construction in Location | Buildify"
            width={600}
            height={700}
            unoptimized={true} // disables Next.js optimization for this image
            className="position-static"
          />
        </figure>
      </div>

      {/* Text Content Section - shown first on larger screens */}
      <div className="order-lg-1 col-lg-6">
        {/* Section label */}
        <h3 className="fs-16 py-2 px-3 text-main d-inline rounded-pill oswald">
          Why Choose Us ?
        </h3>

        {/* Main headline */}
        <h2 className="mb-5 mt-3 justify-content-start oswald">
          Transforming Residential
          <span className="ms-2"> Construction</span> in Location
        </h2>

        {/* List of reasons with icons */}
        <div>
          <ul className="icon-list bullet-bg mb-0">
            {whyChoose.map(({ id, title, description }) => (
              <li key={id}>
                <div className="d-flex align-items-center">
                  {/* Check icon */}
                  <i className="uil uil-check primary-bg text-white p-1" />
                  <h3 className="ms-2 fw-bold fs-20 oswald">{title}</h3>
                </div>
                <p className="text-justify roboto">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
