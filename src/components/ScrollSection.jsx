import { useEffect, useRef } from 'react';

function ScrollSection({ children, id }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on');
        } else {
          el.classList.remove('on');
        }
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="scroll_wrap">
      {children}
    </section>
  );
}

export default ScrollSection;
