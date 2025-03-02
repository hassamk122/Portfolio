import { UseInView } from './UseInView.jsx';
import Hero from '../Components/HeroSection/hero.jsx';
import Skills from '../Components/Skills/Skills.jsx';
import Experience from '../Components/Experience/Experience.jsx';
import Education from '../Components/Education/Education.jsx';

function LazySection({ component: Component }) {
  const [ref, isVisible] = UseInView({ threshold: 0.2 });

  return (
    <div ref={ref}>
      {isVisible && <Component />}
    </div>
  );
}
function Home() {

  return (
    <>
    <Hero/>
        <LazySection component={Skills} />
      <LazySection component={Experience} />
      <LazySection component={Education} />
    </>
  )
}

export default Home