import AuthForm from "../auth_form/AuthForm";

export default function LoginFields({ onSubmit }) {
  const loginFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Masukkan username",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Masukkan password",
    },
  ];

  return <AuthForm title="login" fields={loginFields} onSubmit={onSubmit} />;
}
