import star from '/icon-star.svg'

export const Star = () => {
  return (
    <div className='grid place-items-center w-12 h-12 lg:w-14 lg:h-14 mb-2 lg:mb-6 rounded-full bg-medium-blue'>
      <img className='w-4 lg:w-5' src={star} alt="star" />
    </div>
  )
}
