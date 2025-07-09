
import './components/style/Common.css';
import Header from './components/Header';
import ScrollSection from './components/ScrollSection';
import Section from './components/Section';
import Cover from './components/Cover';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function Main() {
  return (
    <>
    <Header />
    <main>
      <ScrollSection id="cover">
        <Section>
          <Cover />
        </Section>
      </ScrollSection>
      
      <ScrollSection id="about">
        <Section title="About">
          <About />
        </Section>
      </ScrollSection>

      <ScrollSection id="portfolio">
        <Section title="Portfolio">
          <Portfolio />
        </Section>
      </ScrollSection>

      <ScrollSection id="contact">
        <Section title="Contact">
          <Contact />
        </Section>
      </ScrollSection>
    </main>
  </>
  );
}

export default Main;



