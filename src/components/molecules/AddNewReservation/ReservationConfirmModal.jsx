import React from "react";

export default function ReservationConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  form,
  room,
  snackList,
}) {
  if (!isOpen) return null;

  const getSnackName = (snack_id) => {
    const found = snackList.find(
      (s) => s.snack_id === snack_id || s.id === snack_id
    );
    return found ? found.name : "Snack Tidak Dikenal";
  };

  const durationHours =
    Number(form.end_time?.split(":")[0]) - Number(form.start_time?.split(":")[0]);

  const roomTotal = durationHours * Number(room?.price_per_hour || 0);

  const snackTotal = form.snacks.reduce((total, s) => {
    const snack = snackList.find(
      (sn) => sn.snack_id === s.snack_id || sn.id === s.snack_id
    );
    return total + (snack ? snack.price * s.quantity : 0);
  }, 0);

  const grandTotal = roomTotal + snackTotal;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4 shadow-xl">
        <h2 className="text-lg font-semibold text-center">Konfirmasi Reservasi</h2>

        {/* RUANGAN */}
        {room && (
          <div>
            <p className="font-medium text-orange-600">{room.name}</p>
            <img
              src={room.image_url || room.url_room_pic || "/img/room/room.png"}
              alt={room.name}
              className="w-full h-40 object-cover rounded mt-1"
            />
            <p className="text-sm text-gray-600 mt-1">
              Harga / jam: Rp{Number(room.price_per_hour).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              Durasi: {durationHours} jam → Total: Rp{roomTotal.toLocaleString()}
            </p>
          </div>
        )}

        {/* INFORMASI LAIN */}
        <div className="text-sm space-y-1">
          <p><strong>Nama Pemesan:</strong> {form.name}</p>
          <p><strong>No HP:</strong> {form.no_hp}</p>
          <p><strong>Company:</strong> {form.company}</p>
          <p><strong>Tanggal:</strong> {form.date}</p>
          <p><strong>Waktu:</strong> {form.start_time} - {form.end_time}</p>
          <p><strong>Jumlah Pengunjung:</strong> {form.visitor_count}</p>
          {form.Note && <p><strong>Catatan:</strong> {form.Note}</p>}
        </div>

        {/* SNACK */}
        {form.snacks.length > 0 && (
          <div>
            <p className="font-semibold mt-3 mb-1">Snack Dipesan:</p>
            <ul className="list-disc list-inside text-sm">
              {form.snacks.map((s, i) => {
                const snack = snackList.find(
                  (sn) => sn.snack_id === s.snack_id || sn.id === s.snack_id
                );
                return (
                  <li key={i}>
                    {getSnackName(s.snack_id)} × {s.quantity}{" "}
                    {snack && (
                      <span className="text-gray-500">
                        (Rp{(snack.price * s.quantity).toLocaleString()})
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="text-sm mt-1 text-gray-600">
              Total Snack: Rp{snackTotal.toLocaleString()}
            </p>
          </div>
        )}

        {/* TOTAL */}
        <div className="text-right text-base font-semibold text-orange-600 border-t pt-2">
          Total Bayar: Rp{grandTotal.toLocaleString()}
        </div>

        {/* ACTION BUTTON */}
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded">
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="bg-orange-500 text-white px-3 py-1 rounded"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
}
