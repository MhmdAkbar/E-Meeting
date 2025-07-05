import InputField from "../../atoms/form/InputField";

export default function PasswordSection({ form, onChange, isEditing }) {
  console.log("isEditing di AccountInfoForm:", isEditing);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 pt-6">
        Change Password
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          type="password"
          label="New Password"
          name="password"
          value={form.password || ""}
          onChange={onChange}
          placeholder="Leave blank to keep current"
          readOnly={!isEditing}
        />
      </div>
    </div>
  );
}
