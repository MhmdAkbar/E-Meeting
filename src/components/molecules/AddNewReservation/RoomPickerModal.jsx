import RoomGallery from "./../../organisms/RoomGallery/RoomGallery";

export default function RoomPickerModal({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4">Pilih Ruangan</h2>

        <RoomGallery
          isAdmin={false}
          onEdit={() => {}}
          onRoomClick={(room) => {
            onSelect({
              ...room,
              price: Number(room.price), // konversi price jadi number di sini
            });
            onClose();
          }}
        />

        <div className="flex justify-end pt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
