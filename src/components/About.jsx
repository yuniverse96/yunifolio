
import React from 'react';
import Typewriter from 'typewriter-effect';
import Chart from './Cart'; 

const About = ({ isActive }) => {
  return (
    <>
    <div className='circle dark'></div>
    <div className='circle normal'></div>
    <div className='circle light'></div>

<div id='profile_wrap'>
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
      <div className='profile_img'>
        <div className="img_wrap">
          <img src="/yunifolio/images/emoji.png"/>
        </div>
        <div className='name'>
          이지윤 <span>Jiyun Lee</span>
        </div>
      </div>
   
    </div>
     <div className='career_box'>
      <ul>
        <li><span>학력 : </span><p>방송통신대학교(컴퓨터과학) 재학중</p></li>
        <li><span>경력 : </span><p> 총 6년</p></li>
        
      </ul>
    </div>
    <div className='all_info'>
        <div className='cart_wrap'>
            <Chart visible={isActive} />
        </div>
        
    </div>
</div>

  
 </>
  );
};

export default About;
