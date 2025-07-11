import { useEffect, useState } from "react";
import { fetchSnacks } from "../../../services/snackService";

export default function SnackSelectorModal({ isOpen, onClose, onSelect }) {
  const [snacks, setSnacks] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchSnacks()
        .then(setSnacks)
        .catch((err) => console.error("Failed to fetch snacks", err));
    }
  }, [isOpen]);

  const toggleSnack = (snackId) => {
    setSelectedSnacks((prev) => {
      const exists = prev.find((s) => s.snack_id === snackId);
      if (exists) {
        return prev.filter((s) => s.snack_id !== snackId);
      }
      return [...prev, { snack_id: snackId, quantity: 1 }];
    });
  };

  const updateQuantity = (snackId, quantity) => {
    setSelectedSnacks((prev) =>
      prev.map((s) =>
        s.snack_id === snackId ? { ...s, quantity: Math.max(1, quantity) } : s
      )
    );
  };

  const isSelected = (snackId) =>
    selectedSnacks.find((s) => s.snack_id === snackId);

 const handleSave = () => {
  onSelect(selectedSnacks, snacks); // ← kirim juga snack list
  onClose();
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 space-y-4">
        <h2 className="text-xl font-bold">Pilih Snack</h2>
        <ul className="space-y-4">
          {snacks.map((snack) => {
            const selected = isSelected(snack.id);
            return (
              <li
                key={snack.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div>
                  <div className="font-semibold text-gray-800">{snack.name}</div>
                  <div className="text-sm text-gray-500">{snack.category}</div>
                  <div className="text-sm text-orange-600 font-medium">
                    Rp{snack.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mb-2"
                    checked={!!selected}
                    onChange={() => toggleSnack(snack.id)}
                  />
                  {selected && (
                    <input
                      type="number"
                      min={1}
                      className="w-16 border px-1 py-0.5 rounded text-sm"
                      value={selected.quantity}
                      onChange={(e) =>
                        updateQuantity(snack.id, parseInt(e.target.value) || 1)
                      }
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end gap-2 pt-4">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Batal
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
