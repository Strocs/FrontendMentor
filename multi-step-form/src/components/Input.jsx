export const Input = ({ label = '', placeholder = '', value, type = '' }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-Marine-blue font-medium text-sm'>{label}</label>
      <input
        className='outline px-4 py-2 outline-1 outline-Light-gray rounded-md placeholder:font-medium'
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
