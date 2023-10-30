import "./Select.css";
export function Select({ value, options, onChange }) {
  return (
    <div className="select__container" style={{ width: 200 }}>
      <select
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {options.map((option) => {
          return <option key={option.key}>{option.value}</option>;
        })}
      </select>
    </div>
  );
}
