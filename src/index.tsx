import React, { useState, useEffect, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Charts from './components/Charts'
import Navbar from './components/Navbar'

import './styles.scss'

const App = (): ReactElement => {
  const [coinData, setCoinData] = useState([])

  useEffect((): void => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      )
      .then((res): void => {
        console.log(res.data)
        setCoinData(res.data)
      })
      .catch((err): void => console.log(err))
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
