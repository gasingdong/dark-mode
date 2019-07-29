import React, { ReactElement, useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'

interface Coin {
  name: string
  image: {
    thumb: string
    small: string
    large: string
  }
  coingecko_rank: string
  coingecko_score: number
  genesis_date: string
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
        <div className="coin_card__logo">
          <img alt={`${coin.name} logo`} src={coin.image.large} />
        </div>
        <div className="coin_card__row">
          <div className="coin_card__header">
            <h2>Coin Gecko Rank:</h2>
          </div>
          <div className="coin_card__info">
            <h2>{coin.coingecko_rank}</h2>
          </div>
        </div>
        <div className="coin_card__row">
          <div className="coin_card__header">
            <h2>Coin Gecko Score:</h2>
          </div>
          <div className="coin_card__info">
            <h2>{coin.coingecko_score}</h2>
          </div>
        </div>
        <div className="coin_card__row">
          <div className="coin_card__header">
            <h2>Genesis Date:</h2>
          </div>
          <div className="coin_card__info">
            <h2>{coin.genesis_date}</h2>
          </div>
        </div>
      </div>
    )
  }
  return <div className="coin-card">Loading...</div>
}
export default CoinInfo
