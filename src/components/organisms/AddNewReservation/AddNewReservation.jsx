import CommonButton from "../../atoms/button/CommonButton";

export default function AddNewReservation({
  className = "",
  ...props
}) {
  return (
    <CommonButton
      title="+ Add New Reservation"
      className={`whitespace-nowrap px-1 py-3 rounded-2xl ${className}`}
      {...props}
    />
  );
}
