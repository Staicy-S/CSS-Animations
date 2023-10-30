import "./Box.css";
export function Box({ style, children }) {
  return (
    <div className="box" style={{ ...style }}>
      {children}
    </div>
  );
}
