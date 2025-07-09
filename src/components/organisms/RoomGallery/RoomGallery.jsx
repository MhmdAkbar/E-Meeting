import { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import HumanIcon from "../../atoms/icon/HumanIcon";
import RoomCardActions from "../../molecules/RoomCardAction/RoomCardActions";

export default function RoomGallery({
  filter,
  refreshKey,
  isAdmin = false,
  onEdit,
}) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState("");

  const fetchRooms = (filterData = {}) => {
    setLoading(true);
    const body = {
      ...filterData,
      min_capacity: filterData.min_capacity
        ? Number(filterData.min_capacity)
        : undefined,
      search: filterData.search || "",
      status: filterData.status || undefined,
    };

    api
      .post("/rooms?page=1&page_size=12", body)
      .then((res) => {
        setRooms(res.data.rooms || []);
      })
      .catch((err) => {
        console.error("Gagal mengambil data ruangan:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRooms(filter);
  }, [filter, refreshKey]);

  const handleDelete = async (roomId) => {
    try {
      await api.delete(`/admin/rooms/${roomId}`);
      setToastMsg("✅ Room berhasil dihapus");

      // Delay penghapusan dari UI selama 2 detik agar toast terlihat
      setTimeout(() => {
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
        setToastMsg("");
      }, 2000);
    } catch (err) {
      console.error("Gagal menghapus:", err);
    }
  };

  const handleRefresh = () => {
    fetchRooms(filter);
  };

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading rooms...</div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 auto-rows-auto">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group rounded-2xl shadow-sm overflow-hidden bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className="relative h-[200px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  room.url_room_pic || "/img/room/room.png"
                })`,
              }}
            >
              <div className="absolute top-3 right-2 bg-orange-600 py-1 px-4 rounded-2xl text-sm text-white shadow-sm capitalize">
                {room.status}
              </div>
            </div>

            <div className="p-4 text-black flex flex-col gap-2">
              <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors duration-300">
                {room.name}
              </h3>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <HumanIcon />
                  <span>{room.capacity} people</span>
                </div>
                <span className="font-semibold text-orange-500">
                  Rp{room.price_per_hour.toLocaleString()}
                </span>
              </div>

              {isAdmin && (
                <RoomCardActions
                  room={room}
                  onEdit={onEdit}
                  onDelete={handleDelete}
                  onRefresh={handleRefresh}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-orange-100 text-orange-800 px-4 py-2 rounded shadow border border-orange-300 animate-fade-in-out">
          {toastMsg}
        </div>
      )}
    </>
  );
}
