import { getCurrencySymbol } from '../../DataBaseAccess'

function getPriceTag(sum) {
  return getCurrencySymbol() + ' ' + sum
}

export { getPriceTag }
