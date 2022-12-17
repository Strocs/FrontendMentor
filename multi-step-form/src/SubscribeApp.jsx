import { SubscribeAppRouter } from './routes/SubscribeAppRouter'
import { SubscribeAppLayout } from './layout/SubscribeAppLayout'
import { FormProvider } from './context/FormProvider'

export const SubscribeApp = () => {
  return (
    <FormProvider>
      <SubscribeAppLayout>
        <SubscribeAppRouter />
      </SubscribeAppLayout>
    </FormProvider>
  )
}
