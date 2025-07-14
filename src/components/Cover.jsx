import { useEffect, useRef } from "react";
import gsap from "gsap";


const Cover = () => {
  const cursorRef = useRef(null);
  const shapeRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // 커서 이동
      gsap.set(cursorRef.current, {
        x: mouseX,
        y: mouseY,
      });

      // shape 이동
      gsap.to(shapeRefs.current, {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => document.body.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>

      <div className="shapes">
        {[1, 2, 3].map((num, idx) => (
          <div
            key={num}
            className={`shape shape-${num}`}
            ref={(el) => (shapeRefs.current[idx] = el)}
          />
        ))}
      </div>

      <div className="text_wrap">
        <h1>Hello I'm YUNI</h1>
        <p>web publisher</p>
      </div>
    </>
  );
};

export default Cover;
