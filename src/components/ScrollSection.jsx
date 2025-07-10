// import { useEffect, useRef } from 'react';

// function ScrollSection({ children, id }) {
//   const ref = useRef();

//   useEffect(() => {
//     const el = ref.current;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add('on');
//         } else {
//           el.classList.remove('on');
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (el) observer.observe(el);
//     return () => observer.disconnect();




//   }, []);

//   return (
//     <section id={id} ref={ref} className="scroll_wrap">
//       {children}
//     </section>
//   );
// }




import { useEffect, useRef, useState } from 'react';

function ScrollSection({ children }) {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false); // 무한 스크롤 방지

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on');

          // 이미 스크롤한 요소는 또 안 함
          if (!hasScrolled) {
            el.scrollIntoView({ behavior: 'smooth' });
            setHasScrolled(true);
          }
        } else {
          el.classList.remove('on');
          setHasScrolled(false); // 다시 빠져나가면 초기화
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasScrolled]);

  return (
    <section ref={ref} className="scroll_wrap">
      {children}
    </section>
  );
}

export default ScrollSection;