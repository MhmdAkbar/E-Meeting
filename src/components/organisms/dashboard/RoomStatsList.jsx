import OccupancyDonut from "../../atoms/charts/OccupancyDonut";

export default function RoomStatsList({ rooms }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">Room Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {rooms.map((room) => {
          const occupancyPercent = Math.round(room.occupancy_rate * 100);

          return (
            <div
              key={room.room_id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl border"
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-gray-800">
                  {room.room_name}
                </h1>

                <div>
                  <h3 className="text-gray-500 text-sm">Occupancy</h3>
                  <p className="text-xl font-bold text-gray-800">
                    {occupancyPercent}%
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-500 text-sm">Omzet</h3>
                  <p className="text-xl font-bold text-gray-800">
                    Rp {Number(room.revenue).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>

              <div className="w-[80px] h-[80px]">
                <OccupancyDonut value={occupancyPercent} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
