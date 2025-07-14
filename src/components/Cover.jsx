import { useEffect, useRef } from "react";

const Cover = () => {
  const cursorRef = useRef(null);
  const shapeRefs = useRef([]);
  const cursorSize = 20;
  const shapeSizes = [650, 440, 270]; // 각 쉐입 크기
  const followSpeeds = [0.15, 0.1, 0.05]; // 각 쉐입별 lerp 속도

  // 선형 보간 함수
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  useEffect(() => {
    let targetPositions = shapeSizes.map(() => ({ x: 0, y: 0 }));
    let currentPositions = shapeSizes.map(() => ({ x: 0, y: 0 }));

    const moveShapes = () => {
      shapeRefs.current.forEach((shape, idx) => {
        const speed = followSpeeds[idx];

        currentPositions[idx].x = lerp(
          currentPositions[idx].x,
          targetPositions[idx].x,
          speed
        );
        currentPositions[idx].y = lerp(
          currentPositions[idx].y,
          targetPositions[idx].y,
          speed
        );

        shape.style.left = `${currentPositions[idx].x}px`;
        shape.style.top = `${currentPositions[idx].y}px`;
      });

      requestAnimationFrame(moveShapes);
    };

    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // 커서는 즉시 따라감
      cursorRef.current.style.left = `${mouseX - cursorSize / 2}px`;
      cursorRef.current.style.top = `${mouseY - cursorSize / 2}px`;

      // 도형은 천천히 따라감 (중심 보정)
      targetPositions = shapeSizes.map((size) => ({
        x: mouseX - size / 2,
        y: mouseY - size / 2,
      }));
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    moveShapes(); // 애니메이션 시작

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
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
