import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchRoom from "../../components/reservation/SearchRoam";
import RoomGallery from '../../components/reservation/RoomGallery';
import AddNewReservation from "../../components/reservation/AddNewReservation";


export default function RoomReservation() {

    const handleSearch = (filters) => {
        console.log(handleSearch)
    }
    return (
        <div className="flex min-w-screen ">
            <div className=" w-20">
                <Navbar />
            </div>
            <div className="bg-blue-600 flex-1">
            <Header text="Reservation"/>
            <div className=" border-[12px]">
                <div className="flex">
                    <SearchRoom onSearch={handleSearch}/>

                    <AddNewReservation />
                </div>
                <RoomGallery/>
            </div>
            
            </div>

        </div>
    )
}