import { useEffect, useState } from "react";
import { api } from "./../../../utils/api";

export default function CreateRoomForm({
  onClose,
  onSubmit,
  initialData = null,
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    capacity: initialData?.capacity || "",
    price_per_hour: initialData?.price_per_hour || "",
    status: initialData?.status || "active",
    url_room_pic: initialData?.url_room_pic || "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        capacity: initialData.capacity || "",
        price_per_hour: initialData.price_per_hour || "",
        status: initialData.status || "active",
        url_room_pic: initialData.url_room_pic || "",
      });
    }
  }, [initialData]);

  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    setUploading(true);
    setErrorMessage("");

    try {
      const response = await api.post("/upload-image", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const url = response.data.url;
      setFormData((prev) => ({ ...prev, url_room_pic: url }));
    } catch (err) {
      console.error("Upload failed:", err);
      setErrorMessage("❌ Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = () => {
    if (!formData.url_room_pic) {
      setErrorMessage("⚠️ Please upload a room image first!");
      return;
    }

    const payload = {
      name: formData.name,
      capacity: Number(formData.capacity),
      price_per_hour: Number(formData.price_per_hour),
      status: formData.status,
      url_room_pic: formData.url_room_pic,
    };

    onSubmit(payload);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl space-y-4">
        {/* Upload Gambar */}
        <div className="border border-dashed border-orange-500 p-4 text-center rounded flex flex-col items-center justify-center space-y-2">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="room-file"
          />
          <label htmlFor="room-file" className="cursor-pointer text-orange-600">
            <div>📁 Drag and Drop your file here or</div>
            <div className="mt-2 inline-block bg-orange-500 text-white px-4 py-1 rounded">
              {uploading ? "Uploading..." : "Choose File"}
            </div>
          </label>

          {formData.url_room_pic && (
            <img
              src={formData.url_room_pic}
              alt="Uploaded Room"
              className="mt-2 rounded w-full max-w-xs h-auto shadow"
            />
          )}
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded border border-yellow-400 text-sm">
            {errorMessage}
          </div>
        )}

        {/* Input Fields */}
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="number"
          name="price_per_hour"
          placeholder="Price/hours"
          value={formData.price_per_hour}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={formData.capacity}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        {/* Tombol Aksi */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            {uploading ? "Please wait..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
