import DashboardCard from "../../molecules/dashboard/DashboardCard";

export default function DashboardSummary({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
      <DashboardCard title="Total Omzet" value={data.total_omzet} />
      <DashboardCard title="Total Reservations" value={data.total_reservations} />
      <DashboardCard title="Total Visitors" value={data.total_visitors} />
      <DashboardCard title="Total Rooms" value={data.total_rooms} />
    </div>
  );
}
