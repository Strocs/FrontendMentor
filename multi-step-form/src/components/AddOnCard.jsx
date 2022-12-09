export const AddOnCard = ({
  name = '',
  description = '',
  price = '',
  addons = [],
  onSelection
}) => {
  const isActive = addons.includes(name)
  return (
    <div
      onClick={() => onSelection(name)}
      className={`flex items-center justify-start border cursor-pointer rounded-lg py-2 px-4 gap-4 w-full ${
        isActive ? 'border-Purplish-blue bg-Magnolia' : 'border-Light-gray'
      }`}
    >
      <div className='relative h-5 w-5'>
        <input
          className='h-5 w-5 appearance-none bg-Purplish-blue rounded'
          type='checkbox'
        />
        {isActive && (
          <img
            className='absolute z-10 bottom-0 left-0 right-0 top-0 m-auto'
            src='/images/icon-checkmark.svg'
          />
        )}
      </div>
      <div className='w-max text-left'>
        <h2 className='text-Marine-blue font-medium text-md'>{name}</h2>
        <p className='text-Cool-gray text-xs'>{description}</p>
      </div>
      <span className='text-Purplish-blue text-xs font-medium ml-auto'>
        {price}
      </span>
    </div>
  )
}
