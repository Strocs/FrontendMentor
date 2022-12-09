import { Link } from 'react-router-dom'
import { HeaderLayout, PriceText } from '../components'
import { prices } from '../helpers/prices'
import { useChangePages } from '../hooks'

export const SummaryPage = ({ plan, yearSubs, addons }) => {
  const { planSelection } = useChangePages()

  const { planPrice, addonPrice, totalPrice } = prices(yearSubs, addons, plan)
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
            <PriceText price={planPrice} yearSubs={yearSubs} isPlan={true} />
          </span>
        </div>
        <ul className='flex flex-col gap-3 mt-4'>
          {addons.map((addon, index) => (
            <li key={addon} className='flex justify-between'>
              <p className='text-Cool-gray text-sm'>{addon}</p>
              <span className='font-medium text-sm text-Marine-blue'>
                <PriceText
                  price={addonPrice[index]}
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
          <PriceText price={totalPrice} yearSubs={yearSubs} isPlan={false} />
        </span>
      </div>
    </>
  )
}
