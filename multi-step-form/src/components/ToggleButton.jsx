export const ToggleButton = ({ yearSubs, onToggle }) => {
  return (
    <div className='flex gap-4 justify-center bg-Alabaster py-3 mt-5 rounded-lg w-full'>
      <label
        className={`text-sm font-bold ${
          !yearSubs ? 'text-Marine-blue' : 'text-Cool-gray'
        }`}
      >
        Monthly
      </label>
      <button
        className='relative inline-block w-10 h-5 bg-Marine-blue rounded-full'
        onClick={() => onToggle(!yearSubs)}
      >
        <span
          className={`absolute top-0 bottom-0 right-0 left-0 m-auto transition rounded-full w-3 h-3 bg-White ${
            yearSubs ? 'translate-x-[.6rem]' : 'translate-x-[-.6rem]'
          }`}
        ></span>
      </button>
      <label
        className={`text-sm font-bold ${
          yearSubs ? 'text-Marine-blue' : 'text-Cool-gray'
        }`}
      >
        Yearly
      </label>
    </div>
  )
}
