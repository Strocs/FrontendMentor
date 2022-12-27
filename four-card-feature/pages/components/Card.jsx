export const Card = ({ title, description, image, color }) => {
  return (
    <div
      className={`flex flex-col px-7 pt-3 w-full max-h-min max-w-[22rem] pb-7 sm:px-8 sm:pt-5 cursor-pointer hover:-translate-y-2 transition-transform rounded-md shadow-xl shadow-slate-300 border-t-4 bg-white ${
        color === 'cyan' ? 'border-cyan' : ''
      } ${color === 'red' ? 'border-red' : ''} ${
        color === 'orange' ? 'border-orange' : ''
      } ${color === 'blue' ? 'border-blue' : ''}`}
    >
      <h2 className='text-xl font-semibold leading-loose sm:leading-[2.2]'>{title}</h2>
      <p className='text-xs sm:text-[0.8rem] leading-relaxed sm:leading-[1.8]'>{description}</p>
      <img
        className='self-end h-14 w-14 sm:h-16 sm:w-16 mt-10'
        src={image}
        alt={`${title} Icon`}
      />
    </div>
  )
}
