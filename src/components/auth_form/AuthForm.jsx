import { useState } from 'react';
import HidePw from './icon/HidePw';
import ShowPw from './icon/ShowPw';
import CommonButton from '../ui/button/CommonButton';

function AuthForm({ title = "Login", fields = [], onSubmit }) {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [showPasswordMap, setShowPasswordMap] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    for (let key in formData) {
      const value = formData[key];
      if (!value) {
        newErrors[key] = `${key} must be filled`;
      }

      if (key.toLowerCase() === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[key] = "Please insert a valid email";
        }
      }
    }

    if ("password" in formData && "confirmPassword" in formData) {
      if (formData.password !== formData.confirmPassword) {
        newErrors["confirmPassword"] = "Please match your password";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
              type={isPassword ? (showPassword ? "text" : "password") : field.type || "text"}
              name={field.name}
              placeholder={field.placeholder || ""}
              value={formData[field.name]}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded pr-10 text-xs ${
                errors[field.name] ? "border-red-500" : "border-[#EBEBEB]"
              }`}
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => togglePasswordVisibility(field.name)}
                className="absolute right-2 top-8 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <HidePw/> : <ShowPw/>}
              </button>
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        );
      })}
<CommonButton title={title}/>
    </form>
  );
}

export default AuthForm;
