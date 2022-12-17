export const AddonCard = ({
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
      className={`flex items-center justify-start border cursor-pointer rounded-lg py-2 px-4 gap-4 w-full sm:py-5 sm:px-6 sm:gap-6 ${
        isActive ? 'border-Marine-blue-light bg-Alabaster' : 'border-Light-gray'
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
        <h2 className='text-Marine-blue font-medium sm:text-lg'>{name}</h2>
        <p className='text-Cool-gray text-xs sm:text-sm'>{description}</p>
      </div>
      <span className='text-Purplish-blue text-xs sm:text-sm font-medium ml-auto'>
        {price}
      </span>
    </div>
  )
}
