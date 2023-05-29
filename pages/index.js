import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <p>A motivated full stack developer with a passion for crafting intuitive web applications and writing beautiful code. Committed to delivering high-quality code on time while staying up-to-date with the latest trends. Previous experience in leadership, entrepreneurship and education. Eager to be part of a dynamic team.</p>
    </Layout>
  );
}