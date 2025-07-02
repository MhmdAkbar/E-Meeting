import InputField from './../molecules/InputField';
import SelectField from './../molecules/SelectField';
export default function AccountInfoForm({ form, onChange, isEditing }) {
    console.log("isEditing di AccountInfoForm:", isEditing);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InputField
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        readOnly={true}
      />
      <InputField
        label="Username"
        name="username"
        value={form.username}
        onChange={onChange}
        readOnly={!isEditing}
      />
      <InputField
        label="Role"
        name="role"
        value={form.role}
        readOnly={true}
      />
      <InputField
        label="Status"
        name="status"
        value={form.status}
        onChange={onChange}
        readOnly={true}
      />
      <SelectField
        label="Language"
        name="language"
        value={form.language}
        onChange={onChange}
        options={["English", "Bahasa Indonesia"]}
        readOnly={!isEditing}
      />
    </div>
  );
}
