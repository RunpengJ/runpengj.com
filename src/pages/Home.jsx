import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import SkillsSection from '../components/sections/Skills';
import Footer from '../components/layout/Footer';

/**
 * Home page component - Assembles all sections of the portfolio
 */
const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <SkillsSection />
      <Footer />
    </Layout>
  );
};

export default Home;