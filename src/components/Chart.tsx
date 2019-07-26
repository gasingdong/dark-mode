import React, { ReactElement } from 'react'
import moment from 'moment'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

interface FormattedData {
  value: number
  date: string
}

const Chart = ({
  sparklineData,
  darkMode,
}: {
  sparklineData: number[]
  darkMode: boolean
}): ReactElement => {
  const formattedData = sparklineData.reduce(
    (result, price, idx): FormattedData[] => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx
        const date = moment()
          .subtract(timeToSubtract, 'hours')
          .format('ddd h:mma')
        result.push({ value: price, date })
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format('ddd h:mma')
        result.push({ value: price, date })
      }
      return result
    },
    [] as FormattedData[]
  )

  return (
    <LineChart width={1100} height={300} data={formattedData}>
      <Line
        type="monotone"
        dataKey="value"
        stroke={darkMode ? '#ccc' : '#8884d8'}
      />
      <CartesianGrid
        stroke={darkMode ? '#f5f5f5' : '#ccc'}
        strokeDasharray="5 5"
      />
      <XAxis
        stroke={darkMode ? '#f5f5f5' : '#707070'}
        dataKey="date"
        interval={3}
      />
      <YAxis stroke={darkMode ? '#f5f5f5' : '#707070'} />
      <Tooltip />
    </LineChart>
  )
}

export default Chart
