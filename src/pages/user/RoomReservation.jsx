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
            <div className=" flex-1 pt-4">
            <Header text="Room Reservation"/>
            <div className=" border-[12px] border-[#C4C4C4]">
                <div className="flex w-full ">
                    <SearchRoom onSearch={handleSearch} className="flex-grow-[4]"/>

                    <AddNewReservation className="flex-grow-[1]" />
                </div>
                <RoomGallery/>
            </div>
            
            </div>

        </div>
    )
}