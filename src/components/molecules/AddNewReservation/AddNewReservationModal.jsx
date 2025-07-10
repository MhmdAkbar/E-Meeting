import { useState } from "react";
import InputField from "../../atoms/form/InputField";
// import SelectField from "../../atoms/form/SelectField";

export default function AddReservationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
  room_id: "",
  user_id: "",
  no_hp: "",
  company: "",
  date: "", 
  start_time: "",
  end_time: "",
  visitor_count: 1,
  snacks: [{ snack_id: "", quantity: 1 }],
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl space-y-6">
        <h2 className="text-xl font-bold">Add New Reservation</h2>

        {/* FORM */}
        <div className="grid grid-cols-1 gap-4">
  <InputField
    label="Nama Pemesan"
    name="room_id"
    value={form.room_id}
    onChange={handleChange}
  />
  <InputField
    label="No. HP"
    name="no_hp"
    value={form.no_hp}
    onChange={handleChange}
  />
  <InputField
    label="Company/Organization"
    name="company"
    value={form.company}
    onChange={handleChange}
  />
  <InputField
    label="Tanggal Reservasi"
    name="date"
    type="date"
    value={form.date}
    onChange={handleChange}
  />
  <div className="flex gap-2 justify-center">
    <InputField
      label="Start Time"
      name="start_time"
      type="time"
      value={form.start_time}
      onChange={handleChange}
    />
    <InputField
      label="End Time"
      name="end_time"
      type="time"
      value={form.end_time}
      onChange={handleChange}
    />
  </div>
  <InputField
    label="Visitor Count"
    name="visitor_count"
    type="number"
    value={form.visitor_count}
    onChange={handleChange}
  />
</div>


        {/* Tombol */}
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-orange-500 text-white"
            onClick={() => {
              // sementara hanya log
              console.log("form to submit:", form);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
