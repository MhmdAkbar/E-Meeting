export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-lg font-bold text-gray-900">
        {typeof value === "number" ? value.toLocaleString("id-ID") : value}
      </div>
    </div>
  );
}
