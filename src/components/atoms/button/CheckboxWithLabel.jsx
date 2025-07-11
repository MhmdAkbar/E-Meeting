export default function CheckboxWithLabel({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-orange-500"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
