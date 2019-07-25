import React, { ReactElement, useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'

interface Coin {
  name: string
  sparkline_in_7d: Sparkline
}

interface Sparkline {
  price: number[]
}

interface MatchParams {
  coin: string
}

const CoinInfo: React.FC<RouteComponentProps<MatchParams>> = (
  props: RouteComponentProps<MatchParams>
): ReactElement => {
  const [coin, setCoin] = useState<Coin | null>(null)
  useEffect((): void => {
    async function getCoin(id: string): Promise<void> {
      try {
        const result = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`
        )
        console.log(result.data)
        setCoin(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCoin(props.match.params.coin)
  }, [props.match.params.coin])

  if (coin) {
    return (
      <div className="coin_card">
        <h1>{coin.name}</h1>
      </div>
    )
  }
  return <></>
}
export default CoinInfo
