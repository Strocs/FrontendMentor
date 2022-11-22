export const CreatedDate = ({ created, children }) => {
  return (
    <div className='justify-between items-center text-[.6rem] text-lm-4'>
      <p>
        <b>Created: </b>
        {created.getDate()}/{created.getMonth() + 1}/{created.getFullYear()}{' '}
        {created.getHours() < 10
          ? '0' + created.getHours()
          : created.getHours()}
        :
        {created.getMinutes() < 10
          ? '0' + created.getMinutes()
          : created.getMinutes()}
        hrs
      </p>
      {children}
    </div>
  )
}
