import Navbar from "../../components/organisms/navbar/Navbar";
import dummyData from "../../components/data/DummyData";
import DownloadIcon from "../../components/atoms/icon/DownloadIcon";
import ReservationTable from "../../components/organisms/ReservationTable/ReservationTable";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import { useState } from "react";
import { ActionIcon } from "../../components/atoms/icon/ActionIcon";
import Header from "../../components/organisms/header/Header";

export default function History() {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (formData) => {
    setFilters(formData);
    setCurrentPage(1); // reset halaman ke-1 setiap kali pencarian
  };

  // Filter data
  const filteredData = dummyData.filter((item) => {
    const toDateObj = (str) => {
      const [day, month, year] = str.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    if (filters.roomType && item.roomType !== filters.roomType) return false;
    if (filters.status && item.status !== filters.status) return false;

    // Filter berdasarkan tanggal
    if (filters.startDate) {
      const startDate = new Date(filters.startDate);
      if (toDateObj(item.date) < startDate) return false;
    }

    if (filters.endDate) {
      const endDate = new Date(filters.endDate);
      if (toDateObj(item.date) > endDate) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Pagination
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex min-w-screen">
      <div className="w-20">
        <Navbar />
      </div>

      <div className="flex-1 pt-4">
        <Header text="History" />

        <div className="border-[12px] border-[#C4C4C4]">
          {/* Search Bar */}
          <div className="flex items-center px-2">
            <SearchBar
              className="flex-grow-[4]"
              onSearch={handleSearch}
              fields={[
                {
                  name: "startDate",
                  type: "date",
                  placeholder: "Booking Date",
                  label: "Start Date",
                  colSpan: "lg:col-span-4",
                },
                {
                  name: "endDate",
                  type: "date",
                  placeholder: "Booking Date",
                  label: "End Date",
                  colSpan: "lg:col-span-4",
                },
                {
                  name: "roomType",
                  type: "select",
                  placeholder: "Room Type",
                  label: "Room Type",
                  colSpan: "lg:col-span-3",
                  options: [
                    { value: "Small", label: "Small" },
                    { value: "Medium", label: "Medium" },
                    { value: "Large", label: "Large" },
                  ],
                },
                {
                  name: "status",
                  type: "select",
                  placeholder: "Status",
                  label: "Status",
                  colSpan: "lg:col-span-3",
                  options: [
                    { value: "Booked", label: "Booked" },
                    { value: "Paid", label: "Paid" },
                    { value: "Cancel", label: "Cancel" },
                  ],
                },
              ]}
            />
            <div className="border rounded-2xl p-3 border-orange-500">
              <DownloadIcon />
            </div>
          </div>

          {/* Table */}
          <ReservationTable
            data={paginatedData}
            renderAction={(item) => (
              <button className="text-orange-500 hover:text-orange-700 cursor-pointer">
                <ActionIcon />
              </button>
            )}
          />

          {/* Pagination + Rows Per Page */}
          <div className="flex justify-between items-center px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <span>Rows per page:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border px-2 py-1 rounded"
              >
                {[5, 10, 20, 50].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                Page {currentPage} of {totalPages || 1}
              </span>
              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-2 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
