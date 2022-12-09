export const PriceText = ({yearSubs, price, isPlan}) => {
  return <>{isPlan ? '$' : '+$'}{price}{yearSubs ? '/yr' : '/mo'}</>
}
