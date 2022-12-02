import { GoDash } from 'react-icons/go/index.esm?'
export const DeleteTag = ({ removeTag, text, id }) => {
  return (
    <button onClick={() => removeTag(id, text)} className='ml-1 -mr-1'>
      <GoDash color='white' />
    </button>
  )
}
