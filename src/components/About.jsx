
import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <>
    <div className="profile_box">
      <div className='bubble'> <Typewriter
        options={{
          strings: ['안녕하세요 이지윤입니다.','6년차 퍼블리셔','빠른 러너 & 학습러'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 30,
        }}
      /></div>
    <div className="img_wrap">
      <img src="/yunifolio/images/emoji.png"/>
    </div>
    </div>
   <div className='txt_box'>
      <ul>
        <li>어쩌구 저쩌구</li>
      </ul>
    </div>
    <div className='all_info'></div>
 </>
  );
};

export default About;
