export const Input = ({
  label = '',
  placeholder = '',
  value,
  type = '',
  name = '',
  onInputChange
  
}) => {
  return (
    <div className='flex flex-col'>
      <label className='text-Marine-blue font-medium text-sm sm:mb-1'>{label}</label>
      <input
        className='outline px-4 py-2 sm:py-3 outline-1 outline-Light-gray caret-Marine-blue text-base text-Marine-blue focus:outline-Marine-blue-light rounded-md placeholder:font-medium sm:font-bold'
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onInputChange}
        required
      />
    </div>
  )
}
