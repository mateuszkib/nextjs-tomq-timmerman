import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Modal } from 'bootstrap';
import { getTranslations } from 'i18n/translations';

export default function RealizationsGallery({ images }) {
  const [active, setActive] = useState(null);
  const { locale } = useRouter();
  const t = getTranslations(locale);

  const openModal = (src) => {
    setActive(src);

    const modalEl = document.getElementById('galleryModal');

    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="justify-content-start oswald mb-5">{t.realizations.heading}</h2>

        <div className="row g-4">
          {images.map((img) => (
            <div key={img} className="col-12 col-md-6 col-lg-4">
              {' '}
              {/* Zmieniono na 4 dla 3 w rzędzie */}
              <div
                className="gallery-card-container shadow-sm rounded-0" // rounded-0 dla surowszego, kinowego wyglądu
                onClick={() => openModal(img)}
              >
                <div className="image-wrapper">
                  <Image
                    src={`/img/realizations/${img}`}
                    alt={t.realizations.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform"
                  />
                  <div className="overlay">
                    <span className="text-white fw-light letter-spacing-2">{t.realizations.viewProject}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="galleryModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark border-0">
            <div className="modal-body text-center p-0">
              {active && (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '80vh',
                    maxWidth: '1200px'
                  }}
                >
                  <Image src={`/img/realizations/${active}`} alt="" fill style={{ objectFit: 'contain' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-card-container {
          cursor: pointer;
          overflow: hidden;
          background: #000; /* Czarne tło dla efektu kinowego przy ładowaniu */
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          overflow: hidden;
        }

        .transition-transform {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .gallery-card-container:hover .transition-transform {
          transform: scale(1.1); /* Delikatny zoom przy najechaniu */
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-card-container:hover .overlay {
          opacity: 1;
        }

        .letter-spacing-2 {
          letter-spacing: 3px;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
}
