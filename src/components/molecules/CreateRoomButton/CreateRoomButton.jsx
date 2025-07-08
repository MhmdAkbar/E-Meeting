// src/components/organisms/CreateRoomButton.jsx
import CommonButton from "../../atoms/button/CommonButton";

export default function CreateRoomButton({ className = "", ...props }) {
  return (
    <CommonButton
      title="+ Create Room"
      className={`whitespace-nowrap px-1 py-3 rounded-2xl bg-orange-500 text-white hover:bg-orange-600 ${className}`}
      {...props}
    />
  );
}
