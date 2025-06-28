import HumanIcon from "./icon/HumanIcon";

export default function RoomGallery() {
  return (
    <div className="grid grid-cols-4 gap-4 p-3 auto-rows-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="rounded shadow overflow-hidden bg-white flex flex-col"
        >
          {/* Bagian Gambar */}
          <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('../../../public/img/room/room.png')" }}>
            <div className="absolute top-3 right-2 bg-orange-600 py-1 px-4 rounded-2xl text-sm">
              Small
            </div>
          </div>

          {/* Bagian Detail */}
          <div className="p-4 text-black">
            <h3 className="text-3xl font-semibold ">Aster Room</h3>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <HumanIcon/>
                    <p>10 people</p>
                </div>
                <p>Rp300,000-</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
