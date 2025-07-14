import { useEffect, useRef } from "react";

const Cover = () => {
  const shapeRefs = useRef([]);
  const followSpeeds = [0.15, 0.1, 0.05];

  // 선형 보간 함수
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  useEffect(() => {
    let targetPositions = shapeRefs.current.map(() => ({ x: 0, y: 0 }));
    let currentPositions = shapeRefs.current.map(() => ({ x: 0, y: 0 }));

    const moveShapes = () => {
      shapeRefs.current.forEach((shape, idx) => {
        if (!shape) return; // null 체크 추가

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

      targetPositions = shapeRefs.current.map((shape) => {
        if (!shape) return { x: 0, y: 0 }; // 여기도 null 체크
        const w = shape.offsetWidth;
        const h = shape.offsetHeight;
        return {
          x: mouseX - w / 2,
          y: mouseY - h / 2,
        };
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    moveShapes(); // 애니메이션 시작

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
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
