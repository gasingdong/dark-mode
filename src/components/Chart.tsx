import React, { ReactElement } from 'react'
import moment from 'moment'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

interface FormattedData {
  value: number
  date: string
}

const Chart = ({
  sparklineData,
}: {
  sparklineData: number[]
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
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
  )
}

export default Chart
