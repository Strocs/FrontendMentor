export const Button = ({ content = '', onClick, animate }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 w-24 sm:w-32 sm:py-3 text-sm sm:text-base rounded sm:rounded-lg animate__animated ${
        animate ? 'animate__headShake' : ''
      }
      ${
        content === 'Next Step'
          ? 'bg-Marine-blue hover:bg-Marine-blue-light text-White justify-self-end'
          : ''
      }
      ${
        content === 'Go Back'
          ? 'text-Cool-gray justify-self-start font-bold w-auto hover:text-Marine-blue-light'
          : ''
      }
      ${
        content === 'Confirm'
          ? 'bg-Purplish-blue hover:bg-Purplish-blue-light text-White justify-self-end'
          : ''
      }
      `}
    >
      {content}
    </button>
  )
}
