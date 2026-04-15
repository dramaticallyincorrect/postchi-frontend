import { initializePaddle, type PricePreviewResponse } from '@paddle/paddle-js'
import { businessId } from '~/constants/prices'

export interface PaddlePrices {
  businessTotal: string
  currency: string
}

export const usePaddlePrices = () => {
  const prices = useState<PaddlePrices | null>('paddle-prices', () => null)
  const isFetching = useState<boolean>('paddle-prices-fetching', () => false)

  const fetchPrices = async () => {
    // Skip if already cached or a fetch is already in-flight
    if (prices.value !== null || isFetching.value) return

    isFetching.value = true
    try {
      const paddle = await initializePaddle({
        environment: 'production',
        token: paddleKey,
      })

      const result: PricePreviewResponse = await paddle!.PricePreview({
        items: [
          { quantity: 1, priceId: businessId },
        ],
      })

      const items = result.data.details.lineItems
      const businessTotal = items.find(v => v.price.id === businessId)?.formattedUnitTotals.total ?? ''

      prices.value = {
        businessTotal,
        currency: businessTotal.replace(/[\d.,\s]/g, '').trim(),
      }
    } catch (error) {
      console.error('Failed to fetch Paddle prices:', error)
    } finally {
      isFetching.value = false
    }
  }

  return { prices, isFetching, fetchPrices }
}
