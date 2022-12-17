export const prices = (yearSubs, addons, plan) => {
  const { planPrices, addonPrices } = yearSubs
    ? {
        planPrices: { Arcade: 90, Advanced: 120, Pro: 150 },
        addonPrices: {
          'Online service': 10,
          'Larger storage': 20,
          'Customizable profile': 20
        }
      }
    : {
        planPrices: { Arcade: 9, Advanced: 12, Pro: 15 },
        addonPrices: {
          'Online service': 1,
          'Larger storage': 2,
          'Customizable profile': 2
        }
      }
  const planPrice = planPrices[plan]
  const addonPrice = addons.map(addon => addonPrices[addon])
  const totalPrice =
    planPrice + addonPrice.reduce((prev, curr) => prev + curr, 0)

  return {
    planPrice,
    addonPrice,
    totalPrice
  }
}
