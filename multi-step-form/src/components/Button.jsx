export const Button = ({ content = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-sm
      ${
        content === 'Next Step'
          ? 'bg-Marine-blue text-White justify-self-end'
          : ''
      }
      ${content === 'Go Back' ? 'text-Cool-gray justify-self-start font-bold' : ''}
      ${
        content === 'Confirm'
          ? 'bg-Purplish-blue text-White justify-self-end'
          : ''
      }
      `}
    >
      {content}
    </button>
  )
}
