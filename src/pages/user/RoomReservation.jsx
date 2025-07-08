import { useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import Header from "../../components/organisms/header/Header";
import RoomGallery from "../../components/organisms/RoomGallery/RoomGallery";
import AddNewReservation from "../../components/organisms/AddNewReservation/AddNewReservation";

export default function RoomReservation() {
  const [filters, setFilters] = useState({});

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex max-w-screen-xl">
      <div className="w-20">
        <Navbar />
      </div>

      <div className="flex-1 pt-4">
        <Header text="Room Reservation" />

        <div className="border-[12px] border-[#C4C4C4] px-4 py-3">
          <div className="flex gap-4 w-full items-center">
            <div className="flex-grow pr-2">
              <SearchBar
  onSearch={handleSearch}
  fields={[
    {
      name: "search", // 👈 Ubah dari keyword ke search
      type: "text",
      placeholder: "Search...",
      icon: "search",
      colSpan: "lg:col-span-5",
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

            </div>
            <AddNewReservation className="min-w-[200px]" />
          </div>

          {/* Room Gallery menerima filter sebagai props */}
          <RoomGallery filter={filters} />
        </div>
      </div>
    </div>
  );
}
