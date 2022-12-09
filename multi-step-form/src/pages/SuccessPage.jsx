import { Description, Title } from '../components'

export const SuccessPage = () => {
  return (
    <div className='flex flex-col gap-2 py-10 items-center justify-center text-center'>
      <img className='h-14 mb-4' src='/images/icon-thank-you.svg' />
      <Title content='Thank you!' />
      <Description
        content=' Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
      />
    </div>
  )
}
