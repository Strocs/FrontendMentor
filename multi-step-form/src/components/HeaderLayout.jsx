import { Description, Title } from './'

export const HeaderLayout = ({ title = '', description = '' }) => {
  return (
    <div className='flex flex-col gap-1 max-w-[16rem] sm:max-w-max mb-6'>
      <Title content={title} />
      <Description content={description} />
    </div>
  )
}
