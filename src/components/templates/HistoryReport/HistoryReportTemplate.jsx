import ReservationFilterPanel from "../../organisms/HistoryReport/ReservationFilterPanel";
import ReservationTableSection from "../../organisms/HistoryReport/ReservationTableSection";

export default function HistoryReportTemplate({
  title = "History",
  filterProps,
  tableProps,
}) {
  return (
    <div className="w-full">
      <div
        className="
          border-[12px] border-[#C4C4C4]
          px-4 py-3 bg-white rounded-xl
          w-full
          sm:px-4 sm:py-3
          md:px-6 md:py-4
          lg:px-8 lg:py-5
          xl:px-10 xl:py-6
        "
      >
        <ReservationFilterPanel onSearch={filterProps.onSearch} />
        <ReservationTableSection {...tableProps} />
      </div>
    </div>
  );
}
