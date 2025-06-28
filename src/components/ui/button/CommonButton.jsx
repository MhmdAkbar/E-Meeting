export default function CommonButton ({title='', children, className='', ...props}) {
    return (
        <>
         <button type="submit" className={`bg-[#EB5B00] text-white py-2 rounded ${className}`} {...props}>
        {title}
      </button>
        </>
    )
}