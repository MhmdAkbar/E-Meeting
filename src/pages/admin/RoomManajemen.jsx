import { useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import Header from "../../components/organisms/header/Header";
import RoomGallery from "../../components/organisms/RoomGallery/RoomGallery";
import CreateRoomButton from "../../components/molecules/CreateRoomButton/CreateRoomButton";
import CreateRoomForm from "../../components/organisms/CreateRoomForm/CreateRoomForm";
import { api } from "../../utils/api";

// Toast UI
function Toast({ message, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 bg-orange-100 text-orange-800 px-4 py-2 rounded shadow border border-orange-300 animate-fade-in-out z-50">
      {message}
      <button onClick={onClose} className="ml-2 font-bold text-orange-500">
        ×
      </button>
    </div>
  );
}

export default function RoomManajemen() {
  const [filters, setFilters] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [roomToEdit, setRoomToEdit] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const handleSearch = (newFilters) => setFilters(newFilters);

  const handleEdit = (room) => {
    setRoomToEdit(room);
    setShowForm(true);
  };

  const handleSaveRoom = async (roomData) => {
    try {
      if (roomToEdit) {
        await api.put(`/admin/rooms/${roomToEdit.id}`, roomData);
      } else {
        await api.post("/admin/rooms", roomData);
      }

      // ✅ 1. Tutup modal & reset form
      setShowForm(false);
      setRoomToEdit(null);

      // ✅ 2. Munculkan toast
      setToastMessage("✅ Room berhasil disimpan!");

      // ✅ 3. Setelah 0.2 detik, refresh UI
      setTimeout(() => {
        setRefreshKey((prev) => prev + 1);
      }, 200);
    } catch (error) {
      console.error("Gagal menyimpan ruangan:", error);
    }
  };

  return (
    <div className="flex max-w-screen-xl">
      <div className="w-20">
        <Navbar />
      </div>

      <div className="flex-1 pt-4">
        <Header text="Room Management" />

        <div className="border-[12px] border-[#C4C4C4] px-4 py-3 space-y-4">
          <div className="flex justify-between items-center">
            <SearchBar
              onSearch={handleSearch}
              fields={[
                {
                  name: "search",
                  type: "text",
                  placeholder: "Search...",
                  icon: "search",
                },
                {
                  name: "status",
                  type: "select",
                  placeholder: "Status",
                  options: [
                    { value: "active", label: "Active" },
                    { value: "inactive", label: "Inactive" },
                  ],
                },
                {
                  name: "min_capacity",
                  type: "number",
                  placeholder: "Min capacity",
                },
              ]}
            />
            <CreateRoomButton onClick={() => setShowForm(true)} />
          </div>

          <RoomGallery
            filter={filters}
            refreshKey={refreshKey}
            isAdmin={true}
            onEdit={handleEdit}
          />
        </div>
      </div>

      {showForm && (
        <CreateRoomForm
          onClose={() => {
            setShowForm(false);
            setRoomToEdit(null);
          }}
          onSubmit={handleSaveRoom}
          initialData={roomToEdit}
        />
      )}

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
}
