import { useEffect, useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import Header from "../../components/organisms/header/Header";
// import HistoryTemplate from "../../components/templates/HistoryTemplate";
import { fetchReservationHistory } from "../../services/HistoryService";
import { formatDateTimeLocal } from "../../utils/dateUtils";
import HistoryReportTemplate from "../../components/templates/HistoryReport/HistoryReportTemplate";

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
      } catch (error) {
        console.error("Failed to fetch reservation history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  useEffect(() => {
    setFilters({
      startDate: "2000-01-01",
      endDate: "2100-01-01",
      roomType: "",
      status: "",
    });
  }, []);

  const totalPages = Math.ceil(reservations.length / rowsPerPage);
  const paginatedData = reservations.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full bg-gray-50">
      <div className="flex max-w-screen-xl mx-auto min-h-screen">
        <div className="w-20">
          <Navbar />
        </div>

        <div className="flex-1 pt-4 px-4">
          <Header text="History" />
          <HistoryReportTemplate
            title="History"
            filterProps={{
              onSearch: handleSearch,
            }}
            tableProps={{
              loading,
              data: paginatedData,
              currentPage,
              totalPages,
              rowsPerPage,
              onPageChange: setCurrentPage,
              onRowsPerPageChange: setRowsPerPage,
            }}
          />
        </div>
      </div>
    </div>
  );
}
