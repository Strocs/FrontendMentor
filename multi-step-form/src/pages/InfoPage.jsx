import { Description, Input, Title } from '../components'
import { HeaderLayout } from '../components/HeaderLayout'

export const InfoPage = () => {
  return (
    <>
      <HeaderLayout
        title='Personal Info'
        description='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-4'>
        <Input label='Name' placeholder='e.g. Stephen King' type='text' />
        <Input
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          type='email'
        />
        <Input
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          type='phone'
        />
      </div>
    </>
  )
}
