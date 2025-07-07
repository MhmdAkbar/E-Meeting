import Navbar from "../../components/organisms/navbar/Navbar";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import Header from "../../components/organisms/header/Header";
import RoomGallery from "./../../components/organisms/RoomGallery/RoomGallery";
import AddNewReservation from "../../components/organisms/AddNewReservation/AddNewReservation";

export default function RoomReservation() {
  const handleSearch = (filters) => {
    console.log(handleSearch);
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
    {/* Search bar container */}
    <div className="flex-grow pr-2">
      <SearchBar
        onSearch={handleSearch}
        fields={[
          {
            name: "keyword",
            type: "text",
            placeholder: "Search...",
            icon: "search",
            colSpan: "lg:col-span-5",
          },
          {
            name: "roomType",
            type: "select",
            placeholder: "Room Type",
            options: [
              { value: "single", label: "Small" },
              { value: "double", label: "Medium" },
              { value: "suite", label: "Large" },
            ],
          },
          {
            name: "capacity",
            type: "select",
            placeholder: "Capacity",
            options: [
              { value: "1", label: "< 10 people" },
              { value: "2", label: "11–50 people" },
              { value: "4", label: "51–100 people" },
            ],
          },
        ]}
      />
    </div>

    {/* Add button */}
    <AddNewReservation className="min-w-[200px]" />
  </div>

  {/* Room Gallery */}
  <RoomGallery />
</div>

      </div>
    </div>
  );
}
