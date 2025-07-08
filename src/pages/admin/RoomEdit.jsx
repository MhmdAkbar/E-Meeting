import { useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import Header from "../../components/organisms/header/Header";
import RoomGallery from "../../components/organisms/RoomGallery/RoomGallery";
// import CreateRoomButton from "../../components/organisms/CreateRoomButton";
// import RoomFormModal from "../../components/organisms/RoomFormModal";
import axios from "axios";
import CreateRoomButton from "./../../components/molecules/CreateRoomButton/CreateRoomButton";
import CreateRoomForm from "../../components/organisms/CreateRoomForm/CreateRoomForm";
import { api } from './../../utils/api';

export default function RoomReservation() {
  const [filters, setFilters] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleSearch = (newFilters) => setFilters(newFilters);
  const handleCreateRoom = async (roomData) => {
    try {
      await api.post("/admin/rooms", roomData);
      setShowForm(false);
      // Optionally refresh room gallery
    } catch (error) {
      console.error("Create room failed", error);
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

          <RoomGallery filter={filters} />
        </div>
      </div>

      {showForm && (
        <CreateRoomForm
          onClose={() => setShowForm(false)}
          onSubmit={handleCreateRoom}
        />
      )}
    </div>
  );
}
