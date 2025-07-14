import { useEffect, useRef } from "react";

const CustomCursor = ({ color = "#2128bd", size = 20, hidden = false }) => {
  const cur = useRef(null);

  useEffect(() => {
    const move = e => {
      if (cur.current && !hidden) {
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
        cur.current.style.left = `${x}px`;
        cur.current.style.top = `${y}px`;
      }
    };
    document.body.addEventListener("mousemove", move);
    return () => document.body.removeEventListener("mousemove", move);
  }, [size, hidden]);

  return (
    <div
      ref={cur}
      className="cursor"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        display: hidden ? "none" : "block",
      }}
    />
  );
};

export default CustomCursor;
