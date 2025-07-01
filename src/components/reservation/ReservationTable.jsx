export default function ReservationTable({ data = [], renderAction }) {
  return (
    <div className="p-4">
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
          <tr>
            <th className="p-2">Date Reservation</th>
            <th className="p-2">Room Name</th>
            <th className="p-2">Room Type</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="text-sm border-b">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.roomName}</td>
              <td className="p-2">{item.roomType}</td>
              <td className="p-2">
                <span
                  className={`inline-block text-center min-w-[80px] px-2 py-1 rounded text-white text-xs ${
                    item.status === "Paid"
                      ? "bg-green-600"
                      : item.status === "Cancel"
                      ? "bg-red-500"
                      : "bg-orange-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-2">
                {renderAction ? renderAction(item) : <span>-</span>}
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center text-gray-400 p-4">
                No data matched your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
