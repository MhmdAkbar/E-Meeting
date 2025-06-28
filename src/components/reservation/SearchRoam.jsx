import { useState } from 'react';
import CommonButton from '../ui/button/CommonButton';
import SearchIcon from './icon/SearchIcon';

export default function SearchBar({ onSearch, children, className = "", ...props }) {
  const [keyword, setKeyword] = useState('');
  const [roomType, setRoomType] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, roomType, capacity });
    console.log(e);
  };

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      className={`grid grid-cols-16 p-3 gap-3 ${className}`}
    >
      <div className='flex gap-1 items-center lg:col-span-6 border border-[#a8a2a2] text-[#C4C4C4] rounded-2xl px-2 py-4 text-sm w-full cursor-pointer'>
        <SearchIcon/>
        <input
        type="text"
        placeholder="Enter the keyword here..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
         className="w-full bg-transparent focus:outline-none text-black placeholder:text-[#C4C4C4]"
      />
      </div>

      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className="lg:col-span-4 border border-[#C4C4C4] text-[#C4C4C4] rounded-2xl px-2 py-4 text-sm w-full cursor-pointer"
      >
        <option value="">Room Type</option>
        <option value="single">Small</option>
        <option value="double">Medium</option>
        <option value="suite">Large</option>
      </select>

      <select
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        className="lg:col-span-4 border border-[#C4C4C4] text-[#C4C4C4] rounded-2xl px-2 py-4 text-sm w-full cursor-pointer"
      >
        <option value="">Capacity</option>
        <option value="1">&lt; 10 people</option>
        <option value="2">11-50 people</option>
        <option value="4">51-100 people</option>
      </select>

      <button className='lg:col-span-2 border-orange-600 border px-2 py-4 rounded-2xl text-orange-600 cursor-pointer'>Search</button>
    </form>
  );
}
