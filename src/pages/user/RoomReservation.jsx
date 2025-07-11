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
    <div className="w-full bg-gray-50">
      <div className="flex max-w-screen-xl mx-auto min-h-screen">
        <div className="w-20">
          <Navbar />
        </div>

        <div className="flex-1 pt-4 px-4">
          <Header text="Room Reservation" />

          <div className="border-[12px] border-[#C4C4C4] bg-white px-4 py-3 rounded-xl 
                          sm:px-4 sm:py-3 
                          md:px-6 md:py-4 
                          lg:px-8 lg:py-5 
                          xl:px-10 xl:py-6">

            {/* Search + Button */}
            <div className="flex gap-4 w-full items-center justify-center mb-4">
              <div className="flex-grow min-w-[240px]">
                <SearchBar
                  onSearch={handleSearch}
                  fields={[
                    {
                      name: "search",
                      type: "text",
                      placeholder: "Search...",
                      icon: "search",
                      colSpan: "lg:col-span-4",
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

              <div className="min-w-[180px]">
                <AddNewReservation />
              </div>
            </div>

            {/* Room Gallery */}
            <RoomGallery filter={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
