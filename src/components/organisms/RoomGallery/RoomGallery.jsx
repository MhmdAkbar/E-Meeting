// import HumanIcon from "../atoms/icon/HumanIcon";
import HumanIcon from './../../atoms/icon/HumanIcon';

export default function RoomGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 auto-rows-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="group rounded-2xl shadow-sm overflow-hidden bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          {/* Bagian Gambar */}
          <div
            className="relative h-[200px] bg-cover bg-center"
            style={{
              backgroundImage: "url('../../../public/img/room/room.png')",
            }}
          >
            <div className="absolute top-3 right-2 bg-orange-600 py-1 px-4 rounded-2xl text-sm text-white shadow-sm">
              Small
            </div>
          </div>

          {/* Bagian Detail */}
          <div className="p-4 text-black flex flex-col gap-2">
            <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors duration-300">
              Aster Room
            </h3>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <HumanIcon />
                <span>10 people</span>
              </div>
              <span className="font-semibold text-orange-500">Rp300,000</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
