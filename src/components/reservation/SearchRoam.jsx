import { useState } from 'react';

export default function SearchBar({ onSearch, children, className = "", ...props }) {
  const [keyword, setKeyword] = useState('');
  const [roomType, setRoomType] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, roomType, capacity });
    console.log(e)
  };

  return (
    <form {...props}
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 md:items-center p-4 bg-white rounded shadow"
    >
      <input
        type="text"
        placeholder="Enter the keyword here..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-sm w-full md:w-64"
      />

      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-sm w-full md:w-40"
      >
        <option value="">Room Type</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>

      <select
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-sm w-full md:w-40"
      >
        <option value="">Capacity</option>
        <option value="1">1 Person</option>
        <option value="2">2 People</option>
        <option value="4">4 People</option>
      </select>

      <button
        type="submit"
        className="border border-[#EB5B00] text-[#EB5B00] hover:bg-[#EB5B00] hover:text-white transition rounded px-6 py-2 text-sm w-full md:w-auto"
      >
        Search
      </button>
    </form>
  );
}
