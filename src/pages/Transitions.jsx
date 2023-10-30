import "./Transitions.css";
import { useState } from "react";
export function Transitions() {
  const [opacity, setOpacity] = useState(1);
  return (
    <>
      <h1>CSS Transitions</h1>
      <div className="transition-box hover-transition">Hover</div>
      <div className="transition-box opacity-transition" style={{ opacity }}>
        Opacity
      </div>
      <button
        onClick={() => {
          setOpacity((oldOpacity) => (oldOpacity === 1 ? 0 : 1));
        }}
      >
        Toggle opacity
      </button>
    </>
  );
}
