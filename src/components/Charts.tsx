import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Chart from './Chart'

interface Coin {
  name: string
  symbol: string
  image: string
  sparkline_in_7d: Sparkline
}

interface Sparkline {
  price: number[]
}

const Charts = ({ coinData }: { coinData: Coin[] }): ReactElement => {
  return (
    <div className="charts">
      {coinData.map(
        (coin): ReactElement => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <Link to={`/${coin.symbol}`}>
                <img src={coin.image} height="40" alt={coin.name} />
              </Link>
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        )
      )}
    </div>
  )
}
export default Charts
