import { useState } from "react";
import ConfirmDialog from './../../organisms/ConfirmDialog/ConfirmDialog';
import Toast from './../../atoms/feedbacks/Toast';

export default function RoomCardActions({ room, onEdit, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleDelete = async () => {
    try {
      await onDelete(room.id);
      setToastMsg("✅ Room berhasil dihapus");
    } catch (err) {
      console.error("Gagal menghapus:", err);
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className="flex justify-end gap-2 pt-2">
      <button
        className="text-blue-600 hover:underline text-sm"
        onClick={() => onEdit(room)}
      >
        Edit
      </button>
      <button
        className="text-red-600 hover:underline text-sm"
        onClick={() => setShowConfirm(true)}
      >
        Hapus
      </button>

      {showConfirm && (
        <ConfirmDialog
          open={showConfirm}
          title="Hapus Ruangan"
          description={`Apakah Anda yakin ingin menghapus "${room.name}"?`}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleDelete}
        />
      )}

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
}
