
import './components/style/Common.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import SectionWrap from './components/Section';
import Cover from './components/Cover';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Section } from 'react-fullpage';

function Main() {
  return (
    <>
    <Header />
    <ReactFullpage 
      credits={{ enabled: false }}
      navigation
      scrollingSpeed={700}
      render={({fullpageApi}) => (
        <ReactFullpage.Wrapper>
          <div className='section' id='cover'>
            <SectionWrap>
               <Cover />
            </SectionWrap>
             
          </div>
          <div className='section' id='about'>
              <SectionWrap>
                <About />
            </SectionWrap>
          </div>
          <div className='section' id='portfolio'>
              <SectionWrap>
                  <Portfolio />
            </SectionWrap>
          </div>
          <div className='section' id='contact'>
              <SectionWrap>
                <Contact />
            </SectionWrap>
          </div>
        </ReactFullpage.Wrapper>
      )}
    >

    </ReactFullpage>
  </>
  );
}

export default Main;



