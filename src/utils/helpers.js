export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(number)
}

export const hasToppings = (food) => {
  return food.section.includes('pizza')
}
