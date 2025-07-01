import { useState } from "react";
import SearchIcon from "./icon/SearchIcon";

export default function SearchBar({
  onSearch,
  fields = [],
  className = "",
  ...props
}) {
  const [formData, setFormData] = useState(() => {
    const initial = {};
    fields.forEach((f) => (initial[f.name] = f.defaultValue || ""));
    return initial;
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      className={`grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16 p-3 gap-3 ${className}`}
    >
      {fields.map((field) => {
        const colSpan =
          field.colSpan ||
          "col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-4";
        const commonClass = `border border-[#C4C4C4] text-[#C4C4C4] rounded-2xl px-2 py-4 text-sm w-full`;

        const wrapperClass = `${colSpan} flex flex-col gap-1`;

        if (field.type === "text") {
          return (
            <div key={field.name} className={wrapperClass}>
              {field.label && (
                <label className="text-sm text-black font-medium px-1">
                  {field.label}
                </label>
              )}
              <div className="h-full">
                <div className="flex gap-1 items-center border border-[#a8a2a2] text-[#C4C4C4] rounded-2xl px-2 py-4 text-sm w-full h-full">
                  {field.icon === "search" && <SearchIcon />}
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-black placeholder:text-[#C4C4C4]"
                  />
                </div>
              </div>
            </div>
          );
        }

        if (field.type === "select") {
          return (
            <div key={field.name} className={wrapperClass}>
              {field.label && (
                <label className="text-sm text-black font-medium px-1">
                  {field.label}
                </label>
              )}
              <select
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={`${commonClass} cursor-pointer`}
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (field.type === "date" || field.type === "number") {
          return (
            <div key={field.name} className={wrapperClass}>
              {field.label && (
                <label className="text-sm text-black font-medium px-1">
                  {field.label}
                </label>
              )}
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className={commonClass}
              />
            </div>
          );
        }

        return null;
      })}

      <button
        type="submit"
        className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 border-orange-600 border px-2 py-4 rounded-2xl text-orange-600 cursor-pointer h-full"
      >
        Search
      </button>
    </form>
  );
}
