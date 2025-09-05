import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import SkillsSection from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

/**
 * Home page component - Assembles all sections of the portfolio
 */
const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Research />
      <SkillsSection />
      <Contact />
    </Layout>
  );
};

export default Home;