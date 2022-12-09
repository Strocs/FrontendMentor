import { Input, HeaderLayout } from '../components'

export const InfoPage = ({name, email, phone, onInputChange}) => {
  return (
    <>
      <HeaderLayout
        title='Personal Info'
        description='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-4'>
        <Input
          label='Name'
          placeholder='e.g. Stephen King'
          type='text'
          name='name'
          value={name}
          onInputChange={onInputChange}
        />
        <Input
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          type='email'
          name='email'
          value={email}
          onInputChange={onInputChange}
        />
        <Input
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          type='phone'
          name='phone'
          value={phone}
          onInputChange={onInputChange}
        />
      </div>
    </>
  )
}
