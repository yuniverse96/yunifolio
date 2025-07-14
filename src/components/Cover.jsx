import { useEffect, useRef } from "react";


const Cover = () => {
  const cursorRef = useRef(null);
  const shapeRefs = useRef([]);
  const shapeSizes = useRef(getShapeSizes()); // 크기: vw → px 변환 저장용
  const cursorSize = 20;
  const followSpeeds = [0.15, 0.1, 0.05];

  // vw → px 변환
  function getShapeSizes() {
    const vw = window.innerWidth;
    return [vw * 0.25, vw * 0.17, vw * 0.1]; // shape1~3 크기
  }

  // 보간 함수
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  useEffect(() => {
    let targetPositions = shapeSizes.current.map(() => ({ x: 0, y: 0 }));
    let currentPositions = shapeSizes.current.map(() => ({ x: 0, y: 0 }));

    const moveShapes = () => {
      shapeRefs.current.forEach((shape, idx) => {
        const speed = followSpeeds[idx];
        currentPositions[idx].x = lerp(currentPositions[idx].x, targetPositions[idx].x, speed);
        currentPositions[idx].y = lerp(currentPositions[idx].y, targetPositions[idx].y, speed);

        shape.style.left = `${currentPositions[idx].x}px`;
        shape.style.top = `${currentPositions[idx].y}px`;
      });

      requestAnimationFrame(moveShapes);
    };

    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;
    
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX - cursorSize / 2}px`;
        cursorRef.current.style.top = `${mouseY - cursorSize / 2}px`;
      }
    
      targetPositions = shapeRefs.current.map((shape) => {
        const w = shape.offsetWidth;
        const h = shape.offsetHeight;
        return {
          x: mouseX - w / 2,
          y: mouseY - h / 2,
        };
      });
    };
    

    const handleResize = () => {
      shapeSizes.current = getShapeSizes();
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    moveShapes();

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
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
        <h1>Hello I'm Yuni!</h1>
        <p>web publisher Portfolio</p>
      </div>
    </>
  );
};

export default Cover;
