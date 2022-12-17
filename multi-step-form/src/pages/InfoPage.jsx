import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { Input } from '../components/Input'
import { Header } from '../components/Header'

export const InfoPage = () => {
  const { name, email, phone, onChangeValues, errors } = useContext(FormContext)

  return (
    <>
      <Header
        title='Personal Info'
        description='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-4 sm:gap-6'>
        <Input
          label='Name'
          placeholder='e.g. Stephen King'
          type='text'
          name='name'
          value={name}
          onChangeValues={onChangeValues}
          error={errors.name}
        />
        <Input
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          type='email'
          name='email'
          value={email}
          onChangeValues={onChangeValues}
          error={errors.email}
        />
        <Input
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          type='tel'
          name='phone'
          value={phone}
          onChangeValues={onChangeValues}
          error={errors.phone}
        />
      </div>
    </>
  )
}
