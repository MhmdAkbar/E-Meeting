import DownloadIcon from "../../atoms/icon/DownloadIcon";
import SearchBar from "../../molecules/SearchBar/SearchBar";

export default function ReservationFilterPanel({ onSearch }) {
  return (
    <div className="flex items-center px-2">
      <SearchBar
        className="flex-grow-[4]"
        onSearch={onSearch}
        fields={[
          {
            name: "startDate",
            type: "date",
            label: "Start Date",
            colSpan: "lg:col-span-3",
          },
          {
            name: "endDate",
            type: "date",
            label: "End Date",
            colSpan: "lg:col-span-3",
          },
          {
            name: "roomType",
            type: "select",
            label: "Room Type",
            placeholder: "All Types",
            colSpan: "lg:col-span-3",
            options: [
              { label: "Small", value: "Small" },
              { label: "Medium", value: "Medium" },
              { label: "Large", value: "Large" },
            ],
          },
          {
            name: "status",
            type: "select",
            label: "Status",
            placeholder: "All Status",
            colSpan: "lg:col-span-3",
            options: [
              { label: "Paid", value: "Paid" },
              { label: "Cancel", value: "Cancel" },
              { label: "Booked", value: "Booked" },
            ],
          },
        ]}
      />
      <div className="border rounded-2xl p-3 border-orange-500">
        <DownloadIcon />
      </div>
    </div>
  );
}
