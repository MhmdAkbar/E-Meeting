
export default function ConfirmDialog({
  open,
  title = "Confirmation",
  description = "Are you sure?",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-lg font-semibold text-orange-600">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-end gap-2 pt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
