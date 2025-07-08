import Navbar from "../../components/organisms/navbar/Navbar";
import Header from "../../components/organisms/header/Header";

export default function ReservationSchedule() {
  return (
    <div className="flex max-w-screen-xl">
      {/* Sidebar */}
      <div className="w-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-4">
        <Header text="Reservation Schedule" />

        {/* Inner Border Container */}
        <div className="border-[12px] border-[#C4C4C4] p-4">
          {/*konten */}
          <div className="text-gray-500 italic">
            Jadwal reservasi akan ditampilkan di sini...
          </div>
        </div>
      </div>
    </div>
  );
}
