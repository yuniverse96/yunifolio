import './components/style/Common.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import SectionWrap from './components/Section';
import Cover from './components/Cover';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useState } from 'react';
import CustomCursor from './components/Cursor';

function Main() {
  const [cursorColor, setCursorColor] = useState("#72bbff");
  const [logoColor, setLogoColor] = useState("#72bbff");

  const handleLeave = (origin, destination) => {
    const destId = destination.item.id;

    switch (destId) {
      case 'cover':
      default:
        setCursorColor("#72bbff");
        setLogoColor("#72bbff");
        break;
      case 'about':
        setCursorColor("#fff");
        setLogoColor("#fff");
        break;
      case 'portfolio':
        setCursorColor("#588e34");
        setLogoColor("#588e34");
        break;
      case 'contact':
        setCursorColor("#ffc4bc");
        setLogoColor("#ffc4bc");
        break;
      
    }
  };

  return (
    <>
      <CustomCursor color={cursorColor} />
      <Header color = {logoColor} />
      <ReactFullpage
        credits={{ enabled: false }}
        navigation
        scrollingSpeed={700}
        onLeave={handleLeave}
        render={() => (
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
      />
    </>
  );
}

export default Main;
