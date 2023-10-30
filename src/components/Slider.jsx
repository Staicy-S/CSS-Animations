export function Slider({ min, max, value, onChange = () => {} }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      className="slider"
      id="myRange"
      onInput={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}
