// inputfield.jsx
export default function InputField({
  label,
  name,
  value,
  onChange,
  readOnly = false,
  type = "text", // agar bisa reusabel untuk password, email, dll
  placeholder = "",
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly} // Add this line
        placeholder={placeholder}
        className={`border rounded-md px-3 py-2 text-sm transition ${
          readOnly
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "focus:outline-none focus:ring-2 focus:ring-orange-500"
        }`}
      />
    </div>
  );
}