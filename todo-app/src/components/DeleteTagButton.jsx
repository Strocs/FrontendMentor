import { GoDash } from 'react-icons/go'
export const DeleteTagButton = ({ removeTag, text, id }) => {
  return (
    <button onClick={() => removeTag(id, text)} className='ml-1 -mr-1'>
      <GoDash color='white' />
    </button>
  )
}
