import { Pagination } from "../../molecules/HistoryReport/Pagination";
import ReservationTable from "../ReservationTable/ReservationTable";

export default function ReservationTableSection({
  data,
  loading,
  currentPage,
  rowsPerPage,
  totalPages,
  setCurrentPage,
  setRowsPerPage,
  renderAction,
}) {
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <ReservationTable data={paginatedData} renderAction={renderAction} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
}
