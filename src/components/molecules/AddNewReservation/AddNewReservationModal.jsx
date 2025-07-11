import { useEffect, useState } from "react";
import InputField from "../../atoms/form/InputField";
import SnackSelectorModal from "./../Snack/SnackSelectorModal";
import CheckboxWithLabel from "./../../atoms/button/CheckboxWithLabel";
import SelectedSnackList from "./../Snack/SelectedSnackList";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getDateTimeString } from "../../../utils/dateUtils";
import { createReservation } from "../../../services/ReservationService";
import RoomPickerModal from "./RoomPickerModal";
import ReservationConfirmModal from './ReservationConfirmModal';

export default function AddReservationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    room_id: "",
    user_id: "",
    name: "", // <– hanya untuk ditampilkan di UI
    no_hp: "",
    company: "",
    date: "",
    start_time: "",
    end_time: "",
    visitor_count: 1,
    snacks: [],
    Note: "",
  });

  const [showSnackModal, setShowSnackModal] = useState(false);
  const [includeSnacks, setIncludeSnacks] = useState(false);
  const [snackList, setSnackList] = useState([]);
  const [showRoomPicker, setShowRoomPicker] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode(token);
      setForm((prev) => ({ ...prev, user_id: decoded.user_id }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSnacks = (selected, masterList) => {
    setForm((prev) => ({ ...prev, snacks: selected }));
    setSnackList(masterList);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        room_id: selectedRoom?.id,
        user_id: form.user_id,
        start_time: getDateTimeString(form.date, form.start_time),
        end_time: getDateTimeString(form.date, form.end_time),
        visitor_count: Number(form.visitor_count),
        snacks: form.snacks.map((snack) => ({
          snack_id: snack.snack_id,
          quantity: Number(snack.quantity),
        })),
      };

      console.log("submit payload:", payload);
      await createReservation(payload);
      alert("Reservasi berhasil!");
      onClose();
    } catch (err) {
      console.error("Error submit:", err);
      alert("Gagal membuat reservasi");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-end z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-screen overflow-y-auto p-6 space-y-6">
        <h2 className="text-xl font-bold">Add New Reservation</h2>

        {/* PILIH RUANGAN */}
        <div className="mb-4">
          <label className="text-sm font-medium">Ruangan</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRoomPicker(true)}
              className="bg-orange-500 text-white px-3 py-1 rounded"
            >
              Pilih Ruangan
            </button>
            {selectedRoom && (
              <span className="text-gray-800 font-semibold">
                {selectedRoom.name}
              </span>
            )}
          </div>
        </div>

        <RoomPickerModal
          isOpen={showRoomPicker}
          onClose={() => setShowRoomPicker(false)}
          onSelect={(room) => {
            setSelectedRoom(room);
            setForm((prev) => ({ ...prev, room_id: room.id }));
          }}
        />

        {/* FORM */}
        <div className="grid grid-cols-1 gap-1">
          <InputField
            label="Nama Pemesan"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="No. HP"
            name="no_hp"
            type="number"
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
          <InputField
            label="Catatan Khusus"
            name="Note"
            type="text"
            value={form.Note}
            onChange={handleChange}
          />

          {/* Snack Section */}
          <CheckboxWithLabel
            label="Tambahkan Snack"
            checked={includeSnacks}
            onChange={(e) => {
              setIncludeSnacks(e.target.checked);
              if (e.target.checked) setShowSnackModal(true);
            }}
          />
          <SelectedSnackList
            selectedSnacks={form.snacks}
            snackList={snackList}
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-300" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-orange-500 text-white"
            onClick={() => setShowConfirmModal(true)}
          >
            Save
          </button>
        </div>

        {/* Snack Modal */}
        <SnackSelectorModal
          isOpen={showSnackModal}
          onClose={() => setShowSnackModal(false)}
          onSelect={handleSelectSnacks}
        />

        {/* konfirmasi  */}
        <ReservationConfirmModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleSubmit}
          form={form}
          room={selectedRoom}
          snackList={snackList}
        />
      </div>
    </div>
  );
}
