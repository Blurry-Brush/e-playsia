import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      rating: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      rating: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      rating: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      rating: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      rating: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      rating: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      rating: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function LineRatingGraph() {
  return (
   <div className='bg-white p-6 rounded-lg w-fit mb-4 h-[55vh]'>
        <LineChart
          width={800}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" tick={{ fill: 'black' }} tickLine={{ stroke: 'black' }}/>
          <YAxis tick={{ fill: 'black' }} tickLine={{ stroke: 'black' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rating" stroke="#dc2626" activeDot={{ r: 8 }} />
          
        </LineChart>
      </div>
  )
}

export default LineRatingGraph