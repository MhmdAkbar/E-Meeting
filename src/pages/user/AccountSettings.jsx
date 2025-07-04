import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import AvatarProfile from "../../components/organisms/AvatarProfile";
import AccountInfoForm from "../../components/organisms/AccountInfoForm";
import PasswordSection from "../../components/organisms/PasswordSection";
import CommonButton from "../../components/molecules/button/CommonButton";

export default function AccountSettings() {
  const [form, setForm] = useState({
    email: "johndoe@gmail.com",
    username: "John Doe",
    role: "Admin",
    status: "Active",
    language: "English",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    console.log("Tombol diklik, editing mode berubah jadi:", !isEditing);
    setIsEditing((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setIsEditing(false);
  };
  console.log("isEditing di AccountSettings:", isEditing);

  return (
    <div className="flex min-w-screen">
      <div className="w-20">
        <Navbar />
      </div>
      <div className="flex-1 pt-4 px-6">
        <Header text="Setting" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <AvatarProfile />
          <AccountInfoForm
            form={form}
            onChange={handleChange}
            isEditing={isEditing}
          />
          <PasswordSection
            form={form}
            onChange={handleChange}
            isEditing={isEditing}
          />

          <div className="flex justify-end gap-4 pt-4">
            {isEditing ? (
              <>
                <CommonButton
                  type="submit"
                  title="Simpan Perubahan"
                  className="px-4"
                />
                <CommonButton
                  type="button"
                  title="Batal"
                  onClick={toggleEdit}
                  className="bg-gray-400 hover:bg-gray-500 px-4"
                />
              </>
            ) : (
              <div className="flex justify-end gap-4 pt-4">
                 {" "}
                <CommonButton
                  type="button"
                  title={isEditing ? "Selesai" : "Ubah Data"}
                  onClick={() => {
                    console.log(
                      "TOMBOL DIKLIK - isEditing sebelumnya:",
                      isEditing
                    );
                    toggleEdit();
                  }}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
