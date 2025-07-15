
import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
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
     <div className='txt_box'>
      <ul>
        <li>학력 : 방송통신대학교(컴퓨터과학) 재학중</li>
        <li>경력 : 6년</li>
        <ul>
          <li>앱튜브</li>
          <li>오감코퍼레이션</li>
          <li>스타랩스</li>
          <li>커뮤니케이션 앤 컬쳐</li>
          <li>여행박사 (재직중)</li>
        </ul>
      </ul>
    </div>
    <div className='all_info'></div>
</div>

  
 </>
  );
};

export default About;
