import { useEffect, useState } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import Header from "../../components/organisms/header/Header";
import { fetchReservationHistory } from "../../services/HistoryService";
import { formatDateTimeLocal } from "../../utils/dateUtils";
import HistoryReportTemplate from "../../components/templates/HistoryReport/HistoryReportTemplate";
import ReservationConfirmModal from "../../components/molecules/AddNewReservation/ReservationConfirmModal";
import { fetchSnacks } from "../../services/snackService";

export default function History() {
  const [filters, setFilters] = useState({});
  const [reservations, setReservations] = useState([]);
  const [snackList, setSnackList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (formData) => {
    setFilters(formData);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchSnackData = async () => {
      try {
        const data = await fetchSnacks();
        setSnackList(data);
      } catch (error) {
        console.error("Failed to fetch snacks", error);
      }
    };

    fetchSnackData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!filters.startDate || !filters.endDate) return;

      setLoading(true);
      try {
        const rawData = await fetchReservationHistory({
          start_datetime: formatDateTimeLocal(new Date(filters.startDate), false),
          end_datetime: formatDateTimeLocal(new Date(filters.endDate), true),
        });

        const mappedData = rawData
          .map((item) => ({
            ...item,
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
            room: item.room_details,
            form: {
              name: item.user_name,
              no_hp: item.phone,
              company: item.company,
              date: item.start_time.split(" ")[0],
              start_time: new Date(item.start_time).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              end_time: new Date(item.end_time).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              visitor_count: item.visitor_count,
              Note: item.notes,
              // ✅ Format ulang snack agar bisa dibaca modal
              snacks: (item.snacks || []).map((snackId) => ({
                snack_id: snackId,
                quantity: 1,
              })),
            },
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

  const handleViewReservation = (reservation) => {
    setSelectedReservation(reservation);
    setShowConfirmModal(true);
  };

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
            filterProps={{ onSearch: handleSearch }}
            tableProps={{
              loading,
              data: paginatedData,
              currentPage,
              totalPages,
              rowsPerPage,
              onPageChange: setCurrentPage,
              onRowsPerPageChange: setRowsPerPage,
              renderAction: (reservation) => (
                <button
                  onClick={() => handleViewReservation(reservation)}
                  className="text-orange-600 hover:underline"
                >
                  View
                </button>
              ),
            }}
          />

          {/* Modal Konfirmasi */}
          <ReservationConfirmModal
            isOpen={showConfirmModal}
            onClose={() => setShowConfirmModal(false)}
            onConfirm={() => {
              // tambahkan fungsi pembayaran di sini kalau ingin
              setShowConfirmModal(false);
            }}
            form={selectedReservation?.form}
            room={selectedReservation?.room}
            snackList={snackList}
            readonly={true}
            showPayButton={true} // ✅ tombol bayar tetap muncul
          />
        </div>
      </div>
    </div>
  );
}
