export const Price = ({yearSubs, price, isPlan}) => {
  return <>{isPlan ? '$' : '+$'}{price}{yearSubs ? '/yr' : '/mo'}</>
}
