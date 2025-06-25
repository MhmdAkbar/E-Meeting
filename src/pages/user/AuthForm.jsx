import { useState } from 'react';

function AuthForm({ title = "Login", fields = [], onSubmit }) {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [showPasswordMap, setShowPasswordMap] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      const value = formData[key];
      if (!value) {
        alert(`${key} must be filled`);
        return;
      }

      // Validasi email
      if (key === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          alert("please insert the correct email");
          return;
        }
      }
    }

    onSubmit(formData);
    setFormData(initialFormState);
  };

  const togglePasswordVisibility = (name) => {
    setShowPasswordMap(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded max-w-sm mx-auto space-y-4 w-[380px]">
      {fields.map((field) => {
        const isPassword = field.type === "password";
        const showPassword = showPasswordMap[field.name] ?? false;

        return (
          <div key={field.name} className="relative">
            <label className="block mb-1">{field.label}</label>
            <input
              type={isPassword && !showPassword ? "password" : field.type || "text"}
              name={field.name}
              placeholder={field.placeholder || ""}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-[#EBEBEB] px-3 py-2 rounded pr-10 text-xs"
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => togglePasswordVisibility(field.name)}
                className="absolute right-2 top-8 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            )}
          </div>
        );
      })}

      <button type="submit" className="w-full bg-[#EB5B00] text-white py-2 rounded">
        {title}
      </button>
    </form>
  );
}

export default AuthForm;
