import { useEffect, useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import DownloadIcon from "../../components/atoms/icon/DownloadIcon";
import ReservationTable from "../../components/organisms/ReservationTable/ReservationTable";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import { ActionIcon } from "../../components/atoms/icon/ActionIcon";
import Header from "../../components/organisms/header/Header";
import { fetchReservationHistory } from "../../services/HistoryService";
import { formatDateTimeLocal } from "../../utils/dateUtils";

export default function RoomReport() {
  const [filters, setFilters] = useState({});
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (formData) => {
    setFilters(formData);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!filters.startDate || !filters.endDate) return;

      setLoading(true);
      try {
        const rawData = await fetchReservationHistory({
          start_datetime: formatDateTimeLocal(
            new Date(filters.startDate),
            false
          ),
          end_datetime: formatDateTimeLocal(new Date(filters.endDate), true),
        });

        // Normalisasi agar cocok dengan <ReservationTable>
        const mappedData = rawData
          .map((item) => ({
            date: new Date(item.start_time).toLocaleDateString("id-ID"),
            roomName: item.room_name,
            roomType:
              item.room_details?.capacity <= 10
                ? "Small"
                : item.room_details?.capacity <= 20
                ? "Medium"
                : "Large",
            status:
              item.status === "confirmed"
                ? "Paid"
                : item.status === "canceled"
                ? "Cancel"
                : "Booked",
          }))
          .filter((item) => {
            const roomTypeFilter = filters.roomType
              ? item.roomType === filters.roomType
              : true;

            const statusFilter = filters.status
              ? item.status === filters.status
              : true;

            return roomTypeFilter && statusFilter;
          });

        setReservations(mappedData);
        console.log("Data normalisasi:", mappedData);
      } catch (error) {
        console.error("Failed to fetch reservation history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

 useEffect(() => {
  // Menampilkan semua data dari tahun 2000 sampai 2100
  setFilters({
    startDate: "2000-01-01",
    endDate: "2100-01-01",
    roomType: "",  // semua tipe
    status: "",    // semua status
  });
}, []);

  const totalPages = Math.ceil(reservations.length / rowsPerPage);
  const paginatedData = reservations.slice(
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

          {/* Table */}
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <ReservationTable
              data={paginatedData}
              renderAction={(item) => (
                <button className="text-orange-500 hover:text-orange-700 cursor-pointer">
                  <ActionIcon />
                </button>
              )}
            />
          )}

          {/* Pagination */}
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
