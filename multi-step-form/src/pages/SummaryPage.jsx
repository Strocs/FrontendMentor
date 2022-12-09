import { Link } from 'react-router-dom'
import { HeaderLayout, Price } from '../components'
import { useChangePages } from '../hooks'

const prices = {
  monthly: {
    planPrices: { arcade: 9, advance: 12, pro: 15 },
    addonPrices: { online: 1, storage: 2, profile: 2 }
  },
  yearly: {
    planPrices: { arcade: 90, advance: 120, pro: 150 },
    addonPrices: { online: 10, storage: 20, profile: 20 }
  }
}

export const SummaryPage = ({ plan, yearSubs, addons }) => {
  const { planSelection } = useChangePages()

  const { planPrices, addonPrices } = yearSubs ? prices.yearly : prices.monthly

  return (
    <>
      <HeaderLayout
        title='Finishing Up'
        description='Double-check everything looks OK before confirming.'
      />
      <div className='bg-Magnolia px-4 py-5 rounded-lg'>
        <div className='border-b border-Light-gray flex justify-between items-center pb-2'>
          <div>
            <h2 className='text-Marine-blue font-bold text-sm leading-3'>
              {plan} <span>({yearSubs ? 'Yearly' : 'Monthly'})</span>
            </h2>
            <Link
              className='text-Cool-gray text-sm underline'
              to={planSelection}
            >
              Change
            </Link>
          </div>
          <span className='font-bold text-sm text-Marine-blue'>
            <Price
              price={planPrices.arcade}
              yearSubs={yearSubs}
              isPlan={true}
            />
          </span>
        </div>
        <ul className='flex flex-col gap-3 mt-4'>
          {addons.map(addon => (
            <li key={addon} className='flex justify-between'>
              <p className='text-Cool-gray text-sm'>{addon}</p>
              <span className='font-medium text-sm text-Marine-blue'>
                <Price
                  price={addonPrices.profile}
                  yearSubs={yearSubs}
                  isPlan={false}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-between items-center px-4 pt-5'>
        <p className='text-Cool-gray text-sm'>
          Total (per {yearSubs ? 'year' : 'month'})
        </p>
        <span className='text-Purplish-blue font-bold text-lg'>
          <Price
            price={planPrices.arcade + addonPrices.profile * addons.length}
            yearSubs={yearSubs}
            isPlan={false}
          />
        </span>
      </div>
    </>
  )
}
