import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeSlider from '../components/HomeSlider/HomeSlider';

export default function Home() {
  return (
    <div id="home__page">
      <Head>
        <title>Alemão Futebol</title>
        <meta name="description" content="Alemão Futebol" />
      </Head>

      <Header />
      <main >
        <HomeSlider />
      </main>

      <Footer />
    </div>
  )
}
