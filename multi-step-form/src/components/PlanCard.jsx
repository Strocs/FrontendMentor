export const PlanCard = ({
  title = '',
  price = '',
  image,
  isYearly,
  plan = '',
  onSelectPlan
}) => {
  return (
    <button
      type='checkbox'
      className={`flex items-start gap-4 border rounded-lg p-3 hover:border-Purplish-blue hover:bg-Alabaster focus:border-Purplish-blue focus:bg-Alabaster ${
        title === plan
          ? 'border-Purplish-blue bg-Alabaster'
          : 'border-Light-gray bg-White'
      }`}
      onClick={() => onSelectPlan(title)}
    >
      {image}
      <div className='flex flex-col gap-1 items-start'>
        <h2 className='text-Marine-blue font-bold text-md leading-none'>
          {title}
        </h2>
        <p className='text-Cool-gray text-sm'>{price}</p>
        {isYearly && (
          <p className='text-Marine-blue text-xs leading-none font-medium'>
            2 months free
          </p>
        )}
      </div>
    </button>
  )
}
