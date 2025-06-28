function Logo({text = 'E-Meeting'}) {
  return (
    <div className="flex items-center gap-2 ">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center text-white text-3xl font-bold shadow-md">
      E
    </div>
    <p className=" font-extrabold bg-gradient-to-r from-[#EB5B00] to-[#FFB200] bg-clip-text text-transparent">{text}</p>
    </div>
  );
}

export default Logo;
