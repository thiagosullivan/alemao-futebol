import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import InsideHome from '../components/InsideHome/InsideHome';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';
import Location from '../components/Location/Location';
import Partners from '../components/Partners/Partners';
import QuemSomos from '../components/QuemSomos/QuemSomos';
import VideoSection from '../components/VideoSection/VideoSection';
import WhatsappButton from '../components/Whatsapp/WhatsappButton';

export default function Home() {
  return (
    <div id="home__page">
      <Head>
        <title>Alemão Futebol - Formação Personalizada</title>
      </Head>

      <Header />
      <main >
        <HomeSlider />
        <QuemSomos />
        <InsideHome />
        <VideoSection />
        <Partners />
        <Location />
        <InstagramFeed />
      </main>

      <WhatsappButton />
      <Footer />
    </div>
  )
}
