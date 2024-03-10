import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  // const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address]?.price ?? 0) : 0
  const cakePriceUsd = 3.15

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) 
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PancakeSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
