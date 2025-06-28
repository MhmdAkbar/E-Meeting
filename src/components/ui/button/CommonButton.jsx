export default function CommonButton ({title=''}) {
    

    return (
        <>
         <button type="submit" className="w-full bg-[#EB5B00] text-white py-2 rounded">
        {title}
      </button>
        </>
    )
}