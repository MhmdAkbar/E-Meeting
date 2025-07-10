export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  readOnly = false,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={readOnly}
        className={`border rounded-md px-3 py-2 text-sm transition ${
          readOnly
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "focus:outline-none focus:ring-2 focus:ring-orange-500"
        }`}
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
