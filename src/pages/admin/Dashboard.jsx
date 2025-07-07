import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Navbar from "../../components/organisms/navbar/Navbar";
import Header from "../../components/organisms/header/Header";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import DashboardSummary from "../../components/organisms/dashboard/DashboardSummary";
import RoomStatsList from "../../components/organisms/dashboard/RoomStatsList";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  const handleSearch = async (filters) => {
    try {
      const { start_date, end_date } = filters;

      const response = await api.get("/admin/dashboard", {
        params: { start_date, end_date },
      });

      setDashboardData(response.data);
    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    handleSearch({ start_date: today, end_date: today });
  }, []);

  return (
    <div className="flex max-w-screen-xl">
      {/* Sidebar */}
      <div className="w-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-4">
        <Header text="Dashboard" />

        {/* Inner Border Container */}
        <div className="border-[12px] border-[#C4C4C4]">
          {/* Search bar */}
          <div className="w-full px-4">
            <SearchBar
              onSearch={handleSearch}
              fields={[
                {
                  name: "start_date",
                  type: "date",
                  label: "Start Date",
                  placeholder: "yyyy-mm-dd",
                  colSpan: "lg:col-span-7",
                  defaultValue: new Date().toISOString().split("T")[0],
                },
                {
                  name: "end_date",
                  type: "date",
                  label: "End Date",
                  placeholder: "yyyy-mm-dd",
                  colSpan: "lg:col-span-7",
                  defaultValue: new Date().toISOString().split("T")[0],
                },
              ]}
            />
          </div>

          {/* Summary & Room Stats */}
          {dashboardData && (
            <div className="p-4">
              <DashboardSummary data={dashboardData} />
              <RoomStatsList rooms={dashboardData.room_stats} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
