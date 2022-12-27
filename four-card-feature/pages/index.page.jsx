import { Card } from './components/Card'
import { cardData } from './data/cardData'

export function FeaturesApp () {
  return (
    <>
      <header className='text-center mx-8 mt-24 mb-16 max-w-lg sm:mx-auto'>
        <h1 className='text-2xl sm:text-4xl font-extralight'>
          Reliable, efficient delivery
        </h1>
        <h2 className='text-2xl sm:text-4xl font-semibold leading-relaxed mb-4 sm:mb-5 sm:mt-2'>
          Powered by Technology
        </h2>
        <p className='font-normal text-[0.925rem]'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main className='flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-7 mx-8 lg:mx-auto mb-24'>
        <Card
          title={cardData[0].title}
          description={cardData[0].description}
          image={cardData[0].icon}
          color={cardData[0].color}
        />
        <div className='flex flex-col gap-6 sm:gap-7'>
          {cardData.slice(1, 3).map(({ title, description, icon, color }) => (
            <Card
              key={title}
              title={title}
              description={description}
              image={icon}
              color={color}
            />
          ))}
        </div>
        <Card
          title={cardData[3].title}
          description={cardData[3].description}
          image={cardData[3].icon}
          color={cardData[3].color}
        />
      </main>
    </>
  )
}
