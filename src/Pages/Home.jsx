import { Suspense, lazy } from 'react';
import Hero from '../Components/HeroSection/hero.jsx';

const Skills = lazy(() => import('../Components/Skills/Skills.jsx'));
const Experience = lazy(() => import('../Components/Experience/Experience.jsx'));
const Education = lazy(() => import('../Components/Education/Education.jsx'));

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Education />
      </Suspense>
    </>
  );
}

export default Home;
