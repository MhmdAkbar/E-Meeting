// components/molecules/SelectedSnackList.jsx
export default function SelectedSnackList({ selectedSnacks, snackList = [] }) {
  if (selectedSnacks.length === 0) return null;

  return (
    <div className="mt-3 space-y-1 text-sm text-gray-800">
      <div className="font-medium">Snack Terpilih:</div>
      <ul className="space-y-1">
        {selectedSnacks.map((item, i) => {
          const snackInfo = snackList.find((s) => s.id === item.snack_id);
          return (
            <li
              key={i}
              className="flex justify-between border p-2 rounded items-center"
            >
              <div>
                <div className="font-semibold">
                  {snackInfo ? snackInfo.name : "Snack tidak ditemukan"}
                </div>
                <div className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </div>
              </div>
              {snackInfo && (
                <div className="text-sm font-medium text-orange-500">
                  Rp{(snackInfo.price * item.quantity).toLocaleString()}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
