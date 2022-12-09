export const AddOnCard = ({ name = '', description = '', price = '' }) => {
  return (
    <div className='flex justify-between items-center border border-Light-gray rounded-lg py-2 px-4 gap-4'>
      <button className='bg-Purplish-blue h-5 w-5 rounded-[.25rem]' type='checkbox' />
      <div className="w-full">
        <h2 className='text-Marine-blue font-bold text-sm'>{name}</h2>
        <p className="text-Cool-gray text-xs">{description}</p>
      </div>
      <span className='text-Purplish-blue text-xs font-medium'>{price}</span>
    </div>
  )
}
