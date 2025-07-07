import { useState } from "react";
import SearchIcon from "../../atoms/icon/SearchIcon";
import CommonButton from "../../atoms/button/CommonButton";

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

  const commonClass =
    "w-full h-[48px] px-3 py-2 border border-[#C4C4C4] rounded-2xl text-sm text-[#C4C4C4] bg-white";

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

        const wrapperClass = `${colSpan} flex flex-col gap-1`;

        if (field.type === "text") {
          return (
            <div key={field.name} className={wrapperClass}>
              {field.label && (
                <label className="text-sm text-black font-medium px-1">
                  {field.label}
                </label>
              )}
              <div className="flex items-center gap-2 border border-[#a8a2a2] rounded-2xl px-3 py-2 bg-white h-[48px]">
                {field.icon === "search" && <SearchIcon />}
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`w-full bg-transparent focus:outline-none text-black placeholder:text-[#C4C4C4] ${field.inputClassName || ""}`}
                />
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
                className={`${commonClass} cursor-pointer ${field.inputClassName || ""}`}
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
                className={`${commonClass} ${field.inputClassName || ""}`}
              />
            </div>
          );
        }

        return null;
      })}

      <CommonButton title="Search" className="w-30 rounded-xl h-[48px] mt-auto" />
    </form>
  );
}
