import React, { useState, useEffect, ReactElement } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Charts from './components/Charts'
import Navbar from './components/Navbar'

import './styles.scss'

const App = (): ReactElement => {
  const [coinData, setCoinData] = useState([])

  useEffect((): void => {
    async function getCoinData(): Promise<void> {
      try {
        const result = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
        )
        setCoinData(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCoinData()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
      <Route
        path="/"
        exact
        render={(): ReactElement => <Charts coinData={coinData} />}
      />
      {/* <Route path="/:coin" exact component={<></>} /> */}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
)
