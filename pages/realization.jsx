import fs from 'fs';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { getTranslations } from 'i18n/translations';

const RealizationsGallery = dynamic(() => import('components/RealizationsGallery'), { ssr: false });

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/img/realizations');
  const files = await fs.promises.readdir(imagesDir);
  const images = files.filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  return {
    props: {
      images: images
    }
  };
}

const Realization = ({ images }) => {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <>
      <Head>
        <title>{`${t.realizations.heading} | Tomq Timmerman`}</title>
        <meta name="description" content={t.app.metaDescription} />
      </Head>

      <section className="wrapper">
        <RealizationsGallery images={images} />
      </section>
    </>
  );
};

export default Realization;
