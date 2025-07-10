import { useState } from "react";
import CommonButton from "../../atoms/button/CommonButton";
import AddReservationModal from './../../molecules/AddNewReservation/AddNewReservationModal';

export default function AddNewReservation({ className = "", ...props }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CommonButton
        title="+ Add New Reservation"
        className={`whitespace-nowrap px-1 py-3 rounded-2xl ${className}`}
        onClick={() => setShowModal(true)}
        {...props}
      />
      <AddReservationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
