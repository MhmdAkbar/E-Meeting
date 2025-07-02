export default function AvatarProfile() {
  return (
    <div className="pl-3 flex items-center gap-4 py-5">
      <img
        className="w-20 h-20 rounded-full object-cover ring-2 ring-orange-400"
        src="/img/room/room.png"
        alt="User Avatar"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">My Account</h2>
        <p className="text-sm text-gray-500">Manage your account settings</p>
      </div>
    </div>
  );
}
