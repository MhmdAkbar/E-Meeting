import CommonButton from "../ui/button/CommonButton";

export default function AddNewReservation({children, className='', ...props}) {

    return (
        <>
        <CommonButton title="+Add New Reservation" className="m-4 px-2 py-4 rounded-2xl cursor-pointer" {...props}/>
        </>
    )
}